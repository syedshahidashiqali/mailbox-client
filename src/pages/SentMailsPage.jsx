import SentMails from "../components/SentMails";
import { SENT } from "../utlis/apiUrls";
import { useGetApi } from "../customHooks/useGetApi.js";

function SentMailsPage() {
  const sentMails = useGetApi(SENT);
  return (
    <>
      <h1>Sent mails</h1>
      {sentMails?.detail?.map((sentItem, index) => {
        return (
          <SentMails
            key={index}
            from={sentItem.from.email}
            to={sentItem.to.email}
            message={sentItem.message}
            subject={sentItem.subject}
          />
        );
      })}
    </>
  );
}

export default SentMailsPage;
