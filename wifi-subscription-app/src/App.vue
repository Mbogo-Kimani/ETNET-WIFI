<template>
  <div class="app">
    <header class="header">
      <img src="@/assets/logo.png" alt="Logo" class="logo">
    </header>
    <router-view />
    <footer class="footer">
      <p>Email: sales@etnet.co.ke | Phone: 0790102345 | <a href="https://www.etnet.co.ke">www.etnet.co.ke</a></p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
.header {
  text-align: center;
  padding: 20px;
}
.logo {
  width: 120px;
}
.footer {
  text-align: center;
  padding: 20px;
  font-size: 12px;
}
</style>
