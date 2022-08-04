import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postApi } from "../utlis/apiHelper";
import { LOGIN } from "../utlis/apiUrls";

function Login() {
  const navigate = useNavigate();
  const [loginData, setloginData] = useState({ email: "", password: "" });

  const updateState = (data) => {
    setloginData((prev) => ({ ...prev, ...data }));
  };

  const submitHanlder = async (e) => {
    e.preventDefault();
    const data = await postApi(LOGIN, {
      email: loginData.email,
      password: loginData.password,
    });
    localStorage.setItem("TOKEN", data.detail);
    navigate("/inbox");
  };

  return (
    <form onSubmit={submitHanlder}>
      <input
        type="email"
        placeholder="Enter your email address"
        value={loginData.email}
        onChange={(e) => updateState({ email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={loginData.password}
        onChange={(e) => updateState({ password: e.target.value })}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
