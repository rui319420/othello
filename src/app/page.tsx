'use client';

import { useState } from 'react';
import styles from './page.module.css';

const directions = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];
export default function Home() {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    if (board[y][x] !== 0) return;

    const newBoard = structuredClone(board);
    newBoard[y][x] = turnColor; // まず自分の石を置く

    // 縦方向の処理
    // 下側
    if (
      y + 1 < 8 &&
      board[y + 1][x] === 3 - turnColor &&
      y + 2 < 8 &&
      board[y + 2][x] === turnColor
    ) {
      newBoard[y + 1][x] = turnColor;
    }
    if (
      y + 1 < 8 &&
      board[y + 1][x] === 3 - turnColor &&
      y + 2 < 8 &&
      board[y + 2][x] === 3 - turnColor &&
      y + 3 < 8 &&
      board[y + 3][x] === turnColor
    ) {
      newBoard[y + 2][x] = turnColor;
      newBoard[y + 1][x] = turnColor;
    }
    if (
      y + 1 < 8 &&
      board[y + 1][x] === 3 - turnColor &&
      y + 2 < 8 &&
      board[y + 2][x] === 3 - turnColor &&
      y + 3 < 8 &&
      board[y + 3][x] === 3 - turnColor &&
      y + 4 < 8 &&
      board[y + 4][x] === turnColor
    ) {
      newBoard[y + 3][x] = turnColor;
      newBoard[y + 2][x] = turnColor;
      newBoard[y + 1][x] = turnColor;
    }
    // 上側
    if (
      y - 1 >= 0 &&
      board[y - 1][x] === 3 - turnColor &&
      y - 2 >= 0 &&
      board[y - 2][x] === turnColor
    ) {
      newBoard[y - 1][x] = turnColor;
    }
    if (
      y - 1 >= 0 &&
      board[y - 1][x] === 3 - turnColor &&
      y - 2 >= 0 &&
      board[y - 2][x] === 3 - turnColor &&
      y - 3 >= 0 &&
      board[y - 3][x] === turnColor
    ) {
      newBoard[y - 2][x] = turnColor;
      newBoard[y - 1][x] = turnColor;
    }
    if (
      y - 1 >= 0 &&
      board[y - 1][x] === 3 - turnColor &&
      y - 2 >= 0 &&
      board[y - 2][x] === 3 - turnColor &&
      y - 3 >= 0 &&
      board[y - 3][x] === 3 - turnColor &&
      y - 4 >= 0 &&
      board[y - 4][x] === turnColor
    ) {
      newBoard[y - 3][x] = turnColor;
      newBoard[y - 2][x] = turnColor;
      newBoard[y - 1][x] = turnColor;
    }

    // 横方向の処理
    // 右側
    if (
      x + 1 < 8 &&
      board[y][x + 1] === 3 - turnColor &&
      x + 2 < 8 &&
      board[y][x + 2] === turnColor
    ) {
      newBoard[y][x + 1] = turnColor;
    }
    if (
      x + 1 < 8 &&
      board[y][x + 1] === 3 - turnColor &&
      x + 2 < 8 &&
      board[y][x + 2] === 3 - turnColor &&
      x + 3 < 8 &&
      board[y][x + 3] === turnColor
    ) {
      newBoard[y][x + 2] = turnColor;
      newBoard[y][x + 1] = turnColor;
    }
    if (
      x + 1 < 8 &&
      board[y][x + 1] === 3 - turnColor &&
      x + 2 < 8 &&
      board[y][x + 2] === 3 - turnColor &&
      x + 3 < 8 &&
      board[y][x + 3] === 3 - turnColor &&
      x + 4 < 8 &&
      board[y][x + 4] === turnColor
    ) {
      newBoard[y][x + 3] = turnColor;
      newBoard[y][x + 2] = turnColor;
      newBoard[y][x + 1] = turnColor;
    }
    // 左側
    if (
      x - 1 >= 0 &&
      board[y][x - 1] === 3 - turnColor &&
      x - 2 >= 0 &&
      board[y][x - 2] === turnColor
    ) {
      newBoard[y][x - 1] = turnColor;
    }
    if (
      x - 1 >= 0 &&
      board[y][x - 1] === 3 - turnColor &&
      x - 2 >= 0 &&
      board[y][x - 2] === 3 - turnColor &&
      x - 3 >= 0 &&
      board[y][x - 3] === turnColor
    ) {
      newBoard[y][x - 2] = turnColor;
      newBoard[y][x - 1] = turnColor;
    }
    if (
      x - 1 >= 0 &&
      board[y][x - 1] === 3 - turnColor &&
      x - 2 >= 0 &&
      board[y][x - 2] === 3 - turnColor &&
      x - 3 >= 0 &&
      board[y][x - 3] === 3 - turnColor &&
      x - 4 >= 0 &&
      board[y][x - 4] === turnColor
    ) {
      newBoard[y][x - 3] = turnColor;
      newBoard[y][x - 2] = turnColor;
      newBoard[y][x - 1] = turnColor;
    }

    // 斜め方向の処理
    // 右下
    if (
      y + 1 < 8 &&
      x + 1 < 8 &&
      board[y + 1][x + 1] === 3 - turnColor &&
      y + 2 < 8 &&
      x + 2 < 8 &&
      board[y + 2][x + 2] === turnColor
    ) {
      newBoard[y + 1][x + 1] = turnColor;
    }
    if (
      y + 1 < 8 &&
      x + 1 < 8 &&
      board[y + 1][x + 1] === 3 - turnColor &&
      y + 2 < 8 &&
      x + 2 < 8 &&
      board[y + 2][x + 2] === 3 - turnColor &&
      y + 3 < 8 &&
      x + 3 < 8 &&
      board[y + 3][x + 3] === turnColor
    ) {
      newBoard[y + 2][x + 2] = turnColor;
      newBoard[y + 1][x + 1] = turnColor;
    }
    if (
      y + 1 < 8 &&
      x + 1 < 8 &&
      board[y + 1][x + 1] === 3 - turnColor &&
      y + 2 < 8 &&
      x + 2 < 8 &&
      board[y + 2][x + 2] === 3 - turnColor &&
      y + 3 < 8 &&
      x + 3 < 8 &&
      board[y + 3][x + 3] === 3 - turnColor &&
      y + 4 < 8 &&
      x + 4 < 8 &&
      board[y + 4][x + 4] === turnColor
    ) {
      newBoard[y + 3][x + 3] = turnColor;
      newBoard[y + 2][x + 2] = turnColor;
      newBoard[y + 1][x + 1] = turnColor;
    }
    // 右上
    if (
      y - 1 >= 0 &&
      x + 1 < 8 &&
      board[y - 1][x + 1] === 3 - turnColor &&
      y - 2 >= 0 &&
      x + 2 < 8 &&
      board[y - 2][x + 2] === turnColor
    ) {
      newBoard[y - 1][x + 1] = turnColor;
    }
    if (
      y - 1 >= 0 &&
      x + 1 < 8 &&
      board[y - 1][x + 1] === 3 - turnColor &&
      y - 2 >= 0 &&
      x + 2 < 8 &&
      board[y - 2][x + 2] === 3 - turnColor &&
      y - 3 >= 0 &&
      x + 3 < 8 &&
      board[y - 3][x + 3] === turnColor
    ) {
      newBoard[y - 2][x + 2] = turnColor;
      newBoard[y - 1][x + 1] = turnColor;
    }
    if (
      y - 1 >= 0 &&
      x + 1 < 8 &&
      board[y - 1][x + 1] === 3 - turnColor &&
      y - 2 >= 0 &&
      x + 2 < 8 &&
      board[y - 2][x + 2] === 3 - turnColor &&
      y - 3 >= 0 &&
      x + 3 < 8 &&
      board[y - 3][x + 3] === 3 - turnColor &&
      y - 4 >= 0 &&
      x + 4 < 8 &&
      board[y - 4][x + 4] === turnColor
    ) {
      newBoard[y - 3][x + 3] = turnColor;
      newBoard[y - 2][x + 2] = turnColor;
      newBoard[y - 1][x + 1] = turnColor;
    }
    // 左上
    if (
      y - 1 >= 0 &&
      x - 1 >= 0 &&
      board[y - 1][x - 1] === 3 - turnColor &&
      y - 2 >= 0 &&
      x - 2 >= 0 &&
      board[y - 2][x - 2] === turnColor
    ) {
      newBoard[y - 1][x - 1] = turnColor;
    }
    if (
      y - 1 >= 0 &&
      x - 1 >= 0 &&
      board[y - 1][x - 1] === 3 - turnColor &&
      y - 2 >= 0 &&
      x - 2 >= 0 &&
      board[y - 2][x - 2] === 3 - turnColor &&
      y - 3 >= 0 &&
      x - 3 >= 0 &&
      board[y - 3][x - 3] === turnColor
    ) {
      newBoard[y - 2][x - 2] = turnColor;
      newBoard[y - 1][x - 1] = turnColor;
    }
    if (
      y - 1 >= 0 &&
      x - 1 >= 0 &&
      board[y - 1][x - 1] === 3 - turnColor &&
      y - 2 >= 0 &&
      x - 2 >= 0 &&
      board[y - 2][x - 2] === 3 - turnColor &&
      y - 3 >= 0 &&
      x - 3 >= 0 &&
      board[y - 3][x - 3] === 3 - turnColor &&
      y - 4 >= 0 &&
      x - 4 >= 0 &&
      board[y - 4][x - 4] === turnColor
    ) {
      newBoard[y - 3][x - 3] = turnColor;
      newBoard[y - 2][x - 2] = turnColor;
      newBoard[y - 1][x - 1] = turnColor;
    }
    // 左下
    if (
      y + 1 < 8 &&
      x - 1 >= 0 &&
      board[y + 1][x - 1] === 3 - turnColor &&
      y + 2 < 8 &&
      x - 2 >= 0 &&
      board[y + 2][x - 2] === turnColor
    ) {
      newBoard[y + 1][x - 1] = turnColor;
    }
    if (
      y + 1 < 8 &&
      x - 1 >= 0 &&
      board[y + 1][x - 1] === 3 - turnColor &&
      y + 2 < 8 &&
      x - 2 >= 0 &&
      board[y + 2][x - 2] === 3 - turnColor &&
      y + 3 < 8 &&
      x - 3 >= 0 &&
      board[y + 3][x - 3] === turnColor
    ) {
      newBoard[y + 2][x - 2] = turnColor;
      newBoard[y + 1][x - 1] = turnColor;
    }
    if (
      y + 1 < 8 &&
      x - 1 >= 0 &&
      board[y + 1][x - 1] === 3 - turnColor &&
      y + 2 < 8 &&
      x - 2 >= 0 &&
      board[y + 2][x - 2] === 3 - turnColor &&
      y + 3 < 8 &&
      x - 3 >= 0 &&
      board[y + 3][x - 3] === 3 - turnColor &&
      y + 4 < 8 &&
      x - 4 >= 0 &&
      board[y + 4][x - 4] === turnColor
    ) {
      newBoard[y + 3][x - 3] = turnColor;
      newBoard[y + 2][x - 2] = turnColor;
      newBoard[y + 1][x - 1] = turnColor;
    }

    setBoard(newBoard);
    setTurnColor(3 - turnColor);
  };

  // const newBoard = structuredClone(board);
  // newBoard[y][x] = turnColor;
  // setBoard(newBoard);
  // setTurnColor(3 - turnColor);
  // if (board[y + 1] !== undefined && board[y + 1][x] === 3 - turnColor) {
  //   newBoard[y][x] = turnColor;
  //   setTurnColor(3 - turnColor);
  // }
  // setBoard(newBoard);
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => clickHandler(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.stone}
                  style={{ background: color === 1 ? `#000` : `#fff` }}
                />
              )}
            </div>
          )),
        )}
      </div>
    </div>
  );
}
