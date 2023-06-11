import { SiSketchfab, SiOpenai } from 'react-icons/si';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import leo_icon from '../images/feature3.png';
import blockade_logo from '../images/blockade_logo.png';

const TechnologySection = () => {
    return (
        <div className="technology-container">
            <p>Technologies Used</p>
            <div className="technology-icon">
                <FaReact className='tech-icon animate1' style={{color: '#61D3F6'}}/>
                <FaNodeJs className='tech-icon' style={{color: '#6AA05C'}} />
                <img src={ blockade_logo } className='leo-icon blockade' alt='blockade labs logo'/>
                <SiOpenai className='tech-icon animate1' style={{color: '#27B893'}}/>
                <img src={leo_icon} className='leo-icon' alt='leonardo.ai logo'/>
                <SiSketchfab className='tech-icon animate1' style={{color: '#00A4EA'}}/>
            </div>
        </div>
    );
};

export default TechnologySection;

