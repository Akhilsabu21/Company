
import './App.css'
import Nav from './Components/Nav/Nav'
import Home from './Components/Body/Home/Home'
import Register from './Components/Body/Register/Register'
import Footer from './Components/Footer/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {

  return (
    <>

    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/'  Component={Home}/>
      <Route path='/register'  Component={Register}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

      {/* <Home/>
      <Register/>
      <Footer/> */}
    </>
  )
}

export default App
