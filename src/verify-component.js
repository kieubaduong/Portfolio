import React from 'react';
import CryptoJS from 'crypto-js';

function VerifyComponent() {
  const handleVerify = () => {
    const input = document.getElementById("keyInput").value;
    const hashedKey = CryptoJS.MD5(input).toString();

    const preDefinedHashedKey = "d15cbc9cd47129f3f7143598c8ae39bc";
    if (hashedKey === preDefinedHashedKey) {
      document.getElementById("successDialog").style.display = "block";
      document.getElementById("failedDialog").style.display = "none";
    } else {
      document.getElementById("successDialog").style.display = "none";
      document.getElementById("failedDialog").style.display = "block";
    }
  };

  return (
    <div>
      <div id="verifyComponents">
        <h1>Are you a good dev or gher dev?</h1>

        <input type="text" id="keyInput" placeholder="Enter key" />
        <button id="submitBtn" onClick={handleVerify}>Submit</button>
      </div>

      <div className="SizedBox"></div>

      <div id="successDialog" style={{ display: "none" }} className="dialog">
        <h2>Congrats</h2>
        <p>You are a gher dev</p>
      </div>

      <div id="failedDialog" style={{ display: "none" }} className="dialog">
        <h2>Congrats</h2>
        <p>You are a good dev</p>
      </div>
    </div>
  );
}

export default VerifyComponent;
