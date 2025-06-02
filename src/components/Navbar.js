import logo from '../assets/logo.png';

export default function Navbar() {
    return (
        <nav className="navbar">
            <img draggable="false" className='logo-img' src={logo} alt="logo" />
            <span className='logo-text'>Meme Generator</span>
        </nav>
    )
}