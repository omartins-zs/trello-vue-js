<template>
  <Header></Header>

  <div id="app">
    <div class="board">
      <div class="quadrado">
        <div class="quadrado-titulo">
          A Fazer

          <Card v-for="card in cards.aFazer" :key="card.id">{{
            card.text
          }}</Card>
        </div>
      </div>

      <div class="quadrado">
        <div class="quadrado-titulo">
          Fazendo
          <Card v-for="card in cards.fazendo" :key="card.id">{{
            card.text
          }}</Card>
        </div>
      </div>
      <div class="quadrado">
        <div class="quadrado-titulo">
          Finalizados
          <Card v-for="card in cards.finalizados" :key="card.id">{{
            card.text
          }}</Card>
        </div>
      </div>

      <div class="quadrado">
        <div class="quadrado-titulo">
          Observações
          <Card v-for="card in cards.observacoes" :key="card.id">{{
            card.text
          }}</Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
import cards from "./cards.js";

export default {
  components: { Header, Card, Card },

  data: () => ({
    cards: {
      aFazer: cards.aFazer,
      fazendo: cards.fazendo,
      finalizados: cards.finalizados,
      observacoes: cards.observacoes,
    },
  }),
  // name: "App"
};
</script>

<style>
.board {
  display: flex;
  justify-content: flex-start;
  margin: 0 0.8rem;
}

.quadrado {
  background: var(--color-grey);
  width: 23rem;
  height: 30rem;
  border-radius: 0.8rem;
  box-shadow: 0 0.1rem 0.2rem rgba(33, 33, 33, 0.1);
}
.quadrado-titulo {
  padding: 0.8rem 0.5rem;
  margin-bottom: 0.6rem;
  background: var(--color-grey);
  width: 23rem;
  height: 30rem;
  border-radius: 0.8rem;
  box-shadow: 0 0.1rem 0.2rem rgba(33, 33, 33, 0.1);
}
</style>
