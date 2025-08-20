import React, { useState } from 'react';
import '../styles/navigation.css';
import BottomNav from '../components/BottomNav';
import AboutSection from '../components/AboutSection';
import EduSection from '../components/EduSection';

const About = () => {

    const tabs = ["ABOUT", "EDUCATION", "PROFESSIONAL", "INTERESTS", "CONTACT"];
    const [activeTab, setActiveTab] = useState("ABOUT");

    return (<main>
        <div className="navigation-container">
            <nav className="navigation-tabs">
                {tabs.map((tab) => (
                    <div
                        key={tab}
                        className={`tab-wrapper ${activeTab === tab ? "active" : ""}`}
                    >
                        <button disabled={activeTab === tab} onClick={() => setActiveTab(tab)}>{tab}</button>
                    </div>
                ))}
            </nav>

            <section className="navigation-content">
                {activeTab === "ABOUT" && <AboutSection />}
                {activeTab === "EDUCATION" && <EduSection />}
            </section>

        </div>
        {/*<BottomNav />*/}
    </main>
    );
}

export default About;