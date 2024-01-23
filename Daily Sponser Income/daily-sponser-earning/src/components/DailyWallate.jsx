import React, { useState, useEffect } from 'react';

const DailyWallet = () => {
    const [balance, setBalance] = useState(0);
  const [sponsorshipCount, setSponsorshipCount] = useState(0);

  const sponsorPerson = () => {
    setSponsorshipCount(sponsorshipCount + 1);
    alert(`Successfully sponsored! You will receive Rs. 2 daily for 100 days.`);
  };

  useEffect(() => {
    let isMounted = true;

    if (sponsorshipCount > 0) {
      const dailyAddition = setInterval(() => {
        if (isMounted) {
          setBalance((prevBalance) => prevBalance + 2);
        }
      }, 100); // 24 hours in milliseconds

      // Clear the interval after 100 days (100 * 24 hours)
      setTimeout(() => {
        if (isMounted) {
          clearInterval(dailyAddition);
          setSponsorshipCount(0); // Reset sponsorship count after 100 days
        }
      }, 100 *  100);

      // Clean up the interval when the component is unmounted
      return () => {
        clearInterval(dailyAddition);
        isMounted = false;
      };
    }
  }, [sponsorshipCount]);

  return (
    <div>
      <p>Current Balance: Rs. {balance}</p>
      <button onClick={sponsorPerson}>Sponsor a Person</button>
    </div>
  );
};
export default DailyWallet;
