import React from 'react';
import './Episodes.css';

const Episodes = () => {
    return (
        <div className="episodes-section" id="episodes">
            <div className="episodes-content">
                <h2>EPISODE GUIDE</h2>
                <div className="episodes-features">
                    <div className="feature-card">
                        <h3>3 Seasons</h3>
                        <p>Spanning 46 action-packed episodes of Alien Force.</p>
                    </div>
                    <div className="feature-card">
                        <h3>52 Episodes</h3>
                        <p>Originally aired from April 18, 2008 – March 26, 2010.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Legacy</h3>
                        <p>Part of the massive franchise with 4 series & 230+ total episodes.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Episodes;
