import './App.css'
import LogoLightSvg from './logoLightSvg'

function Header() {

  return (
      <nav className='navbar'>
        <div className='logo'>
          <LogoLightSvg />
        </div>
        <div className='otherside'>
          <p>Some Profile text</p>
          <button className='btn'>Add Card</button>
        </div>
      </nav>
  )
}

export default Header
