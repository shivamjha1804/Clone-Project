import './App.css';
import { Header, Hero, Search, Download, Experience, Footer } from './component';

const App = () => {
  return (
   <div className="App text-white overflow-hidden">
        <Header/>
        <Hero/>
        <Experience/>
        <Search/>
        <Download/>
        <Footer/>
    </div>
  )
}

export default App