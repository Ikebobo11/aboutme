import '../Pages.css';
import Navbar from '../components/Navbar';
import Journey from '../assets/journey.jfif';
import Face from '../assets/resized-face.jpg';
import Booking from





  


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
            {/* Skill Section */}

            <section className="worked-for-section">
      <div className="worked-for-container">
        <h2 className="section-title">Projects I've Worked On</h2>
        
        <div className="projects-grid">
          
          {/* Box 1 */}
          <div className="project-card">
            <div className="project-image-wrapper">
              <img 
                src={Face} 
                alt="E-Commerce Dashboard" 
                className="project-image" 
              />
            </div>
            <div className="project-details">
              <h3 className="project-name">E-Commerce Dashboard</h3>
              <a 
                href="https://example.com/project-one" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link-icon"
                aria-label="Preview E-Commerce Dashboard"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Box 2 */}
          <div className="project-card">
            <div className="project-image-wrapper">
              <img 
                src="https://via.placeholder.com/400x250" 
                alt="Fitness Tracker App" 
                className="project-image" 
              />
            </div>
            <div className="project-details">
              <h3 className="project-name">Fitness Tracker App</h3>
              <a 
                href="https://example.com/project-two" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link-icon"
                aria-label="Preview Fitness Tracker App"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Box 3 */}
          <div className="project-card">
            <div className="project-image-wrapper">
              <img 
                src="https://via.placeholder.com/400x250" 
                alt="AI Chat Interface" 
                className="project-image" 
              />
            </div>
            <div className="project-details">
              <h3 className="project-name">AI Chat Interface</h3>
              <a 
                href="https://example.com/project-three" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link-icon"
                aria-label="Preview AI Chat Interface"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Box 4 */}
          <div className="project-card">
            <div className="project-image-wrapper">
              <img 
                src="https://via.placeholder.com/400x250" 
                alt="Recipe Finder Platform" 
                className="project-image" 
              />
            </div>
            <div className="project-details">
              <h3 className="project-name">Recipe Finder Platform</h3>
              <a 
                href="https://example.com/project-four" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link-icon"
                aria-label="Preview Recipe Finder Platform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Box 5 */}
          <div className="project-card">
            <div className="project-image-wrapper">
              <img 
                src="https://via.placeholder.com/400x250" 
                alt="Crypto Wallet UX" 
                className="project-image" 
              />
            </div>
            <div className="project-details">
              <h3 className="project-name">Crypto Wallet UX</h3>
              <a 
                href="https://example.com/project-five" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link-icon"
                aria-label="Preview Crypto Wallet UX"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
        </>
    )
}

export default Home