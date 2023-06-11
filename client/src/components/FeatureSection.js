import feature1 from '../images/feature1.png';
import feature2 from '../images/feature2.png';
import feature3 from '../images/feature3.png';
import "../pages/HomePage/HomePage.css";
import Visibility from './Visibility';

const FeatureSection = () => {
  const [featureSectionRef, isVisible] = Visibility();

  return (
      <div className={`features-container ${isVisible ? 'fade-in' : ''}`} ref={featureSectionRef}>
        <div className={`feature ${isVisible ? 'fade-in' : ''}`}>
          <div className="feature-name">
            <img src={feature1} alt="feature-logo" />
            <h3>AI CHATBOT</h3>
          </div>
          <p>Advanced neural network models from OpenAI for creating a conversational chatbot to carry out dialogues just like a human.</p>
        </div>
        <div className="feature">
          <div className="feature-name circle-border">
            <img src={feature2} alt="feature-logo" />
            <h3>3D MODELS</h3>
          </div>
          <p>High-quality 3D visualizations from freeware for an immersive user experience and stunning interface design.</p>
        </div>
        <div className="feature">
          <div className="feature-name circle-border">
            <img src={feature3} alt="feature-logo" />
            <h3>AUTOMATED GRAPHICS</h3>
          </div>
          <p> Free AI-powered tools for effortlessly creating stunning graphics and panoramas for the website through advanced algorithms.</p>
        </div>
      </div>
  );
};

export default FeatureSection;
