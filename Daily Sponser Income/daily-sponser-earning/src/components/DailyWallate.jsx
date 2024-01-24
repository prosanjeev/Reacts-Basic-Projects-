import { Box, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const DailyWallet = () => {
  const [balances, setBalances] = useState([]);
  const [sponsorshipCount, setSponsorshipCount] = useState(0);

  const startInterval = () => {
    let isMounted = true;

    const interval = setInterval(() => {
      if (isMounted) {
        setBalances((prevBalances) => {
          const newBalances = [...prevBalances];
          newBalances[sponsorshipCount - 1] =
            (newBalances[sponsorshipCount - 1] || 0) + 2;

          if (newBalances[sponsorshipCount - 1] >= 200) {
            clearInterval(interval); // Stop the interval for this sponsorship
          }

          return newBalances;
        });
      }
    }, 100); // Calculate every 100 milliseconds // replace 100 to 24*60*60*1000 for per day

    // Clean up the interval when the component is unmounted
    return () => {
      clearInterval(interval);
      isMounted = false;
    };
  };

  const sponsorPerson = () => {
    setSponsorshipCount((prevSponsorshipCount) => prevSponsorshipCount + 1);
    alert(
      `Successfully sponsored! You will receive Rs. 2 for this sponsorship.`
    );
  };

  useEffect(() => {
    if (sponsorshipCount > 0) {
      startInterval();
    }
  }, [sponsorshipCount]);

  const totalBalance = balances.reduce(
    (total, balance) => total + (balance || 0),
    0
  );

  return ( 
    <div>
      <Box  mb={2}>Total Balance: Rs. <Box fontSize='18px' as="span" p={1} borderRadius={10} border="1px solid gray">{totalBalance}</Box></Box>
      <Button onClick={sponsorPerson}>Sponsor a Person</Button>
    </div>
  );
};

export default DailyWallet;
