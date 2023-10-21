import { component$, useStore, $, type QRL } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export const head: DocumentHead = {
  title: "Qwik Tic Tac Toe",
  meta: [
    {
      name: "description",
      content: "Qwik Tic Tac Toe",
    },
  ],
};

type SquareStore = {
  squares: string[];
  xIsNext: boolean;
  handleClick: QRL<(this: SquareStore, index: number) => void>;
};

export default component$(() => {
  const state = useStore<SquareStore>({
    squares: Array(9).fill(""),
    xIsNext: true,
    handleClick: $(function (this: SquareStore, index: number) {
      if (this.squares[index] || calculateWinner(this.squares)) {
        return;
      }
      if (this.xIsNext) {
        this.squares[index] = "X";
      } else {
        this.squares[index] = "O";
      }
      this.xIsNext = !this.xIsNext;
    }),
  });

  const winner = calculateWinner(state.squares);
  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (state.xIsNext ? "X" : "O");

  return (
    <>
      <div class="status">{status}</div>
      <div class="board-row">
        <Square
          value={state.squares[0]}
          onSquareClick={$(() => state.handleClick(0))}
        />
        <Square
          value={state.squares[1]}
          onSquareClick={$(() => state.handleClick(1))}
        />
        <Square
          value={state.squares[2]}
          onSquareClick={$(() => state.handleClick(2))}
        />
      </div>
      <div class="board-row">
        <Square
          value={state.squares[3]}
          onSquareClick={$(() => state.handleClick(3))}
        />
        <Square
          value={state.squares[4]}
          onSquareClick={$(() => state.handleClick(4))}
        />
        <Square
          value={state.squares[5]}
          onSquareClick={$(() => state.handleClick(5))}
        />
      </div>
      <div class="board-row">
        <Square
          value={state.squares[6]}
          onSquareClick={$(() => state.handleClick(6))}
        />
        <Square
          value={state.squares[7]}
          onSquareClick={$(() => state.handleClick(7))}
        />
        <Square
          value={state.squares[8]}
          onSquareClick={$(() => state.handleClick(8))}
        />
      </div>
    </>
  );
});

interface SquareProps {
  value: string;
  onSquareClick: () => Promise<void>;
}

const Square = component$<SquareProps>(({ value, onSquareClick }) => {
  return (
    <button class="square" onClick$={onSquareClick}>
      {value}
    </button>
  );
});

const calculateWinner = (squares: string[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
