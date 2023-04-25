export default function WallCollision(objVar, mode) {
  if (objVar.y + 100 >= 400 && mode === "right") {
    objVar.dy = 0;
  }
  if (objVar.y + 100 >= 400 && mode === "up") {
    objVar.dy = 50;
  }
  if (objVar.y <= 0 && mode === "up") {
    objVar.dy = 0;
  }
  if (objVar.y <= 0 && mode === "down") {
    objVar.dy = 50;
  }
  if (objVar.x + 100 >= 600 && mode === "straight") {
    objVar.dx = 0;
  }
  if (objVar.x + 100 >= 600 && mode === "back") {
    objVar.dx = 50;
  }
  if (objVar.x <= 0 && mode == "back") {
    objVar.dx = 0;
  }
  if (objVar.x <= 0 && mode == "straight") {
    objVar.dx = 50;
  }
}
