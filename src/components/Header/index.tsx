import Logo from './logo.tsx'
import MenuIcon from './menuIcon.tsx' 

export default function Header() {
    return <div className='absolute top-0 left-0 w-full flex justify-between p-5'>
        <Logo />
        <MenuIcon />
    </div>
}