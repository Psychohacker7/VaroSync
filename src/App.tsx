import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './pages/Landing'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Landing />
      </main>
      <Footer />
    </div>
  )
}

export default App
