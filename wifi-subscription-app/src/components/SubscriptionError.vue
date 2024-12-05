<template>
  <div class="message">
    <div class="error-page swing">
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
      this.$router.push('/'); // Navigate back to the home page
    }
  }
};
</script>

<style scoped>
/* Flash animation */
@keyframes flash {
  0%, 50%, 100% {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0;
  }
}

/* Swing animation */
@keyframes swing {
  20% {
    transform: rotate(15deg);
  }
  40% {
    transform: rotate(-10deg);
  }
  60% {
    transform: rotate(5deg);
  }
  80% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

/* Main container */
.message {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px 20px;
  border-radius: 24px;
  margin-top: -50px;
}

.error-page {
  border-radius: 30px;
  background-color: #FFFFFF80;
  text-align: center;
  padding: 30px;
  margin-top: 40px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  animation-duration: 2s; /* Animation duration for swing */
  animation-fill-mode: both; /* Ensures the animation stays applied after finishing */
}

.flash {
  animation: flash 3s ease-in-out infinite; /* Flash animation */
}

.swing {
  animation: swing 1s ease-in-out infinite; /* Swing animation */
}

.icon-ring {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.failed-icon {
  width: 150px;
  height: auto;
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
  color: #213061;
  padding: 15px;
  width: 100%;
  max-width: 70%;
  margin-top: 20px;
  border-radius: 16px;
  border: none;
  transition: background-color 0.3s ease;
  font-size: 18px;
  font-weight: bold;
}

button:hover {
  background-color: #eb7e03;
  color: #fff;
  cursor: pointer;
}
</style>
