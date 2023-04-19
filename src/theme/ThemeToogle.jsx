import React, { useState } from "react";
import moon from "../assets/moon-regular.svg";
import sun from "../assets/sun-regular.svg";

export default function ThemeToogle() {
  const [light, setLight] = useState(true);
  const [dark, setDark] = useState(false);

  const handleSwitchToogle = ({ target }) => {
    console.log(target);
    if (!light) {
      setLight(true);
      setDark(false);
    } else {
      setLight(false);
      setDark(true);
    }
  };
  return (
    <div>
      {!light ? (
        <a>
          <img
            src={sun}
            onClick={() => handleSwitchToogle}
            className="header_icon theme_dark_mode "
          />
        </a>
      ) : (
        <a>
          <img
            src={moon}
            onClick={() => handleSwitchToogle}
            className="header_icon theme_dark_mode "
          />
        </a>
      )}
    </div>
  );
}
