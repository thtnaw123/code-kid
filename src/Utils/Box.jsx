class Box {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x - 50, this.y, 60, 80);
    ctx.strokeStyle = "black";
    ctx.strokeWidth = 4;
    ctx.fill();
    ctx.stroke();
  }
}

export function DropBox(ctx, x, y, color) {
  let data = new Box(x, y, color);
  data.draw(ctx);
}
