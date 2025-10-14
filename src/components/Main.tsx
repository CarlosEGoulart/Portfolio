import carlos from '../assets/carlos.png'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Home() {
    return <div className='flex-grow flex justify-between items-center px-75'>
        <div className='flex flex-col justify-start gap-5'>
            <h1 className="text-8xl font-bold">Web <br/> Developer.</h1>
            <div className='text-4xl flex flex-row gap-5'>
                <h1> <FaGithub /> </h1>
                <h1> <FaLinkedin /> </h1>
                <h1> <FaInstagram /> </h1>   
            </div>
        </div>
        
        <img src={carlos} alt="Carlos Goulart"/>
    </div>

}