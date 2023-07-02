import './App.scss'
import CardImage from './components/CardImage';
import Navbar from './components/Navbar';
import Overlay from './components/Overlay';
import Searchbar from './components/Searchbar';



function App() {
  
  return (
    <>
      <Navbar />
      <Overlay />
      <div className="show-on-mobile">
        <Searchbar />
      </div>
      <CardImage />
    </>
  )
}

export default App
