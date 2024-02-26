// import { Icon } from 'leaflet';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

const Location = () => {


    const [doctorList, setDoctorList] = useState([]);

    const fetchDoctors = async () => {
        const res = await fetch("http://localhost:3000/doctor/getall");

        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setDoctorList(data);
    };

    useEffect(() => {
        fetchDoctors();
    }, []);

    


    const [coords, setCoords] = useState([])
    const [selDoc, setSelDoc] = useState(null);

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            // doSomething(position.coords.latitude, position.coords.longitude);
            setCoords([position.coords.latitude, position.coords.longitude])
            console.log(position.coords.latitude, position.coords.longitude);
        });
    }


    useEffect(() => {
        getCurrentLocation();
    }, [])

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radius of the earth in km
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c; // Distance in km
        return distance;
    }

    const deg2rad = (deg) => {
        return deg * (Math.PI / 180);
    }


    return (
        <div>
            <MapContainer style={{ width: 1200, height: 800 }} center={coords.length > 0 ? coords : [26.8467, 80.9462]} zoom={20} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {
                    coords.length > 0 && doctorList.map((doctor) => {
                        const distance = calculateDistance(coords[0], coords[1], doctor.latitude, doctor.longitude);
                        console.log(distance);
                        if (distance <= 5) {
                            return (
                                <Marker position={[doctor.latitude, doctor.longitude]}>
                                    <Popup>
                                        <h2>{doctor.name}</h2>
                                        <p>{doctor.speciality}</p>
                                        <button onClick={() => setSelDoc(doctor)}>Select</button>
                                    </Popup>
                                </Marker>
                            )
                        }
                        return null;
                    })
                }

                {
                    coords.length > 0 && <Marker position={coords}>
                        <Popup>
                            You are here
                        </Popup>
                    </Marker>
                }
            </MapContainer>
            {
                selDoc && <div>
                    <h2>{selDoc.name}</h2>
                    <p>{selDoc.speciality}</p>
                </div>
            }
        </div>
    )
}

export default Location