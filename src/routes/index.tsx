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
  check: QRL<(this: SquareStore, index: number) => void>;
};

export default component$(() => {
  const state = useStore<SquareStore>({
    squares: Array(9).fill(""),
    xIsNext: true,
    check: $(function (this: SquareStore, index: number) {
      if (this.squares[index]) {
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

  return (
    <>
      <div class="board-row">
        <Square
          value={state.squares[0]}
          onSquareClick={$(() => state.check(0))}
        />
        <Square
          value={state.squares[1]}
          onSquareClick={$(() => state.check(1))}
        />
        <Square
          value={state.squares[2]}
          onSquareClick={$(() => state.check(2))}
        />
      </div>
      <div class="board-row">
        <Square
          value={state.squares[3]}
          onSquareClick={$(() => state.check(3))}
        />
        <Square
          value={state.squares[4]}
          onSquareClick={$(() => state.check(4))}
        />
        <Square
          value={state.squares[5]}
          onSquareClick={$(() => state.check(5))}
        />
      </div>
      <div class="board-row">
        <Square
          value={state.squares[6]}
          onSquareClick={$(() => state.check(6))}
        />
        <Square
          value={state.squares[7]}
          onSquareClick={$(() => state.check(7))}
        />
        <Square
          value={state.squares[8]}
          onSquareClick={$(() => state.check(8))}
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
