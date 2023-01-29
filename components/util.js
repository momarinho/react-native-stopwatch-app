const padToTwo = (number) => (number <= 9 ? `0${number}` : number);

export const displayTime = (centisec) => {
  let min = 0;
  let sec = 0;

  if (centisec < 0) {
    centisec = 0;
  }
  if (centisec < 100) {
    return `00:00:${padToTwo(centisec)}`;
  }

  let remainingCentisec = centisec % 100;
  sec = (centisec - remainingCentisec) / 100;

  if (sec < 60) {
    return `00:${padToTwo(sec)}:${padToTwo(remainingCentisec)}`;
  }

  let remainingSec = sec % 60;
  min = (sec - remainingSec) / 60;

  return `${padToTwo(min)}:${padToTwo(remainingSec)}:${padToTwo(
    remainingCentisec
  )}`;
};
