import React from 'react';
import '../styles/about-section.css';
import me from '../assets/photos/me-preview-wm.png';
import demo from '../assets/vids/demo.mp4'
import { IconPlay } from './common/Icons';

const AboutSection = () => {
    return (
        <main className="about-section">
            <div className="about-section-text">
                <section>
                    <span>Hello World!</span>
                    <p>
                        Welcome to my portfolio! This pretends to bring you a short but complete description about me.
                        All starts in 2010 —first as a student, and five years later as a professional.
                        It has been a challenging and exciting experience, taking me through different stages in my career.
                        After working in data science and ETL for some years, I became more interested in full-stack development,
                        especially for web platforms.
                    </p>
                </section>
                <section>
                    <span>What about now...</span>
                    <p>
                        Since 2022 I work as a Full-Stack Developer, embarked in the exciting trip of developing useful, robust and user focus web applications.
                        This role implies a great mix of creativity and logical thinking, being my daily motivation.
                    </p>
                </section>
                <section>
                    <span>What’s next...</span>
                    <p>
                        Click on play button to watch a short description of my next goals...
                    </p>
                    <div className='about-section-icon-play'>
                        <button><IconPlay /></button>
                    </div>
                </section>

            </div>
            <div className="about-section-vid" style={{ display: 'none' }}>
                <video controls poster={me}>
                    <source src={demo} type="video/mp4" />
                </video>
            </div>
        </main>
    );
}

export default AboutSection;