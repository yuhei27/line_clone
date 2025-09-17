import React, { useState } from "react";
import { auth, db } from "../firebase";
import firebase from "firebase/compat/app";
import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function SendMessage() {
  const [message, setMessage] = useState("");
  function sendMassage(e) {
    e.preventDefault();

    if (!message.trim()) return;

    const { uid, photoURL } = auth.currentUser;

    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
  }

  return (
    <div>
      <form onSubmit={sendMassage}>
        <div className="sendMsg">
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="メッセージを入力してください。"
            type="text"
            value={message}
          />
          <SendIcon
            style={{ color: "#7ac2ff", marginLeft: "20px" }}
            onClick={sendMassage}
          />
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
