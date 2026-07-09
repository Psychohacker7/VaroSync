import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Finance from './pages/Finance'
import Biotech from './pages/Biotech'
import Careers from './pages/Careers'
import CareerDetail from './pages/CareerDetail'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/biotech" element={<Biotech />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:slug" element={<CareerDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
