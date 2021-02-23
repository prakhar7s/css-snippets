import "./App.css";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
