import logo from './logo.svg';
import './App.css';
import PortfolioHeader from './Header/PortfolioHeader';
import ContentContainer from './ContentContainer/ContentContainer';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <PortfolioHeader />
      <ContentContainer />
      {/*Content Container*/}
      {/*Current Proj/update*/}
      <Footer />
    </div>
  );
}

export default App;
