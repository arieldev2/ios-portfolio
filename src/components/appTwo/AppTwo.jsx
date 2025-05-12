import React from "react";
import "../../appTwo.css";
import dezigner from '../../assets/appstore_dezigner.png'
import appstore from '../../assets/appstore.png'

function AppTwo() {
  return (
    <div className="grid2">
      <div className="item2 app_img2">
        <img
          className="img1"
          src={dezigner}
        />
      </div>
      <div className="item2">
        <h1 className="app1_title2">Dezigner</h1>
      </div>
      <div className="item2">
        <p className="content">
          Dezigner - Design Studio was created with SwiftUI. Create T-Shirt
          mockups by adding image or text.
        </p>
        <a
          href="https://apps.apple.com/us/app/dezigner-design-studio/id6627333203"
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

export default AppTwo;
