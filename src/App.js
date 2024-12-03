import logo from './logo.svg';
import './App.css';
import Adopt from './ladingPets/Adopt';
import Footer from './ladingPets/Footer';
import MyComponent from './components/MyComponent';
import Header from './ladingPets/Header';
import Hero from './ladingPets/Hero';
import Services from './ladingPets/Services';
function App() {
  return (
      <div className="bg-[#EBEAFF]">
      <Header/>
      <Adopt/>
      <Services/>
      <Footer/>
      <MyComponent/>
    </div>
  );
}

export default App;
