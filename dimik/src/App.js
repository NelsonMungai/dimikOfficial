import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appheader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
// import AppServices from './components/services';
import AppWorks from './components/works';
import AppTestimonials from './components/testimonials';
import AppContact from './components/contact';
import AppFooter from './components/footer';

function App() {
  return (
    <div className="App">
     <header id="header">
      <Appheader/>
      </header>
      <main>
        <AppHero />
        <AppAbout />
        {/* <AppServices/> */}
        <AppWorks/>
        <AppTestimonials/>
        <AppContact/>
        <AppFooter/>
      </main>
    </div>
  );
}

export default App;
