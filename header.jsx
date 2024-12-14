
import React from 'react' //6.9k (gzippd:207k)
import './header.css'; 
const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="h-container">
                <img src="./image.png" alt="logo" width={100} />


 
                <div className="h-menu"></div>
                <a href="">Residencise</a>
                
                <a href=""> Our value</a>
                <a href="">Contact Us </a>
                <a href=""> Get strated</a>
                <button className='Button'>
                <a href="">Contact</a> 
                </button>
            </div>

        </section> 
    )
}

export default Header;