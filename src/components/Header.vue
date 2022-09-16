<template>
  <div class="navbar">
    <a href="#home">Home</a>
    <a href="#news">Home</a>

    <div class="dropdown">
      <button class="btn-dropdown">Area de trabalho</button>

      <div class="dropdown-content">
        <a href=".">Link 1</a>
        <a href=".">Link 2</a>
        <a href=".">Link3</a>
      </div>
    </div>

    <div class="dropdown">
      <button class="btn-dropdown">Recentes</button>

      <div class="dropdown-content">
        <a href=".">Link 1</a>
        <a href=".">Link 2</a>
        <a href=".">Link3</a>
      </div>
    </div>

    <div class="dropdown">
      <button class="btn-dropdown">Criar</button>

      <div class="dropdown-content">
        <a href=".">Link 1</a>
        <a href=".">Link 2</a>
        <a href=".">Link3</a>
      </div>
    </div>

    <div class="search">
      <form action="" class="form-search" method="get">
        <input type="text" value="" class="inputBusca" placeholder="Digite o que voce procura"/>
        <input type="submit" id="btnBusca" value="Ok" />
        <input type="submit" id="btnSair" value="Sair" />
      </form>
    </div>
  </div>

  <header class="header">

  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  width: 100%;
  background-color: var(--color-blue);
  height: 3.5rem;
}

.navbar {
  overflow: hidden;
  background-color: #333;
  font-family: Arial;
}

.navbar a {
  float: left;
  font-size: 1rem;
  color: whitesmoke;
  text-align: center;
  padding: 0.875rem 1rem;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .btn-dropdown {
  font-size: 1rem;
  border: none;
  outline: none;
  color: whitesmoke;
  padding: 0.875rem 1rem;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover,
.dropdown:hover .btn-dropdown {
  background-color: rgb(218, 124, 124);
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 1rem 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: rgb(37, 35, 35);
  padding: 0.9375rem 1rem;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.search {
  margin: 0.625rem;
  padding: 10;
  float: right;
}

.inputBusca {
  border: 0rem solid #222;
  background: #eee;
  width: 16.25rem;
  height: 2rem;
  margin: 0 auto;
  padding: 0.3125rem 0 0.3125rem 0.3125rem;
  float: left;
  line-height: 2.25rem;
}

#btnBusca {
  background: #713ac5;
  position: relative;
  border: 0px solid #222;
  color: #fff;
  margin: 0 auto;
  padding: 0.625rem;
  border: 0 none;
  font-size: 0.6875rem;
  font-weight: bold;
  text-transform: uppercase;
}
#btnBusca:hover {
  background: #2c51e4;
}

#btnSair {
  background: #dc3545;
  position: relative;
  border: 0px solid #222;
  color: #fff;
  margin: 0 1.25rem;
  padding: 0.625rem;
  border: 0 none;
  font-size: 0.6875rem;
  font-weight: bold;
  text-transform: uppercase;
}

#btnSair:hover {
  background: #f14e5e;
}
</style>
