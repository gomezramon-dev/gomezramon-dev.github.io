import { BrowserRouter } from "react-router-dom";
import {
  DesktopNavbar,
  MobileNavbar,
  Header,
  AboutMe,
  Skills,
  Projects,
  ContactMe,
} from "./components/";

// TODO: Consider Refactoring animations to only handle it when mobile/desktop viewport changes (maybe applying a mediator pattern design)

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <DesktopNavbar />
        <MobileNavbar />
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
    </BrowserRouter>
  );
};

export default App;
