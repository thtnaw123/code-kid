export default function WallCollision(objVar) {
  if (objVar.y + 50 > 400 || objVar.y - 50 <= 0) {
    console.log("y collision");
    objVar.dy = 0;
  }
  if (objVar.x + 50 > 600 || objVar.x - 50 <= 0) {
    objVar.dx = 0;
    console.log("x collision");
  }
}
