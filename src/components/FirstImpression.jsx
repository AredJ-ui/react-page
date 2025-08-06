import "../styles/FirstImpressionStyle.css";
import React, { useState, useEffect } from "react";

function FirstImpression({ targetDate }) {
  const calculateTimeLeft = () => {
    //saca los milisegundos
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  //se inicialice la variable con el tiempo restante
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(
    () => {
      //actualizar el tiempo cada segundo
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      //si el usuario cambia de vetana, dejo de repetir el ciclo
      return () => clearInterval(timer);
    },
    //realizar el useEffect cuando me pasen la fecha
    [targetDate]
  );

  const formatTime = (value) => String(value).padStart(2, "0");

  return (
    <>
      <div className="container">
        <h1 className="vertical-text">Jared & Gael</h1>

        <div className="bottom-section">
          <p className="wedding-text">NUESTRA BODA</p>
          <div className="arrow-down">&#x25BC;</div>
        </div>
      </div>
      <div className="Message-1">
        Aveces lo que empieza como una locura, se convierte en lo mejor de tu
        vida
      </div>
      <div className="Message-2">Te esperamos el dia</div>
      <div className="Date-1">12 de septiembre</div>
      <div className="countdown">
        <div>
          <span>{timeLeft.días} :</span>
          <br />
          Días
        </div>
        <div>
          <span>{timeLeft.horas} :</span>
          <br />
          Hs
        </div>
        <div>
          <span>{timeLeft.minutos} :</span>
          <br />
          Min
        </div>
        <div>
          <span>{timeLeft.segundos}</span>
          <br />
          Seg
        </div>
      </div>
      <button className="Agenda-Button">AGENDAR FECHA</button>
    </>
  );
}

export default FirstImpression;
