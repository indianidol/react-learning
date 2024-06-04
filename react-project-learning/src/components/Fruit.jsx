import React from 'react';

function Fruit({ name, price, emoji }) {
  return (
    <li>
      {name}
      {price}
      {emoji}
    </li>
  );
}

export default Fruit;
