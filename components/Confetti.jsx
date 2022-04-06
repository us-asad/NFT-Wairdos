import { useState, useEffect } from "react";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

export default function ConfettiComponent() {
  const { width, height } = useWindowSize();
  const [size, setSize] = useState({
    width: 300,
    height: 500
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
  }, [typeof window]);

  return (
    <Confetti
      numberOfPieces={300}
      gravity={0.01}
      width={size.width}
      height={size.height * 2}
    />
  );
}
