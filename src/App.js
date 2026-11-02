import "./App.css";
import UserCard from "./components/UserCard";
import userImg from "./components/UserCard/user-img.jpg";

function App() {
  const userData = {
    userImgUrl: userImg,
    userName: "Jane",
    userSurname: "Doe",
    userNick: "@janedoe",
    isMale: false,
    isVerified: true,
    stats: {
      tweets: 42,
      followers: 1250,
      following: 340,
    },
  };

  return <UserCard userData={userData} />;
}

export default App;
