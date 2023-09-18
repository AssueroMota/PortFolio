

import '../src/sass/global.scss'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Curses from './components/Curses/Curses'
import Header from './components/Header/Header'
import Numbers from './components/Numbers/Numbers'
import Perfil from './components/Perfil/Perfil'
import Projects from './components/Projects/Projects'
import Qualifications from './components/Qualifications/Qualifications'
import JavaScript from './components/Qualifications/js/script'
import Service from './components/Service/Service'

function App() {


  return (
    <>
      <Header />
      <About/>
      <Projects/>
      <Numbers/>
      {/* <Qualifications/> */}
      <Perfil/>
      <Curses/>
      <Service/>
      <Contact/>
    </>
  )
}

export default App
