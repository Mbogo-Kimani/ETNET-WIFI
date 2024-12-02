<template>
  <div class="message">
    <div class="error-page">
      <div class="icon-ring">
        <img src="@/assets/failed.png" alt="Failed" class="failed-icon" />
      </div>
      <p class="failed">Failed</p>
      <p class="out">Process timed out</p>
      <p class="status">Your subscription has failed</p>
      <button @click="retry">Try again</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    retry() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.message {
  background: #FFFFFFE6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px 20px;
  border-radius: 24px;
}

.error-page {
  border-radius: 12px;
  background-color:#FFFFFFE6;
  text-align: center;
  padding: 30px;
  margin-top: -100px;
  max-width: 400px;
  width: 100%;
}

.icon-ring {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.failed-icon {
  width: 150px; /* Adjust icon size */
  height: auto; /* Maintain aspect ratio */
}

.failed {
  font-weight: 700;
  font-size: 25px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.out,
.status {
  font-weight: 500;
  font-size: 18px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 10px 0;
}

button {
  background: #ffc992;
  color: #fff;
  padding: 15px;
  width: 100%;
  max-width: 70%;
  margin-top: 20px;
  border-radius: 16px;
  border: none;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #eb7e03;
  cursor: pointer;
}
</style>
