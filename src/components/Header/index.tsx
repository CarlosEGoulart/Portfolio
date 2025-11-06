import { useState } from 'react';
import Logo from './logo.tsx';
import MenuIcon from './menuIcon.tsx';
import Menu from './menu.tsx';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full flex justify-between p-5 items-center z-10">
      <Logo />
      <MenuIcon isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
    </div>
  );
}
