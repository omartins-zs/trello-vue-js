<template>
  <div id="app">
    <Header />
    <div class="board">
      <div class="lane">
        <h2 class="lane-title">Backlog</h2>
        <Container
          group-name="trello"
          @drag-start="handleDragStart('backlog', $event)"
          @drop="handleDrop('backlog', $event)"
          :get-child-payload="getChildPayload"
          :drop-placeholder="{ className: 'placeholder' }"
        >
          <Dragable v-for="card in cards.backlog" :key="card.id">
            <Card>{{ card.text }}</Card>
          </Dragable>
        </Container>
      </div>
      <div class="lane">
        <h2 class="lane-title">Desenvolvimento</h2>
        <Container
          group-name="trello"
          @drag-start="handleDragStart('dev', $event)"
          @drop="handleDrop('backlog', $event)"
          :get-child-payload="getChildPayload"
          :drop-placeholder="{ className: 'placeholder' }"
        >
          <Dragable v-for="card in cards.dev" :key="card.id">
            <Card>{{ card.text }}</Card>
          </Dragable>
        </Container>
      </div>
      <div class="lane">
        <h2 class="lane-title">Testes</h2>
        <Container
          group-name="trello"
          @drag-start="handleDragStart('teste', $event)"
          @drop="handleDrop('backlog', $event)"
          :get-child-payload="getChildPayload"
          :drop-placeholder="{ className: 'placeholder' }"
        >
          <Dragable v-for="card in cards.testes" :key="card.id">
            <Card>{{ card.text }}</Card>
          </Dragable>
        </Container>
      </div>
      <div class="lane">
        <h2 class="lane-title">Finalizados</h2>
        <Container
          group-name="trello"
          @drag-start="handleDragStart('finalizados', $event)"
          @drop="handleDrop('backlog', $event)"
          :get-child-payload="getChildPayload"
          :drop-placeholder="{ className: 'placeholder' }"
        >
          <Dragable v-for="card in cards.finalizados" :key="card.id">
            <Card>{{ card.text }}</Card>
          </Dragable>
        </Container>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header";
import Card from "./components/Card";
import cards from "./cards.js";
// Biblioteca de Drag-and-drop:
import { Container, Draggable } from "vue-smooth-dnd";
// import { Container, Draggable } from "vue3-smooth-dnd";

export default {
  components: {
    Header,
    Card,
    Container,
    Draggable,
  },
  data: () => ({
    cards: {
      dev: cards.dev,
      backlog: cards.backlog,
      testes: cards.testes,
      finalizados: [],
    },
    // Controle dos Card que estão sendo arrastados no momento
    draggingCard: {
      lane: "",
      index: -1, // De onde o Card vem
      cardData: {},
    },
  }),
  methods: {
    // Disparar o evento ao começar a arrastar
    handleDragStart(lane, dragResult) {
      const { payload, isSource } = dragResult; // Drag
      if (isSource) {
        this.draggingCard = {
          lane,
          index: payload.index,
          // Os "..." para pegar todos os dados do card
          cardData: {
            ...this.cards[lane][payload.index],
          },
        };
      }
    },
    handleDrop(lane, dropResult) {
      const { removedIndex, addedIndex } = dropResult;

      if (lane === this.draggingCard.lane && removedIndex === addedIndex) {
        return;
      }
      if (removedIndex !== null) {
        this.cards[lane].splice(removedIndex, 1);
      }
      if (addedIndex !== null) {
        this.cards[lane].splice(addedIndex, 0, this.draggingCard.cardData);
      }
    },
    getChildPayload(index) {
      return {
        index,
      };
    },
  },
};
</script>

<style>
.board {
  display: flex;
  justify-content: flex-start;
  margin: 1.2rem 0.8rem;
  align-items: flex-start;
}

.lane {
  background: var(--color-grey);
  width: 23rem;
  height: 30rem;
  border-radius: 0.8rem;
  box-shadow: 0 0.1rem 0.2rem rgba(33, 33, 33, 0.1);
  margin: 0 0.8rem;

  padding: 0 0.7rem;
}

.lane-title {
  padding: 0.8rem 0.5rem;
  margin-bottom: 0.6rem;
}

.placeholder {
  background: rgba(33, 33, 33, 0.08);
  border-radius: 0.4rem;
  transform: scaleY(0.85);
  transform-origin: 0% 0%;
}
.quadrado {
  background: var(--color-grey);
  width: 23rem;
  height: 30rem;
  border-radius: 0.8rem;
  box-shadow: 0 0.1rem 0.2rem rgba(33, 33, 33, 0.1);
  /* margin: 3rem 0.8rem; */
  margin: 0 0.8rem;
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
