import { BrowserRouter } from "react-router-dom";
import {
  DesktopNavbar,
  MobileNavbar,
  Header,
  AboutMe,
  Skills,
  Projects,
  ContactMe,
  Certifications,
} from "./components/";

/**
 * @TODO - NAVBAR
 * - Add custom measurements to tailwind.config.ts
 * - Replace animation with Motion Frame
 * 
 * @TODO - HEADER
 * - Refactor code, especially WelcomeTo.tsx
 * - Add custom measurements to tailwind.config.ts
 * - Replace animation with Motion Frame
 */

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <DesktopNavbar />
        <MobileNavbar />
        <Header />
        <AboutMe />
        <Skills />
        <Certifications />
        <Projects />
        <ContactMe />
      </div>
    </BrowserRouter>
  );
};

export default App;
