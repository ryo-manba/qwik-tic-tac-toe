import { component$, useSignal } from "@builder.io/qwik";
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
        <Square />
        <Square />
        <Square />
      </div>
      <div class="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div class="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
});

const Square = component$(() => {
  const data = useSignal("");
  return (
    <button class="square" onClick$={() => (data.value = "X")}>
      {data}
    </button>
  );
});
