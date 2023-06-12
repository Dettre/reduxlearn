import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { loginUser, logoutUser } from "../../redux/user/actions";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const {currentUser} = useSelector((rootReducer) => rootReducer.userReducer)
  const dispatch = useDispatch()

  console.log({currentUser})

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(loginUser({ name: 'dettre', email: '123@Image.com'}))
  }

  const handleLogoutClick = () => {
    dispatch(logoutUser())
  }
  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>sair</div>
        ) : (

          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;