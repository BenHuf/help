import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Container from "react-bootstrap/Container"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import classRoom from "./pages/Classroom";


function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Container style={{ paddingTop: "50px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classroom" element={<classRoom/>} />
        </Routes>
      </Container>
      </Router>
    </div>
  )
}

export default App; 