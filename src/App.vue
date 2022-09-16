<template>
  <div id="app">
    <Header />
    <div class="board">
      <div class="quadrado">
        <h2 class="quadrado-titulo">A Fazer</h2>
        <Container
          group-name="trello"
          @drag-start="handlerDragStart('aFazer', $event)"
          @drag="handlerDrop"
          :get-child-payload="getChildPayload"
        >
          <Dragable v-for="card in cards.aFazer" :key="card.id">
            <Card>{{ card.text }}</Card>
          </Dragable>
        </Container>
      </div>

      <div class="quadrado">
        <h2 class="quadrado-titulo">Fazendo</h2>
        <Container
          group-name="trello"
          @drag-start="handlerDragStart('fazendo', $event)"
          @drag="handlerDrop"
          :get-child-payload="getChildPayload"
        >
          <Dragable v-for="card in cards.fazendo" :key="card.id">
            <Card>{{ card.text }}</Card>
          </Dragable>
        </Container>
      </div>

      <div class="quadrado">
        <h2 class="quadrado-titulo">Finalizados</h2>
        <Container
          group-name="trello"
          @drag-start="handlerDragStart('finalizados', $event)"
          @drag="handlerDrop"
          :get-child-payload="getChildPayload"
        >
          <Dragable v-for="card in cards.finalizados" :key="card.id">
            <Card>{{ card.text }}</Card>
          </Dragable>
        </Container>
      </div>

      <div class="quadrado">
        <h2 class="quadrado-titulo">Observações</h2>
        <Container
          group-name="trello"
          @drag-start="handlerDragStart('observacoes', $event)"
          @drag="handlerDrop"
          :get-child-payload="getChildPayload"
        >
          <Dragable v-for="card in cards.observacoes" :key="card.id">
            <Card>{{ card.text }}</Card>
          </Dragable>
        </Container>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
import cards from "./cards.js";

// Biblioteca de Drag-and-drop:
import { Container, Draggable } from "vue-smooth-dnd";
// import { applyDrag, generateItems } from "./utils";

export default {
  components: { Header, Card, Container, Draggable },

  data: () => ({
    cards: {
      aFazer: cards.aFazer,
      fazendo: cards.fazendo,
      finalizados: cards.finalizados,
      observacoes: cards.observacoes,
    },

    // Controle dos Card que estão sendo arrastados no momento

    draggingCard: {
      lane: "",
      index: -1, // De onde o Card vem
      cardData: [],
    },
  }),

  methods: {
    // Disparar o evento ao começar a arrastar
    handlerDragStart(lane, dragResult) {
      const { payload, isSource } = dragResult; // Drag

      if (isSource) {
        this.draggingCard = {
          lane,
          index: payload.index,

          cardData: {
            // OS "..." para pegar todos os dados do card
            ...this.cards[lane][payload.index],
          },
        };
      }
      console.log(payload.index);
    },
    handlerDrop() {},
    getChildPayload(index) {
      return {
        index,
      };
    },
  },

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
