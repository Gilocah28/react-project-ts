import "./header.css";
import { DropDownComponent } from "./component/DropDownComponent";
import logo from "../../assets/images/logo.svg";
import iconUnit from "../../assets/images/icon-units.svg";
import dropDonwIcon from "../../assets/images/icon-dropdown.svg";
import { useState } from "react";

export const HeaderComponent = () => {
  const [isShow, setIsShow] = useState(false);

  const handleShowDrpdwn = () => setIsShow((prev) => !prev);

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <button className="dropdown" onClick={handleShowDrpdwn}>
        <img src={iconUnit} alt="icon-unit" />
        <p>Units</p>
        <img src={dropDonwIcon} alt="dropdown-icon" />
      </button>
      {isShow && <DropDownComponent />}
    </div>
  );
};
