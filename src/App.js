import './App.css';
import { Navbar } from './components/navbar';
import { Routers } from './components/routes';
import {Footer} from './components/footer'

function App() {
  return (
    <div>
        <Navbar />
        <div>
          <Routers />
        </div>
        <Footer />
    </div>
  );
}

export default App;
