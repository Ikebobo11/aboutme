import '../Pages.css';
import Navbar from '../components/Navbar';
const Home = () => {
    return(
        <>
            <Navbar />
            <section className="hero-container">
                <div className="hero-content">
                    <p className="hero-overline">DIGITAL ALCHEMIST</p>
                    
                    <h1 className="hero-title">
                    Hi, I’m <span className="hero-gradient-text">Ezeji Ikemba (Neze)</span>
                    </h1>
                    
                    <p className="hero-description">
                    Full Stack Developer crafting technical precision with creative fluidity. 
                    I build immersive digital experiences where code meets high-end editorial design.
                    </p>
                    
                    <div className="hero-button-group">
                    <button className="btn-primary">VIEW PROJECTS</button>
                    <button className="btn-secondary">HIRE ME</button>
                    </div>
                </div>
            </section>
            The Joune
        </>
    )
}

export default Home