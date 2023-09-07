import React, { useState } from "react";
import BirthdayMessage from "../BirthdayMessage";

function App() {
  const [confettiVisible, setConfettiVisible] = useState(false);

  const showConfetti = () => {
    setConfettiVisible(true);
  };

  const closeBirthdayCard = () => {
    setConfettiVisible(false);
  };

  return (
    <div>
      <h1>¡ HAPPY BIRTHDAY SISTER !</h1>
      {!confettiVisible && (
        <button onClick={showConfetti}>Open The Card</button>
      )}
      {confettiVisible && (
        <BirthdayMessage
          showConfetti={showConfetti}
          onClose={closeBirthdayCard}
        />
      )}
    </div>
  );
}

export default App;
