import '../App.css';
import Logo from '../assets/Neze Logo.png'
import {}

const Navbar = () =>{
    return(
        <>
           <main className="header-main">
      <img 
        style={{ width: '120px', height: 'auto' }} 
        src={Logo} 
        alt="Neze" 
      />
      
      <nav className="hide-link">
        <a className="at1" href="#work">WORK</a>
        <a className="at1" href="#services">SERVICES</a>
        <a className="at1" href="#about">ABOUT</a>
        <a className="at1" href="#contact">CONTACT</a>
      </nav>

      <a className="hire" href="#hire">HIRE ME</a>

      <div className="allmenu">
        <i 
          className="fa-solid fa-bars" 
          id="menu" 
          style={{ width: '80px' }} 
        //   onClick={seeMenuNav}
        ></i>
        <i 
          className="fa-solid fa-x" 
          id="close" 
        //   onClick={hideMenuNav}
        ></i>
      </div>
    </main>
        </>
    )
}

export default Navbar