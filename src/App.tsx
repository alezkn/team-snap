import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./store/reducers/userReducer";

interface UserState {
  userKey: string | null;
}

function App() {
  const [key, setKey] = useState("");

  const dispatch = useDispatch();
  const { userKey } = useSelector((state: { user: UserState }) => state.user);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKey(e.target.value);
  };

  const handleSaveClick = () => {
    dispatch(setUser(key));
  };

  return (
    <>
      <input type="text" value={key} onChange={handleInputChange}></input>
      <button onClick={handleSaveClick}>Click me!</button>
      <p>{userKey}</p>
    </>
  );
}

export default App;
