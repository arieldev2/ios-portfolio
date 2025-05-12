import React from "react";
import "../../appOne.css";
import remove from '../../assets/appstore_remove.png'
import appstore from '../../assets/appstore.png'

function AppThree() {
  return (
    <div className="grid">
      <div className="item remove-bg">
        <img
          className="img1"
          src={remove}
        />
      </div>
      <div className="item">
        <h1 className="remove-title">Remove AI</h1>
      </div>
      <div className="item">
        <p className="content">
          Remove AI - Remove Objects was created with Swift UIKit. Removes
          objects of images with AI by masking the area.
        </p>
        <a
          href="https://apps.apple.com/us/app/remove-ai-remove-objects/id6654893020"
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

export default AppThree;
