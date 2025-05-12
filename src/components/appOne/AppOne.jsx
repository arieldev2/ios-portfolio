import React from "react";
import "../../appOne.css";

import cam from '../../assets/appstore_svcam.png'
import appstore from '../../assets/appstore.png'



function AppOne() {
  return (
    <div className="grid">
      <div className="item app_img1">
        <img
          className="img1"
          src={cam}
        />
      </div>
      <div className="item">
        <h1 className="app1_title">SV Camera</h1>
      </div>
      <div className="item">
        <p className="content">
          SV Camera was created with UIKit. A camera app to take photos without
          having to edit, since it has ready-to-use filters.
        </p>
        <a
          href="https://apps.apple.com/us/app/sv-camera-vintage-camera/id6502562209"
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

export default AppOne;
