export function Ball(ctx, color) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(100, 100, 20, 0, 2 * Math.PI);
  ctx.strokeWidth = 4;
  ctx.fill();
  ctx.stroke();
}
