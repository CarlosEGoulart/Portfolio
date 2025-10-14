import Header from './components/Header/index.tsx'
import Footer from './components/Footer/index.tsx'
import Main from './components/Main.tsx'

export default function App() {
  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col items-center justify-center">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
