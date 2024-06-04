import React from 'react';

const Hello = ({ person }) => {
  // const { name, message } = props;

  return (
    <>
      <h1>
        {person.message} {person.name}
        {person.emoji} {person.seatNumbers}
      </h1>
    </>
  );
};

export default Hello;
