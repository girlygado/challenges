import Header from './components/Header';
import Hero from './components/Hero';
import PagePatterns from './components/PagePatterns';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <main className="container">
      <PagePatterns />
	  
      <Header />
      <Hero />

      <RegistrationForm />
    </main>
  );
}

export default App;
