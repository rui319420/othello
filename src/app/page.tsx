'use client';

import { useState } from 'react';
import styles from './page.module.css';
export default function Home() {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 2, 1, 2, 0, 0, 0],
    [0, 2, 1, 2, 1, 0, 0, 0],
    [0, 1, 2, 0, 0, 0, 0, 0],
    [0, 2, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0],
  ]);
  const passHandler = () => {
    setTurnColor(3 - turnColor);
    console.log(3 - turnColor);
  };
  const kuro = 0;
  const shiro = 0;
  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    if (board[y][x] !== 0) return;
    //石がある➡undefind
    const ok = false;
    //置けるならtrueにする
    const newBoard = structuredClone(board);
    newBoard[y][x] = turnColor; // まず自分の石を置く

    setBoard(newBoard);
    if (board[y][x] !== 0) return;
    const turnOK = false;
    let i = 1;
    //ひとつずつ下に進んで自分の色があったら今度は上にひとつずつ色をひっくり返す操作i<jがそれ
    for (; i < 8; i++) {
      if (board[y][x] !== undefined && board[y + i][x] === 3 - turnColor) continue;
      if (board[y + i][x] === turnColor) {
        for (let j = 0; j < i; j++) {
          newBoard[y + j][x] = turnColor;
        }
      }
      break;
    }
    // if (turnOK) {
    //   board[y][x] = turnColor;
    //   setBoard(newBoard);
    //   setTurnColor(turnColor);
    // }

    setTurnColor(3 - turnColor);
    if (board[y + 1] !== undefined && board[y + 1][x] === 3 - turnColor) {
      newBoard[y][x] = turnColor;
      setTurnColor(3 - turnColor);
    }
    setBoard(newBoard);
  };
  // const blackPoint = calcBlackPoint();
  // const whitePoint = calcWhitePoint();

  const currentPlayer = turnColor === 1 ? '黒' : '白';

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
