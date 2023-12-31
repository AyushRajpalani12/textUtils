import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Contact from "./components/About";
// import Sachin from "./components/Sachin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="Contact" />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<Contact/>} />
            <Route
              exact
              path="/"
              element={<Textform heading="Enter the text to analyze below" />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
