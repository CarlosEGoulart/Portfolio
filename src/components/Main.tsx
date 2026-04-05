import carlos from '../assets/carlos.png'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Main() {
    return <div className='relative flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 lg:gap-0 px-6 sm:px-12 lg:px-75 py-12 sm:py-16 md:py-20 lg:py-0 h-screen'>
        <div className='flex flex-col justify-center lg:justify-start gap-5 text-center lg:text-left'>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">Web<br/>Developer.</h1>
            <div className='text-3xl sm:text-4xl flex flex-row justify-center lg:justify-start gap-5'>
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

        <img src={carlos} alt="Carlos Goulart" className="w-64 sm:w-80 md:w-96 lg:w-auto max-w-full"/>
    </div>
}