<template>
  <div id="app">
    <div id="navbar" class="row-8">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <button class="navbar-toggler"      type="button" 
                data-toggle="collapse"      data-target="#navbarNav"
                aria-controls="# navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link to="/">
                <button type="button" class="btn btn-outline-primary mr-2">home</button>
              </router-link>  
            </li>
            <li class="nav-item active">
              <router-link to="/books">
                <button type="button" class="btn btn-outline-secondary mr-2">Books</button>
              </router-link>  
            </li>
            <li>
              <router-link to="/addBook">
                <button type="button" class="btn btn-outline-dark mr-2"> 
                  Add Book
                </button>
              </router-link>  
            </li>
            <li>
              <router-link to="/about">
                <button type="button" class="btn btn-outline-dark mr-2"> 
                  About
                </button>
              </router-link>  
            </li>
          </ul>
        </div>
      </nav>

    </div>
    <div class="row">
      <div class="col-sm-12">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  name : 'app',
  components :{

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
a.router-link-exact-active {
  background : lightgoldenrodyellow; 
}

</style>
