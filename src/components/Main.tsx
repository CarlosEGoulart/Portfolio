import carlos from '../assets/carlos.png'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Main() {
    return <div className='relative flex justify-between items-center px-75 h-screen'>
        <div className='flex flex-col justify-start gap-5'>
            <h1 className="text-8xl font-bold">Web <br/> Developer.</h1>
            <div className='text-4xl flex flex-row gap-5'>
                <a href="https://github.com/CarlosEGoulart" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/carlosegoulart" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/carlllos.png/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
        </div>
        
        <img src={carlos} alt="Carlos Goulart"/>
    </div>

}