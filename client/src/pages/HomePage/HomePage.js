import "./HomePage.css";
import React from 'react';
import { Link } from "react-router-dom";
import spacestation from '../../images/spacestation.png';
import logo from "../../images/logo.png";
import FeatureSection from '../../components/FeatureSection';
import FreewareSection from '../../components/FreewareSection';
import TechnologySection from '../../components/TechnologySection';
import FeedbackSection from '../../components/FeedbackSection';

const HomePage = () => {
    return (
        <div>
            <div className="container">
                <img src={logo} alt="Logo" className="hm_logo" />

                <nav>
                    <ul>
                        <li><Link to="/HomePage" className="active">Home</Link></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Freeware</a></li>
                        <li><a href="#">Technologies</a></li>
                        <li><a href="#section5">Feedback</a></li>
                        <li><Link to="/HomePage/Chatbot" >Chatbot</Link></li>
                    </ul>
                </nav>
                <div className="text">
                    <h1>Find Your <span>Space</span> in the <span>AI</span> World</h1>
                    <p>EnvisionAI is the ultimate destination to discover the potential of AI freeware through AI-generated 3D visualizations and engage with our intelligent chatbot to explore the OpenAI models.</p>
                    <Link to="/HomePage/Chatbot" className="chatbot-l1">
                        Try it Now!
                    </Link>
                </div>
                <div className="ship-model">
                    <img src={spacestation} alt="space-station" />
                </div>
            </div>
            <FeatureSection />
            <FreewareSection />
            <TechnologySection />
            <FeedbackSection />
        </div>
    );
};

export default HomePage;