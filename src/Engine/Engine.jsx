export const Engine = (data) => {
  const arr = [];
  data.map((item) => {
    if (!item) {
      return;
    } else {
      if (item.color.functionName && item.color.value) {
        arr.push({ color: item.color.value });
      } else {
        console.log("error");
      }
    }
  });
  return arr;
};
