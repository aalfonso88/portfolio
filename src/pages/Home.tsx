
import React from 'react';
import me from '../assets/photos/me.png';
import '../styles/home.css'; // Assuming you have a CSS file for styles
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main>
            <section className="home-container" aria-label="Profile overview">
                <figure className="home-photo-wrapper">
                    <img
                        className="home-photo"
                        src={me}
                        alt="Photo of Alexis Alfonso"
                    />
                </figure>

                <article className="home-text">
                    <header className='home-text-header'>
                        <h1 className="home-name">ALEXIS ALFONSO</h1>
                        <h2 className="home-title">Systems Analyst</h2>
                    </header>
                    <div className="home-description">
                        <p>
                            Full-Stack Software Developer crafting scalable, <br /> user-focused applications.
                        </p>
                    </div>
                    <nav className="home-nav">
                        <Link to="#">
                            <button className="home-about-button">DISCOVER</button>
                        </Link>
                    </nav>
                </article>
            </section>
        </main>
    );
};

export default Home;
