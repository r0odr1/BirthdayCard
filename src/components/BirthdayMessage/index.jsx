import React from "react";
import Confetti from "react-confetti";
import "./index.css";

function BirthdayMessage({ showConfetti, onClose }) {
  return (
    <div>
      <h1>¡Querida Hermana!</h1>
      {showConfetti && (
        <div>
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={200}
          />
        </div>
      )}
      <p className="parr">
        En este tu día especial, quiero que sepas cuánto te amo. Eres una parte
        increíble en mi vida, y cada día contigo es un regalo. Tu bondad,
        alegría y amor llenan cada momento que compartimos, y estoy agradecido
        por tenerte como hermana. Que este año te traiga todo lo que deseas y
        más. <strong>¡Feliz cumpleaños!</strong> Que esta celebración esté llena
        de alegría y momentos inolvidables.<strong> Te amo!!</strong>, Tu
        hermano.
      </p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default BirthdayMessage;
