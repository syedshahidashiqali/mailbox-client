import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postApi } from "../utlis/apiHelper";
import { SIGNUP } from "../utlis/apiUrls";

function Signup() {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const updateState = (data) => {
    setSignupData((prev) => ({ ...prev, ...data }));
  };
  const submitHanlder = async (e) => {
    e.preventDefault();
    const data = await postApi(SIGNUP, {
      username: signupData.username,
      email: signupData.email,
      password: signupData.password,
    });
    console.log(data);
    if (data.status === true) {
      navigate("/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <form onSubmit={submitHanlder}>
      <input
        type="text"
        placeholder="Enter your username"
        value={signupData.username}
        onChange={(e) => updateState({ username: e.target.value })}
      />
      <input
        type="email"
        placeholder="Enter your email address"
        value={signupData.email}
        onChange={(e) => updateState({ email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={signupData.password}
        onChange={(e) => updateState({ password: e.target.value })}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;
