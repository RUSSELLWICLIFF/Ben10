import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-section" id="about">
            <div className="about-content">
                <h2>ABOUT THE OMNITRIX</h2>
                <p>
                    The Omnitrix is a mysterious watch-like device that allows the wearer to transform into various alien species.
                    Created by Azmuth of the Galvan, it was intended to be a tool for peace and diplomacy, allowing beings to walk a mile in another's shoes.
                </p>
                <p>
                    In <strong>Ben 10: Alien Force</strong>, Ben Tennyson wields a recalibrated Omnitrix, unlocking a new set of powerful aliens.
                    This database catalogues these heroic forms, detailing their unique abilities, strengths, and home worlds.
                </p>
                <div className="about-features">
                    <div className="feature-card">
                        <h3>10+ Aliens</h3>
                        <p>Detailed stats on Swampfire, Humungousaur, Jetray, and more.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Dynamic Data</h3>
                        <p>Live-updated descriptions and power ratings from the Plumbers' database.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Visual Archive</h3>
                        <p>High-resolution holographic renders of each DNA transformation.</p>
                    </div>
                </div>

                <div className="footer-note">
                    <p>© 2024 Plumbers' Helpers | Developed by RUSSELL</p>
                </div>
            </div>
        </div>
    );
};

export default About;
