import '../Pages.css';
import Navbar from '../components/Navbar';
import Journey from '../assets/journey.jfif'





  


const Home = () => {

// Skiil Section JS
    const frontendSkills = [
    { name: 'REACT / NEXT.JS', level: '95%' },
    { name: 'TAILWIND CSS / UI DESIGN', level: '98%' },
    { name: 'TYPESCRIPT', level: '90%' },
  ];

  const backendSkills = [
    { name: 'NODE.JS / EXPRESS', level: '92%' },
    { name: 'POSTGRESQL / MONGODB', level: '88%' },
    { name: 'CLOUD INFRASTRUCTURE (AWS)', level: '85%' },
  ];


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
                        <h3>4+</h3>
                        </div>
                        
                        <div className="pioe">
                        <p>YEARS OF EXPERIENCE</p>
                        <p>PROJECTS DELIVERED</p>
                        </div>
                    </div>
                    </div>
                </main>
            </section>
            {/* Skill Section */}

            <section className="skills-container">
                {/* Header Row */}
                <div className="skills-header">
                    <h2 className="skills-main-title">
                    Technological <span className="skills-gradient-text">Arsenal</span>
                    </h2>
                    <p className="skills-overline">FULL-STACK CAPABILITY</p>
                </div>

                {/* Cards Grid */}
                <div className="skills-grid">
                    
                    {/* Frontend Card */}
                    <div className="skills-card">
                    <div className="card-title-row">
                        <svg className="card-icon icon-purple-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                        <h3>Frontend Engineering</h3>
                    </div>
                    <div className="skills-list">
                        {frontendSkills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <div className="skill-info">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">{skill.level}</span>
                            </div>
                            <div className="progress-bar-bg">
                            <div className="progress-bar-fill fill-purple-light" style={{ width: skill.level }}></div>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>

                    {/* Backend Card */}
                    <div className="skills-card">
                    <div className="card-title-row">
                        <svg className="card-icon icon-purple-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
                        </svg>
                        <h3>Backend Architecture</h3>
                    </div>
                    <div className="skills-list">
                        {backendSkills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <div className="skill-info">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">{skill.level}</span>
                            </div>
                            <div className="progress-bar-bg">
                            <div className="progress-bar-fill fill-purple-dark" style={{ width: skill.level }}></div>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>

                </div>
            </section>

            Skill sect
            <section className="artifacts-container">
      <h2 className="artifacts-heading">
        Selected <span className="highlight-text">Artifacts</span>
      </h2>
      
      <div className="artifacts-grid">
        
        {/* Box 1: Nexus Analytics Platform (Top Left) */}
        <div className="artifact-card large-wide box-nexus">
          <div className="card-content">
            <div className="tag-container">
              <span className="artifact-tag">AVATAR</span>
              <span className="artifact-tag">R&D</span>
            </div>
            <h3 className="card-title">Nexus Analytics Platform</h3>
            <p className="card-description">
              Real-time data visualization engine for enterprise-level logistics tracking.
            </p>
            <div className="card-links">
              <a href="#" className="icon-link" aria-label="Link">🔗</a>
              <a href="#" className="icon-link" aria-label="Code">⟨/⟩</a>
            </div>
          </div>
        </div>

        {/* Box 2: Aether Wallet (Top Right) */}
        <div className="artifact-card large-tall box-aether">
          <div className="card-content">
            <div className="tag-container">
              <span className="artifact-tag">REACT & WEB3</span>
            </div>
            <h3 className="card-title">Aether Wallet</h3>
            <div className="card-links">
              <a href="#" className="icon-link" aria-label="Link">🔗</a>
            </div>
          </div>
        </div>

        {/* Box 3: Synapse Core (Bottom Left) */}
        <div className="artifact-card small-square box-synapse">
          <div className="card-content">
            <div className="tag-container">
              <span className="artifact-tag">PYTHON AI</span>
            </div>
            <h3 className="card-title">Synapse Core</h3>
            <div className="card-links">
              <a href="#" className="icon-link" aria-label="Link">🔗</a>
            </div>
          </div>
        </div>

        {/* Box 4: Ethereal Studio (Bottom Right) */}
        <div className="artifact-card medium-wide box-ethereal">
          <div className="card-content">
            <div className="tag-container">
              <span className="artifact-tag">VUE3</span>
              <span className="artifact-tag">THREEJS</span>
            </div>
            <h3 className="card-title">Ethereal Studio</h3>
            <p className="card-description">
              A fully immersive 3D portfolio experience for creative agencies.
            </p>
            <div className="card-links">
              <a href="#" className="icon-link" aria-label="Link">🔗</a>
            </div>
          </div>
        </div>

      </div>
    </section>
        </>
    )
}

export default Home