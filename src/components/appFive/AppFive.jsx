import React from "react";
import "../../appOne.css";
import reality from '../../assets/appstore_reality.png'
import appstore from '../../assets/appstore.png'

function AppFive() {
  return (
    <div className="grid">
      <div className="item app_img1">
        <img
          className="img1"
          src={reality}
        />
      </div>
      <div className="item">
        <h1 className="reality_title">Reality OBJ</h1>
      </div>
      <div className="item">
        <p className="content">
          Reality OBJ - USDZ Converter was created with Swift UIKit. You can
          convert obj files to usdz and update materials.
        </p>
        <a
          href="https://apps.apple.com/us/app/reality-obj-usdz-converter/id1603967912"
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

export default AppFive;
