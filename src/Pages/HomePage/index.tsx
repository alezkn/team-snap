import { useSelector } from "react-redux";

interface UserState {
  userKey: string | null;
}

function HomePage() {
  const { userKey } = useSelector((state: { user: UserState }) => state.user);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome, {userKey}!</p>
    </div>
  );
}

export default HomePage;
