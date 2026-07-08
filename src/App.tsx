import { useRoute } from './hooks';
import { Navbar, Footer } from './components';
import { Homepage } from './Homepage';
import {
  AboutPage,
  BrandCollabsPage,
  EventsPage,
  ReelsPage,
  PressPage,
  ContactPage,
} from './Subpages';

function App() {
  const [route, navigate] = useRoute();
  const isHome = route === 'home';

  return (
    <div className={isHome ? 'h-full overflow-hidden' : 'min-h-screen'}>
      <Navbar route={route} navigate={navigate} onHome={() => navigate('home')} />

      {isHome ? (
        <Homepage navigate={navigate} />
      ) : (
        <>
          {route === 'about' && <AboutPage navigate={navigate} />}
          {route === 'brand-collabs' && <BrandCollabsPage />}
          {route === 'events' && <EventsPage />}
          {route === 'reels' && <ReelsPage />}
          {route === 'press' && <PressPage />}
          {route === 'contact' && <ContactPage />}
          <Footer navigate={navigate} />
        </>
      )}
    </div>
  );
}

export default App;
