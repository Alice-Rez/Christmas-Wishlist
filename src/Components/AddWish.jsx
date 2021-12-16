import React, { useState } from "react";

export default function AddWish(props) {
  const [newWish, setNewWish] = useState("");

  const { saveWish } = props;

  const getWish = (e) => {
    setNewWish(e.target.value);
  };

  const saveNewWish = (e) => {
    e.preventDefault();
    console.log("saving wish");
    saveWish(newWish);
    setNewWish("");
  };

  return (
    <section>
      <h2>Add your wish</h2>
      <form>
        <label htmlFor="newWish">What do you wish for?</label>
        <input
          type="text"
          name="newWish"
          id="newWish"
          onInput={getWish}
          value={newWish || ""}
        />
        <button className="submit" onClick={saveNewWish}>
          Save
        </button>
      </form>
    </section>
  );
}
