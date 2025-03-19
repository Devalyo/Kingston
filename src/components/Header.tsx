import { Link } from 'react-router';
import logo from '../assets/Logomark.svg';
import cart from '../assets/cartIcon.svg';
import user from '../assets/userIcon.svg';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='w-full'>
        <div className='bg-neutral-900 h-10 font-[Inter] text-white p-5 flex items-center justify-center'>Get 25% OFF on your first order<Link to={'/shop'} className='font-semibold'>. Order Now </Link></div>
        <header className="flex md:justify-between justify-center py-8 lg:px-65 px-25 items-center align-middle">
          <div className='flex lg:gap-40 gap-20 align-middle items-center'>
              <div className='flex gap-4 items-center'>
                <img className="h-13" src={logo}></img>
                <div className="font-[Manrope] font-[900] text-3xl text-gray-900">Kingston</div>
              </div>
              <nav className='text-neutral-500 font-[Inter] hidden gap-10 md:visible md:flex lg:mr-10'>
                <Link className='hover:font-[800]' to={'/home'}>Home</Link>
                <Link className='hover:font-[800]' to={'/shop'}>Shop</Link>
                <Link className='hover:font-[800]' to={'/about'}>About</Link>
              </nav>
          </div>

            <div className='md:flex hidden gap-8 ml-5'>
                <img src={cart}></img>
                <img src={user}></img>
            </div>

            <button 
            className="md:hidden p-2 rounded-md focus:outline-none ml-2 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>


          {menuOpen && (
        <nav className="md:hidden bg-white text-neutral-500 absolute left-0 top-32 w-full py-5 px-10 flex flex-col gap-4 transition-all">
          <Link to={'/home'} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to={'/shop'} onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link to={'/about'} onClick={() => setMenuOpen(false)}>About</Link>
        </nav>
      )}

        </header>
    </div>
  )
}

export default Header;