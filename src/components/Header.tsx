import { Link } from 'react-router';
import logo from '../assets/Logomark.svg';
import cart from '../assets/cartIcon.svg';
import user from '../assets/userIcon.svg';

function Header() {
  return (
    <div>
        <div className='bg-neutral-900 h-10 font-[Inter] text-white p-5 flex items-center justify-center'>Get 25% OFF on your first order<Link to={'/shop'} className='font-semibold'>. Order Now </Link></div>
        <header className="flex justify-between py-8 px-65 items-center align-middle">
          <div className='flex gap-40 align-middle items-center'>
              <div className='flex gap-4 items-center'>
                <img className="h-13" src={logo}></img>
                <div className="font-[Manrope] font-[900] text-3xl text-gray-900">Kingston</div>
              </div>
              <nav className='text-neutral-500 font-[Inter] flex gap-10'>
                <Link to={'/home'}>Home</Link>
                <Link to={'/shop'}>Shop</Link>
                <Link to={'/about'}>About</Link>
              </nav>
          </div>

            <div className='flex gap-8'>
                <img src={cart}></img>
                <img src={user}></img>
            </div>

        </header>
    </div>
  )
}

export default Header;