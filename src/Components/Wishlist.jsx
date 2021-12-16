import React from "react";

export default function Wishlist(props) {
  const { wishes, deleteWish } = props;

  const onDelete = (id) => {
    console.log(`deleting wish with id ${id}`);
    deleteWish(id);
  };

  return (
    <section>
      <h2>List of wishes</h2>
      <ul>
        {wishes.map((wish, index) => {
          return (
            <li key={index} onClick={() => onDelete(wish.id)}>
              {wish.content}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
