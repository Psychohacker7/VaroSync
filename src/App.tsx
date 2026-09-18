import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Finance from './pages/Finance'
import Biotech from './pages/Biotech'
import Careers from './pages/Careers'
import CareerDetail from './pages/CareerDetail'
import GetInTouch from './pages/GetInTouch'

/* Site chrome for every page except the standalone get-in-touch step. */
function Shell() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Shell />}>
          <Route path="/" element={<Landing />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/biotech" element={<Biotech />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:slug" element={<CareerDetail />} />
        </Route>
        {/* Standalone: no header, no footer — its own logo and back link. */}
        <Route path="/get-in-touch" element={<GetInTouch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
