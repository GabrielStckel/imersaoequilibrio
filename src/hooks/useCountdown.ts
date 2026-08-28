import { useEffect, useState } from "react";

export type Countdown = {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
  aoVivo: boolean;
  pronto: boolean;
};

const ZERO: Countdown = {
  dias: 0,
  horas: 0,
  minutos: 0,
  segundos: 0,
  aoVivo: false,
  pronto: false,
};

function calcular(alvo: number): Countdown {
  const diff = alvo - Date.now();
  if (diff <= 0) {
    return { dias: 0, horas: 0, minutos: 0, segundos: 0, aoVivo: true, pronto: true };
  }
  const total = Math.floor(diff / 1000);
  return {
    dias: Math.floor(total / 86400),
    horas: Math.floor((total % 86400) / 3600),
    minutos: Math.floor((total % 3600) / 60),
    segundos: total % 60,
    aoVivo: false,
    pronto: true,
  };
}

export function useCountdown(inicioEvento: string): Countdown {
  const [estado, setEstado] = useState<Countdown>(ZERO);

  useEffect(() => {
    const alvo = new Date(inicioEvento).getTime();
    setEstado(calcular(alvo));
    const id = setInterval(() => setEstado(calcular(alvo)), 1000);
    return () => clearInterval(id);
  }, [inicioEvento]);

  return estado;
}
