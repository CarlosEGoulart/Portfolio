import Header from '../components/Header/index'
import Main from '../components/Main'
import AboutMe from './AboutMe'

export const Home = () => {
    return <div className='text-white bg-black min-h-screen flex flex-col'>
        <Header />
        <div id="home" style={{ height: '100vh' }}><Main /></div>
        <div id="about-me" style={{ height: '100vh' }}><AboutMe /></div>
    </div>
};