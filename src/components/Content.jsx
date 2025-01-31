import { QRCodeCanvas } from "qrcode.react";
import { useRef, useState } from "react";
import { IconContext } from "react-icons";
import { CiLink } from "react-icons/ci";
import { isValidURL } from "../utility/validation";
import Title from "./Title";

const Content = () => {
  const [value, setValue] = useState("");
  const canvasRef = useRef();

  // Handle QR Code Download
  const downloadQR = () => {
    const canvas = canvasRef.current;
    const imgDataURI = canvas.toDataURL("img/png");
    const el = document.createElement("a");
    el.href = imgDataURI;
    el.download = "code.png";
    el.click();
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="content-box">
        <Title text="Convert your URL to QR Code" />
        <div className="input-group flex-nowrap mt-4">
          <span className="input-group-text" id="addon-wrapping">
            <IconContext.Provider value={{ size: 28 }}>
              <CiLink />
            </IconContext.Provider>
          </span>
          <input
            type="url"
            value={value}
            className="form-control"
            placeholder="Enter you URL"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="qr-code mt-5">
          <h3 className="text-center mb-3 fs-4 fw-bold">QR Code:</h3>
          {isValidURL(value) ? (
            <QRCodeCanvas ref={canvasRef} value={value} size={300} />
          ) : (
            <div className="alert alert-primary" role="alert">
              {value ? "Please, Input a valid URL !!" : "No, Url found!!"}
            </div>
          )}
        </div>
        <button
          type="button"
          className="btn btn-primary mt-5"
          onClick={downloadQR}
        >
          Download QR
        </button>
      </div>
    </div>
  );
};

export default Content;
