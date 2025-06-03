import logo from '../assets/logo.png';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div><img className='logo-img' src={logo} alt="logo" /></div>
            <div className='logo-text'>Meme Generator</div>
        </nav>
    )
}