import { Routes, Route } from 'react-router-dom'
import Starfield from './components/StarField'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <div className="relative min-h-screen bg-void">
      <Starfield />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App