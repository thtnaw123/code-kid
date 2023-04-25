const Answer = [
  { name: "move", value: "move" },
  { name: "move", value: "move" },
  { name: "move", value: "move" },
];

export const checkAnswer = (outPutObj, Answer) => {
  let i = 0,
    count = 0;

  while (i < outPutObj.length - 1) {
    if (
      outPutObj[i].name === Answer[i].name &&
      outPutObj[i].name === Answer[i].value
    ) {
      count++;
    }
    i++;
  }
  if (i === outPutObj.length - 1) {
    if (count === i) {
      return true;
    }
  }
};
