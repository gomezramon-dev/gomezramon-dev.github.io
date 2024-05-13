import { BrowserRouter } from "react-router-dom"
import { Navbar, Header, AboutMe, Skills, Projects, ContactMe } from './components/';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar/>
        <Header/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <ContactMe/>
      </div>
    </BrowserRouter>
  )
}

export default App;