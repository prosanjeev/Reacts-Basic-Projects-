import React, { useState } from 'react';

const Wallet = () => {
  const [balance, setBalance] = useState(0);

  const sponsorPerson = () => {
    const dailyAmount = 2;
    const sponsorshipDuration = 100;

    const totalAmount = dailyAmount * sponsorshipDuration;
    setBalance(balance + totalAmount);

    alert(`Successfully sponsored! You will receive Rs. ${totalAmount} over ${sponsorshipDuration} days.`);
  };

  return (
    <div>
      <p>Current Balance: Rs. {balance}</p>
      <button onClick={sponsorPerson}>Sponsor a Person</button>
    </div>
  );
};

export default Wallet;
