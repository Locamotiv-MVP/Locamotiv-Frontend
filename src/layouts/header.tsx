import LocamotiveLogo from "../assets/locamotive-logo.svg";
import { Crown, LogInIcon, UserPlus } from "lucide-react";
import useGeneralStore from "../store/general";
import React from "react";

const Header = () => {
  const { isLargeScreen, isMobileScreen } = useGeneralStore();

  return (
    <div className="header">
      <div
        className="header-logo-container"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <img
          className="header-logo-image"
          src={LocamotiveLogo}
          alt="Locamotiv logo"
        />
        <p className="header-title">Locamotiv</p>
      </div>

      <div className="header-buttons-container">
        {!isMobileScreen && (
          <div className="header-button-premium">
            <Crown className="header-button-premium-icon" />
            <p className="header-button-premium-text">Premium</p>
          </div>
        )}

        {!isLargeScreen && (
          <div className="header-button-login">
            <LogInIcon className="header-button-login-icon" />
            <p className="header-button-login-text">Login / Sign Up</p>
          </div>
        )}

        {isLargeScreen && (
          <React.Fragment>
            <div className="header-button-signup">
              <UserPlus className="header-button-signup-icon" />
              <p className="header-button-signup-text">Sign Up</p>
            </div>
            <div className="header-button-login">
              <LogInIcon className="header-button-login-icon" />
              <p className="header-button-login-text">Login</p>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Header;
