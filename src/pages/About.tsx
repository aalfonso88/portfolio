import React, { useState } from 'react';
import '../styles/about.css';
import BottomNav from '../components/BottomNav';
import AboutSection from '../components/AboutSection';

const About = () => {

    const tabs = ["ABOUT", "EDUCATION", "PROFESSIONAL", "INTERESTS", "CONTACT"];
    const [activeTab, setActiveTab] = useState("ABOUT");

    return (<main>
        <div className="about">
            <nav className="about-tabs">
                {tabs.map((tab) => (
                    <div
                        key={tab}
                        className={`tab-wrapper ${activeTab === tab ? "active" : ""}`}
                    >
                        <button disabled={activeTab === tab} onClick={() => setActiveTab(tab)}>{tab}</button>
                    </div>
                ))}
            </nav>

            <section className="about-content">
                <AboutSection />
            </section>

        </div>
        {/*<BottomNav />*/}
    </main>
    );
}

export default About;