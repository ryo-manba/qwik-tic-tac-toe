import { component$ } from "@builder.io/qwik";
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

export default component$(() => {
  return (
    <>
      <div class="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div class="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div class="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
});

interface SquareProps {
  value: string;
}

const Square = component$<SquareProps>(({ value }) => {
  return <button class="square">{value}</button>;
});
