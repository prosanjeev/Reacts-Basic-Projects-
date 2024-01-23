import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const Wallet = () => {
  const [balance, setBalance] = useState(0);

  const sponsorPerson = () => {
    const perSponserAmount = 200;
   
    setBalance(balance + perSponserAmount);

    alert(`Successfully sponsored! You will receive Rs. ${perSponserAmount} `);
  };

  return (
    <div>
      <p>Current Balance: Rs. {balance}</p>
      <Button  onClick={sponsorPerson}>Sponsor a Person</Button>
    </div>
  );
};

export default Wallet;
