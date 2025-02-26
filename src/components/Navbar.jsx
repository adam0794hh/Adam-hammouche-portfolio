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

    const handleScroll = () => {
        const scrolly = window.scrollY;
        console.log("Scroll Y:", scrolly);
        setShowNavbar(scrolly > 200);
        if (scrolly >= 0 && scrolly < 735.20) {
            handleNavClick('home');
        } else if (scrolly >= 735.20 && scrolly < 1512.80) {
            handleNavClick('Works');
        } else if (scrolly >= 1512.80 && scrolly < 2528.80) {
            handleNavClick('Portfolio');
        } else if (scrolly >= 2528.80 && scrolly < 3562.39) {
            handleNavClick('skills');
        } else if (scrolly >= 3562.39 && scrolly < 4572.79) {
            handleNavClick('formation');
        } else if (scrolly >= 4572.79) {
            handleNavClick('Contact');
        }

    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Nettoyage : supprimer l'écouteur d'événements lors du démontage du composant
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (item, section) => {

        setActiveItem(item);
        handleNavClick(section);
        // setActiveSection(section);
        setShowMenu(false);
        setChangeIcon(false);

        if (handleNavClick) {
            handleNavClick(section);
          }

    };
    const toggleNavbar = () => {
        setShowMenu((prevShowMenu) => !prevShowMenu);
        setChangeIcon(!changeIcon);
    };

    return (
        <header className={`header ${showNavbar ? 'show' : ''}`}>
            <a href="#" className='logo'>Adam.<span className="animate" style={{ '--i': 1 }}></span></a>
            <div className="menu-icon">
                <FontAwesomeIcon
                    onClick={toggleNavbar}
                    className="menu-icon"
                    icon={changeIcon ? faTimes : faBars}>
                </FontAwesomeIcon>
                <span className="animate" style={{ '--i': 2 }}></span>
            </div>


            <nav className={`navbar ${showMenu ? 'show' : ''}`}>
                <a href='#' className={` ${activeSection === 'home' ? 'active' : ''}`}
                    onClick={() => handleClick('Accueil', 'home')}>Accueil</a>
                <a href='#Works' className={` ${activeSection === 'Works' ? 'active' : ''}`}
                    onClick={() => handleClick('Services', 'Works')}>Services</a>
                <a href='#Portfolio' className={` ${activeSection === 'Portfolio' ? 'active' : ''}`}
                    onClick={() => handleClick('Portfolio', 'Portfolio')} >Portfolio</a>
                <a href='#skills' className={` ${activeSection === 'skills' ? 'active' : ''}`}
                    onClick={() => handleClick('Competences', 'skills')} >Competences</a>
                <a href='#formation' className={` ${activeSection === 'formation' ? 'active' : ''}`}
                    onClick={() => handleClick('formation', 'formation')} >Formation</a>
                <a href='#Contact' className={` ${activeSection === 'Contact' ? 'active' : ''}`}
                    onClick={() => handleClick('Contact', 'Contact')} >Contact</a>

                <span className="active-nav"></span>
                <span className="animate" style={{ '--i': 2 }}></span>
            </nav>
        </header >
    )
}
export default Navbar