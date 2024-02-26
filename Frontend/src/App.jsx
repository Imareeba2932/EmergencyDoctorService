import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { SnackbarProvider } from 'notistack'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Location from './components/Location'
import AddDoctor from './components/AddDoctor'
import PushNotificationButton from './components/PushNotificationButton'
// import { HeaderMegaMenu } from './components/Header'

const App = () => {
  return (
    <SnackbarProvider anchorOrigin={{horizontal: 'center', vertical: 'top'}} maxSnack={3}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Location' element={<Location />} />
          <Route path='/AddDoctor' element={<AddDoctor/>} />
          <Route path='/PushNotificationButton' element={<PushNotificationButton />} />
          {/* <Route path='Header' element={<HeaderMegaMenu />} /> */}
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  )
}

export default App
