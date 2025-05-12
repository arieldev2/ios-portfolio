import React from "react";
import "../../appTwo.css";
import bass from '../../assets/bass.png'
import appstore from '../../assets/appstore.png'

function AppFour() {
  return (
    <div className="grid2">
      <div className="item2 wise_bg">
        <img
          className="img1"
          src={bass}
        />
      </div>
      <div className="item2">
        <h1 className="bass_title">Bass EQ</h1>
      </div>
      <div className="item2">
        <p className="content">
          Bass Booster: EQ was created with SwiftUI. Enhances low frequencies,
          giving your favorite tracks a deep, resonant boost.
        </p>
        <a
          href="https://apps.apple.com/us/app/bass-booster-eq/id6711341566"
          style={{ marginTop: "15px" }}
        >
          <img
            src={appstore}
            width={100}
          />
        </a>
      </div>
    </div>
  );
}

export default AppFour;
