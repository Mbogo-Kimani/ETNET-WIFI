<template>
  <div class="app">
    <header class="header">
      <img src="@/assets/logo.png" alt="Logo" class="logo">
      <img src="@/assets/wifi-icon.png" alt="Logo" class="wifi-icon">
    </header>
    <router-view></router-view>
    <footer class="footer">
      <div class="contacts">
        <p class="cont">Email: sales@etnet.co.ke</p>
        <p class="cont">Phone: 0791012345</p>
        <p class="cont">www.etnet.co.ke</p>
      </div>
      <p class="p1">Email: sales@etnet.co.ke | Phone: 0790102345 | <a href="https://www.etnet.co.ke">www.etnet.co.ke</a></p>
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
  background-color: #ffff;
  margin-top: -80px;
  text-align: center;
  padding: 20px;
}
.logo {
  
  width: 200px;
  margin-right: 10px;
  top: 0%;
}

.wifi-icon{
  
  max-height: 2%;
  width: 80px;
  top: 0%;
  margin-left: 10px;
  margin-bottom: 130px;
}
.footer {
  margin-bottom: -400px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #ffff;
  text-align: center;
  padding: 20px;
  font-size: 15px;
  
}
.p1{
  
  font-weight: 500;
  margin-bottom: -600px;
}

.contacts{
  margin: 0 auto;
  padding: 15px;
  width: 50%;
  
  border-radius: 12px;
  color: #202b61;
  background-color: #fff;
}

.cont{
  font-size: 20px;
  font-weight: 700;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

</style>
