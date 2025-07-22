import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Landing from './pages/Landing.tsx'
import Technology from './pages/Technology.tsx'
import Company from './pages/Company.tsx'
import News from './pages/News.tsx'
import Contact from './pages/Contact.tsx'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/company" element={<Company />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App 