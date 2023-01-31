import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <div className="weather-app-card">
            <Weather defaultCity="Kyiv" />
          </div>
          <Footer />
        </div>
      </div>
      <script src="src/index.js"></script>
    </div>
  );
}

export default App;
