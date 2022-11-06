import './App.css';
import NavBar from './components/navbar'
import Routers from './components/routes'
import Footer from './components/footer';
function App() {
  return (
    <div>
        <NavBar />
        <div>
          <Routers />
        </div>
        <Footer />
    </div>
  );
}

export default App;
