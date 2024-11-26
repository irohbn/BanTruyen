import "bootstrap/dist/css/bootstrap.min.css"; // Import CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import JS (bao gồm Popper)
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <div className="nav-left">
        <img src="./public/img/ADHK.jfif"></img>
      </div>
      <div className="nav-mid">
        <nav className="d-flex">
          <ul className="d-flex">
            <li>HOME</li>
            <li>PAGE</li>
            <li>SHOP</li>
            <li>CART</li>
          </ul>
        </nav>
      </div>
      <div className="nav-right">
        <input type="text" placeholder="Search" className="TimKiem"></input>
        <button type="submit">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        <a href="">Dang ky</a>
        <a href="">Dang Nhap</a>
      </div>
    </div>
  );
}

export default App;
