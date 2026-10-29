import Header from './components/Header.jsx'
import VendorCard from './components/VendorCard.jsx'

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <h2>Today's vendors</h2>
        <VendorCard />
      </main>
    </>
  )
}

export default App