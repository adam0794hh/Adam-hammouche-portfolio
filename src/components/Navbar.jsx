import React, { useEffect, useState, } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons';
import "../components/navbar.css"

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);
    const [changeIcon, setChangeIcon] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [activeItem, setActiveItem] = useState('Accueil')
    const [activeSection, setActiveSection] = useState('Accueil');

    const handleScroll = () => {
        const scrolly = window.scrollY;
        console.log("Scroll Y:", scrolly);
        setShowNavbar(scrolly > 200);
        if (scrolly >= 0 && scrolly < 735) {
            setActiveSection('Accueil');
        } else if (scrolly >= 735 && scrolly < 1512) {
            setActiveSection('Mon Travail');
        } else if (scrolly >= 1512 && scrolly < 2559) {
            setActiveSection('Portfolio');
        } else if (scrolly >= 2559 && scrolly < 3592) {
            setActiveSection('Competences');
        } else if (scrolly >= 3592 && scrolly < 4644) {
            setActiveSection('Formation');
        } else if (scrolly >= 4644) {
            setActiveSection('Contact');
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
        setActiveSection(section);
        setShowMenu(false);

    };
    const toggleNavbar = () => {
        setShowMenu((prevShowMenu) => !prevShowMenu);
        setChangeIcon(!changeIcon);
    };

    return (
        <header className={`header ${showNavbar ? 'show' : ''}`}>
            <a href="#" className='logo'>Adam.</a>

            <FontAwesomeIcon
                onClick={toggleNavbar}
                className="menu-icon"
                icon={changeIcon ? faTimes : faBars}
            />

            <nav className={`navbar ${showMenu ? 'show' : ''}`}>
                <a href='#' className={` ${activeSection === 'Accueil' ? 'active' : ''}`}
                    onClick={() => handleClick('Accueil', 'Accueil')}>Accueil</a>
                <a href='#Works' className={` ${activeSection === 'Mon Travail' ? 'active' : ''}`}
                    onClick={() => handleClick('Mon Travail', 'Mon Travail')}>Mon Travail</a>
                <a href='#Portfolio' className={` ${activeSection === 'Portfolio' ? 'active' : ''}`}
                    onClick={() => handleClick('Portfolio', 'Portfolio')} >Portfolio</a>
                <a href='#skills' className={` ${activeSection === 'Competences' ? 'active' : ''}`}
                    onClick={() => handleClick('Competences', 'Competences')} >Competences</a>
                <a href='#formation' className={` ${activeSection === 'Formation' ? 'active' : ''}`}
                    onClick={() => handleClick('Formation', 'Formation')} >Formation</a>
                <a href='#Contact' className={` ${activeSection === 'Contact' ? 'active' : ''}`}
                    onClick={() => handleClick('Contact', 'Contact')} >Contact</a>
                
                <span className="active-nav"></span> 
            </nav>
        </header >



        // <div className={`navbar-default ${showNavbar ? 'show' : ''}`}>
        //     <div className='container'>
        //         <div className='row'>
        //             <a className='logo'>
        //                 ADAM <span className="animate" style={{ '--i': 1 }}></span>
        //             </a>
        //             <div>
        //                 <nav className='nav-flex'>
        //                     <div className="mobile-header">
        //                         <button className="menu-icon" onClick={toggleNavbar}>
        //                             <span className="animate" style={{ '--i': 2 }}></span>
        //                             <FontAwesomeIcon icon={faBars} />
        //                         </button>
        //                     </div>
        //                     <ul className={`nav-menu ${showMenu ? 'show' : ''}`}>
        //                         <li>
        //                             <a href='#Home'
        //                                 className={`menu-items ${activeSection === 'Accueil' ? 'active' : ''}`}
        // onClick={ () => handleClick('Accueil', 'Accueil') }> Accueil</a >
        //                         </li>
        //                         <li>
        //                             <a href='#Works'
        //                                 className={`menu-items ${activeSection === 'Mon Travail' ? 'active' : ''}`}
        //                                 onClick={() => handleClick('Mon Travail', 'Mon Travail')}>Mon Travail</a>
        //                         </li>
        //                         <li>
        //                             <a href='#Portfolio'
        //                                 className={`menu-items ${activeSection === 'Portfolio' ? 'active' : ''}`}
        //                                 onClick={() => handleClick('Portfolio', 'Portfolio')}>Portfolio</a>
        //                         </li>
        //                         <li>
        //                             <a href='#Profil'
        //                                 className={`menu-items ${activeSection === 'Profil' ? 'active' : ''}`}
        //                                 onClick={() => handleClick('Profil', 'Profil')}>Competences</a>
        //                         </li>
        //                         <li>
        //                             <a href='#Formation'
        //                                 className={`menu-items ${activeSection === 'Formation' ? 'active' : ''}`}
        //                                 onClick={() => handleClick('Formation', 'Formation')}>Formation</a>
        //                         </li>
        //                         <li>
        //                             <a href='#Contact'
        //                                 className={`menu-items ${activeSection === 'Contact' ? 'active' : ''}`}
        //                                 onClick={() => handleClick('Contact', 'Contact')}>Contact</a>
        //                         </li>
        //                         <span className="animate" style={{ '--i': 2 }}></span>
        //                     </ul>


        //                 </nav>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
export default Navbar