import { CgMenu, CgClose } from "react-icons/cg";
export default function MenuIcon({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean, setIsMenuOpen: (isOpen: boolean) => void }) {
  return (
    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50">
      <h1 className="font-extrabold text-6xl">
        {isMenuOpen ? <CgClose /> : <CgMenu />}
      </h1>
    </button>
  )
}