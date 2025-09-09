import './header.css'
import logo from "../../assets/images/logo.svg";
import iconUnit from "../../assets/images/icon-units.svg";
import dropDonwIcon from "../../assets/images/icon-dropdown.svg";

export const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="dropdown">
        <img src={iconUnit} alt="icon-unit" />
        <p>Units</p>
        <img src={dropDonwIcon} alt="dropdown-icon" />
      </div>
    </div>
  );
};
