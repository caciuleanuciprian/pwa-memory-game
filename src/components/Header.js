import { useEffect } from "react";
import logo from "../assets/logo.svg";

const Header = ({ handleNewGame, wins }) => {
  useEffect(() => {
    document.title = `${wins} wins`;
  }, [wins]);
  return (
    <header className="header">
      <h4>{wins} Pts.</h4>
      <img alt="" src={logo} className="logo" />
      <button className="button" onClick={handleNewGame}>
        Reset
      </button>
    </header>
  );
};
export default Header;
