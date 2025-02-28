
import './app.scss';
import Banner from './component/BannerHeader/Banner';
import Footer from './component/Footer/Footer';
import Headerr from './component/Header/Headerr';
import AppRoute from './routes/AppRoute';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='App-header'>



        </div>
        <div className='App-MainContainer'>
          <Headerr />
        </div>
        <div className='App-Content'>
          <AppRoute />
        </div>
        <Footer />

      </header>
    </div>
  );
}

export default App;
