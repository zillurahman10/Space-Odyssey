import { Routes, Route } from 'react-router-dom'
import Starfield from './components/Starfield'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Timeline from './pages/Timeline'
import Missions from './pages/Missions'
import Technology from './pages/Technology'
import Future from './pages/Future'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="relative min-h-screen bg-void flex flex-col">
      <Starfield />
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/future" element={<Future />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App