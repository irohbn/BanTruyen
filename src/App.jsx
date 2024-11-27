import "bootstrap/dist/css/bootstrap.min.css"; // Import CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import JS (bao gồm Popper)
import Header from "./page/Header";
import "./CSS/Header.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
