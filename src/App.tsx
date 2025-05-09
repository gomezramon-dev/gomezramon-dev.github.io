import { BrowserRouter } from "react-router-dom";
import classNames from "classnames";
import { useMenuStore } from "./store";
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
  // Global menu state for overlay control
  const toggleMenu = useMenuStore((state) => state.toggleMenu);
  const setToggleMenu = useMenuStore((state) => state.setToggleMenu);
  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        {/* Full-page overlay: blur and dark background */}
        <div
          onClick={() => setToggleMenu(false)}
          className={classNames(
            "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 z-40",
            toggleMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        />
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
