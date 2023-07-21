import { useState,useContext } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";


const loggedInUser = () => {
  //Api call to Authentication
  return true;
};

const Title = () => (
  <a href="/">
  <img data-testid="logo" className="h-28 p-2" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const isOnline = useOnline;

  const {user} = useContext(UserContext);

  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);

  return (
    <div class="flex justify-between bg-pink-50 shadow-lg ">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
          <Link to="/">Home</Link>
          </li>

          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <Link to="/cart">
          <li className="px-2">Cart-{cartItems.length}items</li>
          </Link>
          
          
        </ul>
      </div>
      <h1 data-testid="online-status">{isOnline ?"Online🟢":"Offline🔴"}</h1>
      <span className="p-10 font-bold text-red-700">{user.name}</span>

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
export default Header;
