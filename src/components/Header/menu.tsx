interface MenuProps {
  setIsMenuOpen: (isOpen: boolean) => void;
}

const scrollToSection = (id: string, callback: () => void) => {
  const element = document.getElementById(id);
  if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      callback(); 
  }
};

export default function Menu({ setIsMenuOpen }: MenuProps) {
  return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center">
          <ul className="flex flex-col gap-10 text-center">
              <li>
                  <a 
                      href="#home" 
                      onClick={(e) => {
                          e.preventDefault();
                          scrollToSection('home', () => setIsMenuOpen(false));
                      }}
                      className="text-white text-2xl sm:text-4xl font-bold"
                  >
                      Home
                  </a>
              </li>
              <li>
                  <a 
                      href="#about-me" 
                      onClick={(e) => {
                          e.preventDefault();
                          scrollToSection('about-me', () => setIsMenuOpen(false));
                      }}
                      className="text-white text-2xl sm:text-4xl font-bold"
                  >
                      About Me
                  </a>
              </li>
          </ul>
      </div>
  );
}
