import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function AboutMe() {
    return (
        <div className="flex flex-row items-center justify-center gap-75 h-screen bg-black text-white px-20">
            <div className="flex flex-col gap-5">
                <h1 className="text-4xl max-w-xl font-bold mb-8">Carlos Eduardo Goulart Oliveira</h1>
                <div className="text-start">
                    <p className="text-3xl mb-4 max-w-xl">
                        Estudante de Sistemas para Internet na UTFPR,
                        desenvolvedor com grande interesse em projetos Full Stack
                        e tecnologias modernas.
                    </p>
                    <p className="text-2xl max-w-xl">
                        Busco oportunidades para aplicar meu conhecimento, aprender
                        com profissionais experientes e contribuir para projetos desafiadores.
                    </p>
                </div>
            </div>

            <div className="w-full max-w-md">
                <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-2xl font-bold mb-6 text-center">Entre em Contato</h2>
                    <div className="mb-4">
                        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="seu.email@exemplo.com" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="subject">
                            Assunto
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" placeholder="Assunto da mensagem" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="message">
                            Mensagem
                        </label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline h-24" id="message" placeholder="Sua mensagem"></textarea>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Enviar
                        </button>
                    </div>
                </form>
                <div className='text-4xl flex flex-row justify-center items-center gap-25'>
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
        </div>
    );
}