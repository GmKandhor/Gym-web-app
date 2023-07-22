import { BrowserRouter,Routes,Route } from 'react-router-dom'

// import Home from './pages/home/Home'
import About from './pages/about/About'
import Gallery from './pages/gallery/Gallery'
import Contact from './pages/contact/Contact'
import Plans from './pages/plans/Plans'
import Traineers from './pages/traineers/Traineers'
import NotFound from './pages/notFound/NotFound'
import Navbar from './Components/Navbar'
import Home from './pages/home/Home'
// import './index.css'
import './index.css'
import Footer from './Components/Footer'

function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='gallery' element={<Gallery/>}/>
      <Route path='traineers' element={<Traineers/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='plans' element={<Plans/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
      {/* <Home/>
      <About/>
      <Gallery/>
      <Contact/>
      <Traineers/>
      <Plans/>
      <NotFound/> */}
    </BrowserRouter>
  )
}

export default App
