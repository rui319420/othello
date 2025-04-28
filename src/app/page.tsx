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
    [0, 0, 0, 2, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    // let tate = 0;
    // if (board[y][x] !== 0) return;
    // for (; tate <= 7; tate++) {
    //   for (let yoko = 0; yoko <= 7; yoko++) {
    //     if (board[y + tate] !== undefined && board[y + tate][x + yoko] === turnColor) {
    //       board[y + tate][x + yoko] = 3 - turnColor;
    //     }
    //   }
    // }
    if (board[y][x] !== 0) return;
    if (board[y][x] !== undefined) {
      //縦方向の処理です
      //下側の処理です
      if (board[y + 1] !== undefined && board[y + 2][x] === turnColor) {
        board[y + 1][x] = turnColor;
      }
      if (board[y + 1] !== undefined && board[y + 3][x] === turnColor) {
        board[y + 2][x] = turnColor;
        board[y + 1][x] = turnColor;
      }
      if (board[y + 1] !== undefined && board[y + 4][x] === turnColor) {
        board[y + 3][x] = turnColor;
        board[y + 2][x] = turnColor;
        board[y + 1][x] = turnColor;
      }
      if (board[y + 1] !== undefined && board[y + 5][x] === turnColor) {
        board[y + 4][x] = turnColor;
        board[y + 3][x] = turnColor;
        board[y + 2][x] = turnColor;
        board[y + 1][x] = turnColor;
      }
      if (board[y + 1] !== undefined && board[y + 6][x] === turnColor) {
        board[y + 5][x] = turnColor;
        board[y + 4][x] = turnColor;
        board[y + 3][x] = turnColor;
        board[y + 2][x] = turnColor;
        board[y + 1][x] = turnColor;
      }
      if (board[y + 1] !== undefined && board[y + 7][x] === turnColor) {
        board[y + 6][x] = turnColor;
        board[y + 5][x] = turnColor;
        board[y + 4][x] = turnColor;
        board[y + 3][x] = turnColor;
        board[y + 2][x] = turnColor;
        board[y + 1][x] = turnColor;
      }
      //上側の処理です
      if (board[y - 1] !== undefined && board[y - 2][x] === turnColor) {
        board[y - 1][x] = turnColor;
      }
      if (board[y - 1] !== undefined && board[y - 3][x] === turnColor) {
        board[y - 2][x] = turnColor;
        board[y - 1][x] = turnColor;
      }
      if (board[y - 1] !== undefined && board[y - 4][x] === turnColor) {
        board[y - 3][x] = turnColor;
        board[y - 2][x] = turnColor;
        board[y - 1][x] = turnColor;
      }
      if (board[y - 1] !== undefined && board[y - 5][x] === turnColor) {
        board[y - 4][x] = turnColor;
        board[y - 3][x] = turnColor;
        board[y - 2][x] = turnColor;
        board[y - 1][x] = turnColor;
      }
      if (board[y - 1] !== undefined && board[y - 6][x] === turnColor) {
        board[y - 5][x] = turnColor;
        board[y - 4][x] = turnColor;
        board[y - 3][x] = turnColor;
        board[y - 2][x] = turnColor;
        board[y - 1][x] = turnColor;
      }
      if (board[y - 1] !== undefined && board[y - 7][x] === turnColor) {
        board[y - 6][x] = turnColor;
        board[y - 5][x] = turnColor;
        board[y - 4][x] = turnColor;
        board[y - 3][x] = turnColor;
        board[y - 2][x] = turnColor;
        board[y - 1][x] = turnColor;
      }
      //横方向の処理です
      //右側の処理です
      if (board[x + 1] !== undefined && board[y][x + 2] === turnColor) {
        board[y][x + 1] = turnColor;
      }
      if (board[x + 1] !== undefined && board[y][x + 3] === turnColor) {
        board[y][x + 2] = turnColor;
        board[y][x + 1] = turnColor;
      }
      if (board[x + 1] !== undefined && board[y][x + 4] === turnColor) {
        board[y][x + 3] = turnColor;
        board[y][x + 2] = turnColor;
        board[y][x + 1] = turnColor;
      }
      if (board[x + 1] !== undefined && board[y][x + 5] === turnColor) {
        board[y][x + 4] = turnColor;
        board[y][x + 3] = turnColor;
        board[y][x + 2] = turnColor;
        board[y][x + 1] = turnColor;
      }
      if (board[x + 1] !== undefined && board[y][x + 6] === turnColor) {
        board[y][x + 5] = turnColor;
        board[y][x + 4] = turnColor;
        board[y][x + 3] = turnColor;
        board[y][x + 2] = turnColor;
        board[y][x + 1] = turnColor;
      }
      if (board[x + 1] !== undefined && board[y][x + 7] === turnColor) {
        board[y][x + 6] = turnColor;
        board[y][x + 5] = turnColor;
        board[y][x + 4] = turnColor;
        board[y][x + 3] = turnColor;
        board[y][x + 2] = turnColor;
        board[y][x + 1] = turnColor;
      }
      //左方向の処理です
      if (board[x - 1] !== undefined && board[y][x - 2] === turnColor) {
        board[y][x - 1] = turnColor;
      }
      if (board[x - 1] !== undefined && board[y][x - 3] === turnColor) {
        board[y][x - 2] = turnColor;
        board[y][x - 1] = turnColor;
      }
      if (board[x - 1] !== undefined && board[y][x - 4] === turnColor) {
        board[y][x - 3] = turnColor;
        board[y][x - 2] = turnColor;
        board[y][x - 1] = turnColor;
      }
      if (board[x - 1] !== undefined && board[y][x - 5] === turnColor) {
        board[y][x - 4] = turnColor;
        board[y][x - 3] = turnColor;
        board[y][x - 2] = turnColor;
        board[y][x - 1] = turnColor;
      }
      if (board[x - 1] !== undefined && board[y][x - 6] === turnColor) {
        board[y][x - 5] = turnColor;
        board[y][x - 4] = turnColor;
        board[y][x - 3] = turnColor;
        board[y][x - 2] = turnColor;
        board[y][x - 1] = turnColor;
      }
      if (board[x - 1] !== undefined && board[y][x - 7] === turnColor) {
        board[y][x - 6] = turnColor;
        board[y][x - 5] = turnColor;
        board[y][x - 4] = turnColor;
        board[y][x - 3] = turnColor;
        board[y][x - 2] = turnColor;
        board[y][x - 1] = turnColor;
      }
    }
    // //右下方向の処理です
    // if (board[y + 1][x + 1] !== undefined && board[y + 2][x + 2] === turnColor) {
    //   board[y + 1][x + 1] = turnColor;
    // } else if (board[y + 1][x + 1] !== undefined && board[y + 3][x + 3] === turnColor) {
    //   board[y + 2][x + 2] = turnColor;
    //   board[y + 1][x + 1] = turnColor;
    // }

    //   if (board[y + 1][x + 1] !== undefined && board[y + 4][x + 4] === turnColor) {
    //     board[y + 3][x + 3] = turnColor;
    //     board[y + 2][x + 2] = turnColor;
    //     board[y + 1][x + 1] = turnColor;
    //   }
    //   if (board[y + 5][x + 5] !== undefined && board[y + 5][x + 5] === turnColor) {
    //     board[y + 4][x + 3] = turnColor;
    //     board[y + 3][x + 2] = turnColor;
    //     board[y + 2][x + 2] = turnColor;
    //     board[y + 1][x + 1] = turnColor;
    //   }
    //   if (board[y + 6][x + 6] !== undefined && board[y + 6][x + 6] === turnColor) {
    //     board[y + 5][x + 5] = turnColor;
    //     board[y + 4][x + 4] = turnColor;
    //     board[y + 3][x + 3] = turnColor;
    //     board[y + 2][x + 2] = turnColor;
    //     board[y + 1][x + 1] = turnColor;
    //   }
    //   if (board[y + 7][x + 7] !== undefined && board[y + 7][x + 7] === turnColor) {
    //     board[y + 6][x + 6] = turnColor;
    //     board[y + 5][x + 5] = turnColor;
    //     board[y + 4][x + 4] = turnColor;
    //     board[y + 3][x + 3] = turnColor;
    //     board[y + 2][x + 2] = turnColor;
    //     board[y + 1][x + 1] = turnColor;
    //   }
    //   //右上方向の処理です
    //   if (board[y - 2][x + 2] !== undefined && board[y - 2][x + 2] === turnColor) {
    //     board[y - 1][x + 1] = turnColor;
    //   }
    //   if (board[y - 3][x + 3] !== undefined && board[y - 3][x + 3] === turnColor) {
    //     board[y - 2][x + 2] = turnColor;
    //     board[y - 1][x + 1] = turnColor;
    //   }
    //   if (board[y - 4][x + 4] !== undefined && board[y - 4][x + 4] === turnColor) {
    //     board[y - 3][x + 3] = turnColor;
    //     board[y - 2][x + 2] = turnColor;
    //     board[y - 1][x + 1] = turnColor;
    //   }
    //   // //左上方向の処理です
    //   if (board[y - 2][x - 2] !== undefined && board[y - 2][x - 2] === turnColor) {
    //     board[y - 1][x - 1] = turnColor;
    //   }
    //   if (board[y - 3][x - 3] !== undefined && board[y - 3][x - 3] === turnColor) {
    //     board[y - 2][x - 2] = turnColor;
    //     board[y - 1][x - 1] = turnColor;
    //   }
    //   if (board[y - 4][x - 4] !== undefined && board[y - 4][x - 4] === turnColor) {
    //     board[y - 3][x - 3] = turnColor;
    //     board[y - 2][x - 2] = turnColor;
    //     board[y - 1][x - 1] = turnColor;
    //   }
    //   // //左下方向の処理です
    //   if (board[y + 2][x + 2] !== undefined && board[y + 2][x + 2] === turnColor) {
    //     board[y + 1][x + 1] = turnColor;
    //   }
    //   if (board[y + 3][x + 3] !== undefined && board[y + 3][x + 3] === turnColor) {
    //     board[y + 2][x + 2] = turnColor;
    //     board[y + 1][x + 1] = turnColor;
    //   }
    //   if (board[y + 4][x + 4] !== undefined && board[y + 4][x + 4] === turnColor) {
    //     board[y + 3][x + 3] = turnColor;
    //     board[y + 2][x + 2] = turnColor;
    //     board[y + 1][x + 1] = turnColor;
    //   }

    //   if ((board[y][x + 2] = turnColor)) {
    //     board[y][x + 1] = 3 - turnColor;
    //   }
    const newBoard = structuredClone(board);
    newBoard[y][x] = turnColor;
    setBoard(newBoard);
    setTurnColor(3 - turnColor);
    if (board[y + 1] !== undefined && board[y + 1][x] === 3 - turnColor) {
      newBoard[y][x] = turnColor;
      setTurnColor(3 - turnColor);
    }
  };
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
