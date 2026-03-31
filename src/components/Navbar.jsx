import React, { useEffect, useState, } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import "../components/navbar.css"

function Navbar({ activeSection, handleNavClick }) {
    const [showNavbar, setShowNavbar] = useState(false);
    const [changeIcon, setChangeIcon] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [activeItem, setActiveItem] = useState('Accueil')
    // const [activeSection, setActiveSection] = useState('Accueil');

    useEffect(() => {
        const handleScroll = () => {
            setShowNavbar(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (item, section) => {
        setActiveItem(item);
        handleNavClick(section);
        setShowMenu(false);
        setChangeIcon(false);
    };
    const toggleNavbar = () => {
        setShowMenu((prevShowMenu) => !prevShowMenu);
        setChangeIcon(!changeIcon);
    };

    return (
        <header className={`header ${showNavbar ? 'show' : ''}`}>
            <a href="#" className='logo'>Adam<span>.</span></a>
            
            <div className="menu-icon" onClick={toggleNavbar}>
                <FontAwesomeIcon icon={changeIcon ? faTimes : faBars} />
            </div>

            <nav className={`navbar ${showMenu ? 'show' : ''}`}>
                <a href='#' className={activeSection === 'home' ? 'active' : ''}
                    onClick={() => handleClick('Accueil', 'home')}>Accueil</a>
                <a href='#Works' className={activeSection === 'Works' ? 'active' : ''}
                    onClick={() => handleClick('Services', 'Works')}>Services</a>
                <a href='#Portfolio' className={activeSection === 'Portfolio' ? 'active' : ''}
                    onClick={() => handleClick('Portfolio', 'Portfolio')} >Portfolio</a>
                <a href='#skills' className={activeSection === 'skills' ? 'active' : ''}
                    onClick={() => handleClick('Competences', 'skills')} >Compétences</a>
                <a href='#formation' className={activeSection === 'formation' ? 'active' : ''}
                    onClick={() => handleClick('formation', 'formation')} >Formation</a>
                <a href='#Contact' className={activeSection === 'Contact' ? 'active' : ''}
                    onClick={() => handleClick('Contact', 'Contact')} >Contact</a>
            </nav>
        </header >
    )
}
export default Navbar