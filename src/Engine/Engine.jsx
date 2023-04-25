export const Engine = (data) => {
  const arr = [];
  data.map((item) => {
    if (!item) {
      return;
    } else {
      if (item.functionName === "color") {
        arr.push({ name: "color", value: item.value });
      } else if (item.functionName === "move") {
        arr.push({ name: "move", value: "move" });
      } else if (item.functionName === "turn") {
        arr.push({ name: "turn", value: "turn" });
      } else if (item.functionName === "dropBox") {
        arr.push({ name: "dropBox", value: "dropbox" });
      } else {
        console.log("error");
      }
    }
  });
  return arr;
};
