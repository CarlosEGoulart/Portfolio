import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function AboutMe() {
    const form = useRef<HTMLFormElement>(null);
    const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (form.current) {
            emailjs.sendForm(serviceID, templateID, form.current, publicKey)
                .then((result) => {
                    console.log(result.text);
                    setNotification({ type: 'success', message: 'Email sent successfully!' });
                    form.current?.reset();
                }, (error) => {
                    console.log(error.text);
                    setNotification({ type: 'error', message: 'Failed to send email. Please try again.' });
                });
        }
    };

    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                setNotification(null);
            }, 5000); 
            return () => clearTimeout(timer);
        }
    }, [notification]);

    return <div className="flex flex-row items-center justify-center gap-75 h-screen bg-black text-white px-20">
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
            <form ref={form} onSubmit={sendEmail} className="bg-grey-800 shadow-md rounded px-8 pt-6 pb-12 mb-">
                <h2 className="text-2xl font-bold mb-6 text-center">Envie sua mensagem</h2>
                <div className="mb-4">
                    <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="seu.email@exemplo.com" name="from_email" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="subject">
                        Assunto
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" placeholder="Assunto da mensagem" name="from_subject" required />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="message">
                        Mensagem
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline h-24" id="message" placeholder="Sua mensagem" name="message" required></textarea>
                </div>
                <div className="flex items-center justify-center">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Enviar
                    </button>
                </div>
                
                {notification && (
                    <div className={`mt-4 text-center p-2 rounded ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                        {notification.message}
                    </div>
                )}

                <div className='text-4xl flex flex-row justify-center items-center gap-10 mt-8'>
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
            </form>
        </div>
    </div>
}
