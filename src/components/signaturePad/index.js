import React, { useRef } from "react";
import SignaturePadCanvas from "react-signature-canvas";
import "./style.css";

const SignaturePad = (props) => {
  let sigPadref = useRef();
  const clear = () => {
    sigPadref.clear();
  };

  const trim = () => {
    const signature = sigPadref.getTrimmedCanvas().toDataURL("image/png");
    props.handleSignature({ signature });
  };

  return (
    <div className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
      <div className="col-lg-12">
        <SignaturePadCanvas
          width="100%"
          canvasProps={{
            width: "520px",

            height: "300px",
          }}
          ref={(r) => {
            sigPadref = r;
          }}
        />
        <div>
          <div className="row">
            <div className="button">
              <button className="btnColor" onClick={clear}>
                {Object.translate("BUTTONS.CLEAR_SIGNATURE")}
              </button>
            </div>
            <div className="button">
              <button className="btnColor" onClick={trim}>
                {Object.translate("BUTTONS.SAVE_SIGNATURE")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignaturePad;
