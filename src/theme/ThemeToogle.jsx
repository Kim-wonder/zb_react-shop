import React, { useState } from "react";
import moon from "../assets/moon-regular.svg";
import sun from "../assets/sun-regular.svg";

export default function ThemeToogle() {
  const [light, setLight] = useState(true);
  const [dark, setDark] = useState(false);

  const handleSwitchToogle = () => {
    if (!light) {
      setLight(true);
      setLight(false);
    } else {
      setLight(false);
      setLight(true);
    }
  };
  return (
    <div>
      {light ? (
        <a>
          <img src={sun} className="header_icon theme_dark_mode " />
        </a>
      ) : (
        <a>
          <img src={moon} className="header_icon theme_dark_mode " />
        </a>
      )}
    </div>
  );
}
