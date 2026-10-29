import Header from './components/Header.jsx'
import VendorCard from './components/VendorCard.jsx'
import MenuItemCard from './components/MenuItemCard.jsx'

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <h2>Today's vendors</h2>
        <VendorCard />
        <h2>Popular items</h2>
        <div className="grid">
          <MenuItemCard />
        </div>
      </main>
    </>
  )
}

export default App