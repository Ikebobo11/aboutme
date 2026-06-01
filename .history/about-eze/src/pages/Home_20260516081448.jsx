import '../Pages.css';
import Navbar from '../components/Navbar';
import Journey from '../assets/'
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
             {/* The Jouney Section  */}
             <section id="the-story">
                <main>
                    <div className="story-img">
                    {/* Ensure the path is correct relative to your public folder or source */}
                    <img src={Journey} alt="Story behind the code" />
                    </div>

                    <div className="story-div">
                    <h1>
                        The Story Behind <span>The Code</span>
                    </h1>
                    
                    <p>
                        I don't just code; I orchestrate digital environments. 
                        My journey began at the intersection of logic and aesthetics, 
                        leading me to master the full stack while never losing 
                        sight of the user's emotional experiences.
                    </p>
                    
                    <p>
                        Based on the philosophy of the "Digital Alchemist," I 
                        transform raw requirements into gold-standard interfaces. 
                        Every project is an opportunity to push the boundaries of 
                        what's possible in the browser.
                    </p>

                    <div id="ioe">
                        <div className="hioe">
                        <h3>2+</h3>
                        <p>YEARS OF EXPERIENCE</p>
                        </div>
                        
                        <div className="pioe">
                        <h3>4+</h3>
                        <p>PROJECTS DELIVERED</p>
                        </div>
                    </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Home