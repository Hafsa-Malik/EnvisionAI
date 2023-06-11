import { FaRegDotCircle, FaRegImages, FaAngleRight, FaRegSun } from 'react-icons/fa';
import "../pages/HomePage/HomePage.css";
import tool1 from '../images/tool1.png';
import tool2 from '../images/tool2.png';
import tool3 from '../images/tool3.png';
import Visibility from './Visibility';

const FreewareSection = () => {
  const [detailRef1, isVisible1] = Visibility();
  const [detailRef2, isVisible2] = Visibility();
  const [iconRef1, isVisible3] = Visibility();
  const [iconRef2, isVisible4] = Visibility();

  return (
    <div className="freeware-container">
      <FaRegDotCircle className='icon' />
      <div className="line-gradient g1"></div>

      <div className={`freeware ${isVisible3 ? 'fade-in' : ''}`} ref={iconRef1}>
        <FaRegImages className='icon i1' />
        <p className='iconName'>Productivity</p>
      </div>

      <div className='freeware-explanation'>
        <div className="line-gradient g2"></div>
        <p className={`detail ${isVisible1 ? 'fade-in' : ''}`} ref={detailRef1}><span>Automated graphics using AI freeware</span> to turbocharge productivity, reduce development time and costs, resulting in a more efficient, and visually stunning design process.</p>
      </div>

      <div className='freeware-tools'>
        <div className='tool-section'>
          <p><span>SkyBox Labs</span> offers stunning AI-generated panoramas for free that can be easily integrated with your React applications, adding a touch of realism and beauty to your website.</p>
          <a href="https://github.com/">Explore SkyBox Labs <FaAngleRight className='go-icon' /> </a>
          <img src={tool1} alt='tool1' />
        </div>
        <div className='tool-section'>
          <p><span>Leonardo.ai</span> offers a general or fine-tuned model to generate all sorts of production-ready art assets or even train your own AI model in just a few clicks and generate thousands of variations and deviations from your training data.</p>
          <a href="https://github.com/">Explore Leonardo.ai <FaAngleRight className='go-icon' /> </a>
          <img src={tool2} alt='tool2' />
        </div>
      </div>
      <div className="line-gradient g3"></div>

      <div className={`freeware ${isVisible4 ? 'fade-in' : ''}`} ref={iconRef2}>
        <FaRegSun className='icon i2' />
        <p className='iconName'>Artificial Intelligence</p>
      </div>

      <div className='freeware-explanation'>
        <div className="line-gradient g4"></div>
        <p className={`detail ${isVisible2 ? 'fade-in' : ''}`} ref={detailRef2}><span className='span2'>Integrate OpenAI API with React</span> to explore and experiment with advanced AI models available at your fingertips through a conversational chat-bot like chatGPT.</p>
      </div>

        <div className='openAI-section'>
          <div className='openAI-content'>
          <p><span>OpenAI's free API</span> offers developers seamless access to advanced natural language processing models, providing unparalleled capabilities to create chatbots that captivate and engage users.</p>
          <a href="https://github.com/">Explore openAI Models<FaAngleRight className='go-icon' /> </a>
          </div>
          <img src={tool3} alt='tool2' />
        </div>
      <div className="line-gradient g5"></div>
      <FaRegDotCircle className='icon' />
    </div>
  );
};

export default FreewareSection;

