<template>
  <div id="app">
    <Header />
    <div class="board">

      
      <div class="quadrado">
        <h2 class="quadrado-titulo"> A Fazer</h2>
        <Card v-for="card in cards.aFazer" :key="card.id">{{card.text}}</Card>
      </div>

      <div class="quadrado">
        <h2 class="quadrado-titulo">Fazendo</h2>
        <Card v-for="card in cards.fazendo" :key="card.id">{{card.text}}</Card>
      </div>
      <div class="quadrado">
        <h2 class="quadrado-titulo">Finalizados</h2>
        <Card v-for="card in cards.finalizados" :key="card.id">{{card.text}}</Card>
      </div>

      <div class="quadrado">
        <h2 class="quadrado-titulo">Observações</h2>
        <Card v-for="card in cards.observacoes" :key="card.id">{{card.text}}</Card>
      </div>

    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
import cards from "./cards.js";

export default {
  components: { Header, Card},

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
  margin: 3rem 0.8rem;
  padding: 0 0.7rem;
}

.quadrado-titulo {
  padding: 0.8rem 0.5rem;
  margin-bottom: 0.6rem;
  /* background: var(--color-grey);
  width: 23rem;
  height: 30rem;
  border-radius: 0.8rem;
  box-shadow: 0 0.1rem 0.2rem rgba(33, 33, 33, 0.1); */
}
</style>
