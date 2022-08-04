import { useState } from "react";
import { postApi } from "../utlis/apiHelper";
import { SENDMAILURL } from "../utlis/apiUrls";

function SendMail() {
  const [emailBody, setEmailBody] = useState({
    to: "",
    subject: "My email subject",
    message: "My email message",
  });

  const [response, setResponse] = useState();

  const updateState = (data) => {
    setEmailBody((prev) => ({ ...prev, ...data }));
  };

  const postData = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("TOKEN");
    const data = await postApi(SENDMAILURL, emailBody, {
      "x-access-token": token,
    });
    setResponse(data);
  };
  return (
    <div className="form">
      <form onSubmit={postData}>
        <h1>Compose Email</h1>
        <div className="toEmail">
          <label htmlFor="toEmail">To Email:</label>
          <input
            type="email"
            id="toEmail"
            value={emailBody.to}
            onChange={(e) => updateState({ to: e.target.value })}
          />
        </div>
        <div className="subject">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={emailBody.subject}
            onChange={(e) => updateState({ subject: e.target.value })}
          />
        </div>
        <div className="message">
          <label htmlFor="message">Message:</label>
          <input
            type="text"
            id="message"
            value={emailBody.message}
            onChange={(e) => updateState({ message: e.target.value })}
          />
        </div>
        <div className="sendSection">
          <button type="submit">Send</button>
        </div>
      </form>
      {response?.status === true && <h1>Successfully sent email</h1>}
    </div>
  );
}

export default SendMail;
