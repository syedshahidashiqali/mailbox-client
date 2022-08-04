import { useGetApi } from "../customHooks/useGetApi.js";
import { GETUSER } from "../utlis/apiUrls";

function Home() {
  const userData = useGetApi(GETUSER);

  return (
    <>
      <h1>Welcome to homepage of mailbox</h1>
      <h2>User Details</h2>
      <h3>Username: {userData?.detail?.username}</h3>
      <h3>Username: {userData?.detail?.email}</h3>
    </>
  );
}

export default Home;
