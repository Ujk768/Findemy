import "./App.css";
import HomePage from "./pages/Homepage/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import LoggedInPage from "./pages/LoggedInPage/LoggedInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import CheckOut from "./pages/CheckOut/CheckOut";
import { ToastContainer } from "react-toastify";
import SearchPage from "./pages/SearchPage/SearchPage";
// import CartPage from "./pages/CartPage/CartPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/coursedetails/:id" element={<CourseDetails />}></Route>
        <Route path="/loggedin" element={<LoggedInPage />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        {/* <Route path="/cart" element={<CartPage />}></Route> */}
        <Route path="/success" element={<SuccessPage />}></Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
