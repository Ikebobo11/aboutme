import '../Pages.css';
import Navbar from '../components/Navbar';
const Home = () => {
    return(
        <>
            <Navbar />
            <section className={styles.heroContainer}>
      <div className={styles.content}>
        <p className={styles.overline}>DIGITAL ALCHEMIST</p>
        
        <h1 className={styles.title}>
          Hi, I’m <span className={styles.gradientText}>Ezeji Ikemba (Neze)</span>
        </h1>
        
        <p className={styles.description}>
          Full Stack Developer crafting technical precision with creative fluidity. 
          I build immersive digital experiences where code meets high-end editorial design.
        </p>
        
        <div className={styles.buttonGroup}>
          <button className={styles.primaryBtn}>VIEW PROJECTS</button>
          <button className={styles.secondaryBtn}>HIRE ME</button>
        </div>
      </div>
    </section>
        </>
    )
}

export default Home