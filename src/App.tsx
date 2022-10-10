import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Activity } from "./pages";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
