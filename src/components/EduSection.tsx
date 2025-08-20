import React, { useState } from 'react';
import '../styles/edu-section.css';
import degree from '../assets/photos/degree.png';
import { ArrowBack } from './common/Icons';

const EduSection = () => {
    const slides = [
        <span>
            <div className='edu-detail-slide-title'>
                <p>
                    PROGRAMMING
                </p>
            </div>
            <p>
                <strong>Fundamentals</strong><br />
                Statements, loops, and Structures.<br />
                Modularization
            </p>
            <p>
                <strong>Algorithms and Structures</strong><br />
                Time Complexity and Big O Notation<br />
                Divide and Conquer<br />
                Searching and Sorting<br />
                Dynamic Programming<br />
                Graph Representation
            </p>
            <p>
                <strong>Programming Paradigms</strong><br />
                Object Oriented, Functional Programming<br />
                Design patterns<br />
                Layered Architecture: Presentation, Business Logic, and Data Management
            </p>
        </span>,
        <span>
            <div className='edu-detail-slide-title'>
                <p>
                    DATABASES
                </p>
            </div>
            <p>
                <strong>Fundamentals</strong><br />
                Data Modeling<br />
                SQL<br />
                Relational Design<br />
                Transactions<br />
                Optimization
                Object Relational Mapping (ORM)
                Django, SQLAlchemmy
            </p>
            <p>
                <strong>No SQL</strong><br />
                Object Document Mapping (ODM)<br />
                MongoDB<br />
                Beanie
                Reddis<br />
            </p>
        </span>
    ];
    const [active, setActive] = useState(0);
    const next = () => setActive((active + 1) % slides.length);
    const prev = () => setActive((active - 1 + slides.length) % slides.length);

    return (
        <main className="edu-section">
            <section className="edu-section-title">
                <figure className="degree-pic-wrapper">
                    <img
                        className="degree-pic"
                        src={degree}
                        alt="Degree certificate"
                    />
                </figure>
                <p>
                    <mark className='hl-text'>Systems Analyst Degree (2024)</mark>
                    – <strong>Universidad de la República, Uruguay</strong><br />
                    A professional degree focused on the analysis, design, and implementation
                    of software systems. It provides strong fundamentals in programming,
                    databases, software engineering, and networking,
                    preparing professionals to develop scalable and efficient applications.
                </p>
            </section>

            <section className="edu-section-detail">
                <div className='edu-detail-title'>
                    <p>
                        The core curriculum included these subjects
                    </p>
                </div>

                <div className='edu-detail-slide-content'>
                    <div className="slider">
                        <div className="slides" style={{ transform: `translateX(-${active * 100}%)` }}>
                            {slides.map((content, i) => (
                                <div className="slide" key={i}>
                                    <div className='slide-text'>{content}</div>
                                </div>
                            ))}
                        </div>

                        <button className="control prev" onClick={prev}><ArrowBack className='control-btn' /></button>
                        <button className="control next" onClick={next}><ArrowBack className='control-btn' style={{ transform: 'rotate(180deg)' }} /></button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default EduSection;