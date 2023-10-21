import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <h1 class={styles.title}>Tic Tac Toe</h1>
      </div>
    </header>
  );
});
