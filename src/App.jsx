import { useEffect, useState } from "react";
import "./App.css";
import AddWish from "./Components/AddWish";
import Wishlist from "./Components/Wishlist";
import startWishes from "./data/preliminaryWishes";

function App() {
  const [wishes, setWishes] = useState([]);

  useEffect(() => {
    setWishes(startWishes);
  }, []);

  // useEffect(() => {
  //   if (localStorage.getItem("wishes")) {
  //     setWishes(JSON.parse(localStorage.getItem("wishes")));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(wishes));
  // }, [wishes]);

  const saveWish = (content) => {
    let id = 0;
    for (let item of wishes) {
      if (item.id >= id) {
        id = item.id;
      }
    }
    const newWish = {
      id: id + 1,
      content: content,
    };
    setWishes((prevWishes) => [...prevWishes, newWish]);
  };

  const deleteWish = (id) => {
    setWishes((prevWishes) => prevWishes.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Christmas Wishlist</h1>
      </header>
      <main>
        <AddWish saveWish={saveWish} />
        <Wishlist wishes={wishes} deleteWish={deleteWish} />
      </main>
    </div>
  );
}

export default App;
