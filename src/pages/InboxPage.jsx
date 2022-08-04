import Inbox from "../components/Inbox";
import { INBOX } from "../utlis/apiUrls";
import { useGetApi } from "../customHooks/useGetApi.js";

function InboxPage() {
  const inboxData = useGetApi(INBOX);

  return (
    <>
      <h1>Inbox mails</h1>
      {inboxData?.detail?.map((inboxItem, index) => {
        return (
          <Inbox
            key={index}
            from={inboxItem.from.email}
            to={inboxItem.to.email}
            message={inboxItem.message}
            subject={inboxItem.subject}
          />
        );
      })}
    </>
  );
}

export default InboxPage;
