import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Activity } from "./pages";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activity" element={<Activity />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
