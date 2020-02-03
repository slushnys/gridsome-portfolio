<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/" class="header-link text-4xl">Zigmas Slušnys</g-link>
      </strong>
      <!-- <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav> -->
    </header>
    <div class="container mx-auto">
      <transition name="fade" appear>
        <main>
          <!-- a wrapper for slot is needed -->
          <slot />
          <!-- the content -->
        </main>
      </transition>
    </div>
    <!-- <footer class="flex mt-6">
      <div class=" items-center mx-auto">slusnys.com</div>
    </footer> -->
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data: () => ({
    
  })
};
</script>

<style>
body {
  /* background-color: #454e59; */
  font-family: "Karla", sans-serif;

  margin: 0;
  padding: 0;
  line-height: 1.5;
}
header.header {
  font-family: "Rubik", sans-serif;
}
.header-link {
  color: black;
  text-decoration: none;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
