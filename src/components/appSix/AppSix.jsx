import React from "react";
import "../../appTwo.css";
import usdz from '../../assets/appstore_usdz.png'
import appstore from '../../assets/appstore.png'

function AppSix() {
  return (
    <div className="grid2">
      <div className="item2 wise_bg">
        <img
          className="img1"
          src={usdz}
        />
      </div>
      <div className="item2">
        <h1 className="usdz_title">USDZ Viewer</h1>
      </div>
      <div className="item2">
        <p className="content">
          USDZ 3D Viewer was created with SwiftUI. You can view your 3D USDZ
          models, change the background and lighting with HDRI.
        </p>
        <a
          href="https://apps.apple.com/us/app/usdz-3d-viewer/id1587642013#?platform=iphone"
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

export default AppSix;
