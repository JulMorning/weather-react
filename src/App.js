import "./App.css";
import Search from "./Search";
import Overview from "./Overview";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <div className="weather-app-card">
            <Search />
            <Overview />
            <CurrentWeatherInfo />
            <div className="weather-forecast" id="forecast"></div>
          </div>
          <Footer />
        </div>
      </div>
      <script src="src/index.js"></script>
    </div>
  );
}

export default App;
