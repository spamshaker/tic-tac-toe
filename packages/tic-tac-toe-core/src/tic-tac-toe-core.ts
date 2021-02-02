export * from './styles/bem';

export const playerA = 'O';
export const playerB = 'X';

export const BOARD_HEIGHT = 600;
export const BOARD_WIDTH = 600;
export const SEQ_1: Readonly<number[]> = Object.freeze([0, 1, 2]);
export const SEQ_2: Readonly<number[]> = Object.freeze([3, 4, 5]);
export const SEQ_3: Readonly<number[]> = Object.freeze([6, 7, 8]);
export const SEQ_4: Readonly<number[]> = Object.freeze([0, 3, 6]);
export const SEQ_5: Readonly<number[]> = Object.freeze([1, 4, 7]);
export const SEQ_6: Readonly<number[]> = Object.freeze([2, 5, 8]);
export const SEQ_7: Readonly<number[]> = Object.freeze([0, 4, 8]);
export const SEQ_8: Readonly<number[]> = Object.freeze([6, 4, 2]);

export const wins = Object.freeze([SEQ_1, SEQ_2, SEQ_3, SEQ_4, SEQ_5, SEQ_6, SEQ_7, SEQ_8]);

export const DRAWING_MAP: Map<Readonly<number[]>, number[]> = new Map<Readonly<number[]>, number[]>();

const W = BOARD_WIDTH;
const H = BOARD_HEIGHT;
const d = (x: number, l: number) => (l * x) / 6;
const dV = (n: number): [number, number, number, number] => [0, d(n, H), W, d(n, H)];
const dH = (n: number): [number, number, number, number] => [d(n, W), 0, d(n, W), H];

DRAWING_MAP.set(SEQ_1, dV(1));
DRAWING_MAP.set(SEQ_2, dV(3));
DRAWING_MAP.set(SEQ_3, dV(5));
DRAWING_MAP.set(SEQ_4, dH(1));
DRAWING_MAP.set(SEQ_5, dH(3));
DRAWING_MAP.set(SEQ_6, dH(5));
DRAWING_MAP.set(SEQ_7, [0, 0, W, H]);
DRAWING_MAP.set(SEQ_8, [0, H, W, 0]);
