import Header from './components/Header';
import Hero from './components/Hero';
import PageLoader from './components/PageLoader';
import PagePatterns from './components/PagePatterns';
import RegistrationForm from './components/RegistrationForm';
import Ticket from './components/Ticket';
import useTicketStore from './store/useTicketStore';

function App() {
  const { isLoading, isRegistered } = useTicketStore((state) => state);

  return (
    <main className="container">
      <PagePatterns />
      <Header />
      <Hero />

      {isLoading && <PageLoader isLoading={isLoading} size={200} color="inherit" />}

      {isRegistered ? (
        <Ticket />
      ) : (
        <>
          <RegistrationForm />
        </>
      )}
    </main>
  );
}

export default App;
