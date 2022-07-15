import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-4">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />}/>
            <Route path="/contact" element={<ContactScreen />}/>
            <Route path="/about" element={<AboutScreen />}/>
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
