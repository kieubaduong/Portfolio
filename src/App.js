import './App.css';
import React, { useState, useEffect } from "react";
import CryptoJS from "crypto-js";
import { VerifyDialog } from './components/VerifyDialog.js';
import { GetInfoButton } from './components/GetInfoButton.js';
import { getTestopsInfo, getUsers, makeHttpRequest } from './services/UserService.js';

function App() {

  const [key, setKey] = useState("");
  const preDefinedHashedKey = "529ca8050a00180790cf88b63468826a";
  const [successDialogVisible, setSuccessDialogVisible] = useState(false);

  useEffect(() => {
    // Get the key from the input field
    setKey(document.getElementById("keyInput").value);
  }, []);

  const handleSubmit = () => {
    const hashedKey = CryptoJS.MD5(key).toString();
    const isValidPassword = hashedKey === preDefinedHashedKey;
    setSuccessDialogVisible(isValidPassword);
  };

  return (
    <div>
      <div>
        <h1>Are you a good dev or gher dev?</h1>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: "3vh", marginTop: "3vh" }}>
          <input data-testid='keyInput'
            type="text" id='keyInput' placeholder="Enter key" 
            onChange={(e) => setKey(e.target.value)} 
            style={{marginRight:'20px'}}/>
          <button id='submitBtn' data-testid='submitBtn' onClick={handleSubmit}>Submit</button>
        </div>

      </div>

      <VerifyDialog isSuccess={successDialogVisible} style={{ marginBottom: '3vh' }} />

      <GetInfoButton style={{ display: 'flex', margin: 'auto'}} onClick={() => getUsers()}
      >Get info</GetInfoButton>

    </div >
  );
}

export default App;
