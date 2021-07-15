import { normalPadding } from '../../utils/padding';

/**
 * padding 语义化
 */
export function getPaddingInfo(rawPadding: number | number[]) {
  const norPadding = normalPadding(rawPadding);
  return {
    top: norPadding[0],
    right: norPadding[1],
    bottom: norPadding[2],
    left: norPadding[3],
  };
}

/**
 * 设置 canvas 的位置
 */
export function setCanvasPosition(canvas: HTMLCanvasElement, left: number, top: number) {
  canvas.style.position = 'absolute';
  canvas.style.top = `${top}px`;
  canvas.style.left = `${left}px`;
}
