
import React, { useEffect, useRef, useState } from 'react';
//import me from '../assets/photos/me.png';
import me from '../assets/photos/me2.jpg';
import '../styles/home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const timeoutRef = useRef<number | null>(null);

    const handleClick = () => {
        if (loading) return;
        setLoading(true);

        timeoutRef.current = window.setTimeout(() => {
            navigate("/about");
        }, 1500);
    };


    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                window.clearTimeout(timeoutRef.current);
            }
        };
    }, []);

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
                        <button
                            type="button"
                            className={`home-cta ${loading ? "is-loading" : ""}`}
                            onClick={handleClick}
                            disabled={loading}
                        >
                            <span className="home-cta__label">DISCOVER</span>
                            <span className="home-cta__spinner" aria-hidden="true"></span>
                        </button>
                    </nav>
                </article>
            </section>
        </main>
    );
};

export default Home;
