import React, { useState } from "react";
import "../Pages/ANI.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import img0 from "/Users/hp/Desktop/TODOapp/example/src/Assets/Vector.png";
import img1 from "/Users/hp/Desktop/TODOapp/example/src/Assets/Vector-1.png";
import img2 from "/Users/hp/Desktop/TODOapp/example/src/Assets/Property 1=Variant3.png";
import img3 from "/Users/hp/Desktop/TODOapp/example/src/Assets/Property 1=Variant5.png";
import img4 from "/Users/hp/Desktop/TODOapp/example/src/Assets/Property 1=Default.png";
import img5 from "/Users/hp/Desktop/TODOapp/example/src/Assets/open-message-box.png";
import img6 from "/Users/hp/Desktop/TODOapp/example/src/Assets/Property 1=With-glass-hidden.png";
import img7 from "/Users/hp/Desktop/TODOapp/example/src/Assets/Property 1=Variant7.png";
import img8 from "/Users/hp/Desktop/TODOapp/example/src/Assets/Property 1=glasses-on.png";

const ANI = () => {
  const [currentImage, setCurrentImage] = useState(img2);
  const [passwordShown, setPasswordShown] = useState(false);
  const [showPasswordImage, setShowPasswordImage] = useState(false);

  const handleEmailClick = () => {
    setCurrentImage(img3);
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    if (email.endsWith("@gmail.com") && email.length >= 10) {
      setCurrentImage(img4);
    } else {
      setCurrentImage(img2);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
    setShowPasswordImage(true);
  };

  const handlePassClick = () => {
    setCurrentImage(img6);
  };

  const handlePassChange = (event) => {
    const pass = event.target.value;
    if (pass.length <= 1) {
      setCurrentImage(img7);
    } else {
      setCurrentImage(img8);
    }
  };

  return (
    <div className="main">
      <div className="sub-main">
        <div className="login-text">LOGIN</div>
        <div className="emoji-all">
          <div className="img-main">
            <div className="img-0">
              <img src={img0} alt="img" />
            </div>
            <div className="img-1">
              <img src={img1} alt="img" />
            </div>
            <div className="img-2">
              <div className="show-hide-icon">
                {showPasswordImage && (
                  <img src={passwordShown ? img7 : img8} alt="password" />
                )}
              </div>
              {!showPasswordImage && (
                <div className="img-3">
                  <img src={currentImage} alt="img" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="text-field">
          <div className="email-text" onClick={handleEmailClick}>
            <label htmlFor="email">EMAIL:</label>
            <div className="input-with-image">
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleEmailChange}
                style={{ backgroundImage: `url(${img5})` }}
              />
            </div>
          </div>
          <div className="password-text" onClick={handlePassClick}>
            <label htmlFor="password">PASSWORD:</label>
            <div className="input-with-image">
              <input
                type={passwordShown ? "text" : "password"}
                id="password"
                name="password"
                onChange={handlePassChange}
                className="form-control rounded-right"
                required
              />
              <FontAwesomeIcon
                icon={passwordShown ? faEye : faEyeSlash}
                className="password-icon"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          <div className="buttom-login">
            <button>LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ANI;