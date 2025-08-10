import React from 'react';
import '../styles/about.css';
import BottomNav from '../components/BottomNav';
import AboutSection from '../components/AboutSection';

const About = () => {
    return (<main>
        <div className="about">
            <nav className="about-tabs">
                <button disabled className='tmp'>ABOUT</button>
                <button>EDUCATION</button>
                <button>PROFESSIONAL</button>
                <button>INTERESTS</button>
                <button>CONTACT</button>
            </nav>

            <section className="about-content">
                <AboutSection />
            </section>

        </div>
        <BottomNav />
    </main>
    );
}

export default About;