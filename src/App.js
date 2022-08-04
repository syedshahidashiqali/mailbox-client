import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import InboxPage from "./pages/InboxPage";
import SentMailsPage from "./pages/SentMailsPage";
import Header from "./components/Header";
import SendMail from "./components/SendMail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <div className="parent">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/inbox" element={<InboxPage />} />
            <Route path="/sent" element={<SentMailsPage />} />
          </Routes>
        </div>
        <SendMail />
      </div>
    </BrowserRouter>
  );
}

export default App;
