import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <div className='App'>
      <Header/>
    <Home/>
    <Footer/>
    </div>
  )
}

export default App
