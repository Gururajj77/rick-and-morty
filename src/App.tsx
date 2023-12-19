import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./components/Characters/Characters";
// import Profile from "./components/Profile/Profile";
import Navigation from "./components/Utils/Navigation/Navigation";
import React, { Suspense } from "react";
import LoadingComponent from "./components/Utils/Loader/LoadingComponent";
const Profile = React.lazy(() => import("./components/Profile/Profile"));
function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Suspense fallback={<LoadingComponent />}>
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
