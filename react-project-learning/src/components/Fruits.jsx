import React from 'react';
import Fruit from './Fruit';

const Fruits = () => {
  // const fruits = ['Apple', 'Orange', 'Banana', 'Strawberry'];
  const fruits = [
    { name: 'apple', price: 10, emoji: '💕' },
    { name: 'orange', price: 4, emoji: '❤' },
    { name: 'grapes', price: 34, emoji: '🐱‍🏍' },
    { name: 'banana', price: 4, emoji: '🐱' },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
          ></Fruit>
        ))}
      </ul>
    </div>
  );
};

export default Fruits;
