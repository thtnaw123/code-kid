export const Engine = (data) => {
  const arr = [];
  data.map((item) => {
    if (!item) {
      return;
    } else {
      if (item.funname && item.value) {
        arr.push({ color: item.value });
      } else {
        console.log("error");
      }
    }
  });
  return arr;
};
