import Header from "./components/header/header";
import Page from "./components/page/page";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="title">Online Valutaváltó</h1>
      <Page />
      <Footer />
    </div>
  );
}

export default App;
