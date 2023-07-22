import './App.css';
import React, { useState, useEffect } from "react";
import CryptoJS from "crypto-js";
import { CustomDialog } from './components/CustomDialog.js';
import { GetInfoButton } from './components/GetInfoButton.js';
import { getUsers } from './services/UserService.js';

function App() {

  const [key, setKey] = useState("");
  const preDefinedHashedKey = "529ca8050a00180790cf88b63468826a";
  const [verifyDevSuccess, setVerifyDevSuccess] = useState(false);
  const [userSuccess, setUserSuccess] = useState(false);
  const [getUserDialogMessage, setGetUserDialogMessage] = useState('');

  useEffect(() => {
    setKey(document.getElementById("keyInput").value);
  }, []);

  const handleSubmit = () => {
    const hashedKey = CryptoJS.MD5(key).toString();
    const isValidPassword = hashedKey === preDefinedHashedKey;
    setVerifyDevSuccess(isValidPassword);
  };

  return (
    <div>
      <div>

        <h1>Are you a good dev or gher dev?</h1>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: "3vh", marginTop: "3vh" }}>
          <input data-testid='keyInput'
            type="text" id='keyInput' placeholder="Enter key"
            onChange={(e) => setKey(e.target.value)}
            style={{ marginRight: '20px' }} />
          <button id='submitBtn' data-testid='submitBtn' onClick={handleSubmit}>Submit</button>
        </div>

      </div>

      <CustomDialog
        title={verifyDevSuccess ? 'Congrats' : 'Failed'}
        style={{ marginBottom: '3vh' }}
        content={verifyDevSuccess ? 'You are a good dev.' : 'You are a gher dev.'}
      />

      <GetInfoButton style={{ display: 'flex', margin: 'auto', marginBottom: '3vh' }}
        onClick={async () => {
          const res = await getUsers();
          const getUsersSucess = res === [] ? false : true;
          if (getUsersSucess) {
            const usersName = res.map(user => user['name']).join('\n');
            console.log(usersName);
            setUserSuccess(true);
            setGetUserDialogMessage(usersName);
          }
          else {
            setUserSuccess(false);
            setGetUserDialogMessage("Something went wrong");
          }
        }}
      >Get info</GetInfoButton>

      {userSuccess ? <CustomDialog
        id='getUserDialog'
        title={userSuccess ? 'Get users success' : 'Get users failed'}
        content={getUserDialogMessage}
      /> : null}

    </div >
  );
}

export default App;
