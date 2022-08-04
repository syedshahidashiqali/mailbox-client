function SentMails({ to, from, subject, message }) {
  return (
    <div style={{ backgroundColor: "yellow", marginBottom: "10px" }}>
      <div>Subject: {subject} </div>
      <div>To: {to}</div>
      <div>From: {from}</div>
      <div>Message: {message}</div>
    </div>
  );
}

export default SentMails;
