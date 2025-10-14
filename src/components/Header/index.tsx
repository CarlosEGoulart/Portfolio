import Logo from './logo.tsx'
import MenuIcon from './menuIcon.tsx' 

export default function Header() {
    return <div className='flex justify-between p-5'>
        <Logo />
        <MenuIcon />
    </div>
}