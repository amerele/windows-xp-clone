import React, {useEffect } from "react";

const StartUp = () => {
  useEffect(() => {
    const audio = new Audio('src/assets/Startup.mp3');
    audio.play();
  }, [1 === 1]);

  const play = ()=>{
    const audio = new Audio('src/assets/Startup.mp3');
    audio.play();
  }
  
  return <div onClick={play}>is loading</div>;
};

export default StartUp;
