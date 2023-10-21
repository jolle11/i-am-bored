import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Activity, Home } from "./pages";

function App() {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-yellow-300">
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
