'use client';

import { useState } from 'react';
import styles from './page.module.css';

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
  ]); //1:黒   2:白

  const dirs = [
    [0, 1],
    [0, -1],
    [1, 1],
    [1, 0],
    [1, -1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
  ];

  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);
    if (newBoard[y][x] !== 0) return;
    let canFlip: boolean = false;
    for (const [dy, dx] of dirs) {
      let searchX = x + dx; //前後１マス
      let searchY = y + dy;
      let count = 0;
      while (
        searchY >= 0 &&
        searchY < 8 &&
        searchX >= 0 &&
        searchX < 8 &&
        newBoard[searchY][searchX] === 3 - turnColor
      ) {
        count++;
        searchX += dx;
        searchY += dy;
      }
      if (newBoard[searchY] === undefined || newBoard[searchY][searchX] === undefined) {
        continue; // 盤面の外に出ていたら方向を変える
      }
      if (newBoard[searchY][searchX] === turnColor && count > 0) {
        canFlip = true;
        for (let i = 1; i <= count; i++) {
          const turnX = x + dx * i;
          const turnY = y + dy * i;
          newBoard[turnY][turnX] = turnColor;
        }
      }
    }
    if (canFlip === false) return;
    newBoard[y][x] = turnColor;
    setTurnColor(3 - turnColor);
    setBoard(newBoard);
  };

  const currentPlayer = turnColor === 1 ? '黒' : '白';

  const passHandler = () => {
    setTurnColor(3 - turnColor);
    console.log(3 - turnColor);
  };

  return (
    <div className={styles.container}>
      <div className={styles.turnDisplay}>{currentPlayer}の番です</div>
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
      <button className={styles.button} onClick={passHandler}>
        パス
      </button>
    </div>
  );
}
