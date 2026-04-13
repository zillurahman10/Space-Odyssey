import { Routes, Route } from 'react-router-dom'
import Starfield from './components/Starfield'
import Home from './pages/Home'

function App() {
  return (
    <div className="relative min-h-screen bg-void">
      <Starfield />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App