import React from 'react';
import '../styles/about-section.css';
import me from '../assets/photos/me-preview-wm.png';
import demo from '../assets/vids/demo.mp4'

const AboutSection = () => {
    return (
        <main className="about-section">
            <div className="about-section-text">
                <p>
                    <mark className='hl-text'>In 2010</mark>, I started my journey in software development—first as a student, and five years later as a professional. It has been a challenging and exciting experience, taking me through different stages in my career.
                    After working in data science and ETL for some years, I became more interested in full-stack development, especially for web platforms. In 2022, I made the switch, and I feel it was the right choice.
                    Today, I’m excited about what the future can bring.
                </p>
                <p>
                    <mark className='hl-text'>In the last three years</mark>, working on software applications has helped me improve both my logical thinking
                    and my creativity, especially when designing clean and user-friendly interfaces.
                    This mix has been my biggest motivation.
                </p>
                <p>
                    I was born and raised in <mark className='hl-text'>Montevideo, Uruguay, in 1988.</mark><br />
                    With this simple portfolio, I want to give you a brief but clear idea of who I am and how I can help you on your projects. I hope we stay in touch and work together in the future.
                </p>
                <p>👉 To the right, you can find a short video presentation about me.</p>
            </div>
            <div className="about-section-vid">
                <video controls poster={me}>
                    <source src={demo} type="video/mp4" />
                </video>
            </div>
        </main>
    );
}

export default AboutSection;