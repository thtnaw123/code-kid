export default function WallCollision(objVar) {
  if (objVar.y + 100 >= 400 || objVar.y <= 0) {
    console.log("y collision");
    objVar.dy = 0;
  }
  if (objVar.x + 100 >= 600 || objVar.x <= 0) {
    objVar.dx = 0;
    console.log("x collision");
  }
}
