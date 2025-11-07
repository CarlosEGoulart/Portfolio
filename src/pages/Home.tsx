import Header from '../components/Header/index'
import Main from '../components/Main'
import AboutMe from './AboutMe'

export const Home = () => {
    return (
        <div className='text-white bg-zinc-900 flex flex-col w-full min-h-screen overflow-x-hidden'>
            <Header />
            <div id="home" className="min-h-screen w-full"><Main /></div>
            <div id="about-me" className="min-h-screen w-full"><AboutMe /></div>
        </div>
    );
};