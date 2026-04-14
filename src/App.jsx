import { Routes, Route } from 'react-router-dom'
import Starfield from './components/StarField'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Timeline from './pages/Timeline'
import Missions from './pages/Missions'

function App() {
  return (
    <div className="relative min-h-screen bg-void">
      <Starfield />
      <Navbar />
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/timeline"  element={<Timeline />} />
        <Route path="/missions"  element={<Missions />} />
      </Routes>
    </div>
  )
}

export default App