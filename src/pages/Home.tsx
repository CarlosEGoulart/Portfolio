import Header from '../components/Header/index'
import Main from '../components/Main'
import AboutMe from './AboutMe'
import Projects from './Projects'

export const Home = () => {
    return <div className='text-white bg-black min-h-screen flex flex-col'>
        <Header />
        <div style={{ height: '100vh' }}><Main /></div>
        <div style={{ height: '100vh' }}><AboutMe /></div>
        <div style={{ height: '100vh' }}><Projects /></div>
    </div>
};