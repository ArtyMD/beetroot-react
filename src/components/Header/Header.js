import "./Header.css";
import HeaderList from "../HeaderList/HeaderList"
function Header() {
  return (
    <div className="Header">
       
      <img className="Header-logo" alt='logo' placeholder='logo'></img>
      <HeaderList />
    </div>
  );
}

export default Header;
