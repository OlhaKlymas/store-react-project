import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductPage from "./pages/ProductPage";
import ProductListPage from "./pages/ProductListPage";
import UsersListPage from "./pages/UsersListPage";
import CartPage from "./pages/CartPage";
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductListPage />} />
        <Route path='/products/:id' element={<ProductPage />} />
        <Route path='/users' element={<UsersListPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/error' element={<ErrorPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes> 
    </Router>
  );
}

export default App;
