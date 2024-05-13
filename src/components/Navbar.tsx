import { useState } from 'react'
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { Logo } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-o z-20 bg-secondary`}>
      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        <Link
          to="/"
          className="flex items-center gap2"
          onClick={() => {
            setActive("");
            window.scrollTo(0,0);
            console.log(active);
          }}
        >
          <img src={Logo} alt="logo" className="h-10 object-contain"/>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <a href={`#${link.id}`}>{link.title}</a>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;