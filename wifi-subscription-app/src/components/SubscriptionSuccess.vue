<template>
  <div class="message">
    <div class="success-page">
      <div class="icon-ring">
        <img src="@/assets/success.png" alt="Success" class="success-icon" />
      </div>
      <p class="success">Success</p>
      <p class="mess">Your subscription was successful</p>
      <button @click="goHome">OK</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/'); // Navigate to the home page
    }
  }
};
</script>

<style scoped>
/* Main container */
.message {
  background: #e8e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 24px;
  min-height: 100vh; /* Full screen height */
}

/* Success page container */
.success-page {
  border-radius: 12px;
  background-color:#FFFFFFE6;
  text-align: center;
  padding: 30px;
  margin-top: -100px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

/* Icon ring for centering and design */
.icon-ring {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  border: 2px solid #704fde;
  border-radius: 50%;
  width: 100px; /* Adjust ring size */
  height: 100px; /* Ensure circular shape */
}

/* Icon styling */
.success-icon {
  width: 60px; /* Adjust icon size */
  height: auto; /* Maintain aspect ratio */
}

/* Success message */
.success {
  font-weight: 700;
  font-size: 25px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #ffffff;
  margin-bottom: 10px;
}

/* Additional success message */
.mess {
  font-weight: 500;
  font-size: 18px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #d1d1d1;
  margin-bottom: 20px;
}

/* Button styling */
button {
  background: #ffc992;
  color: #ffffff;
  padding: 15px;
  width: 100%;
  max-width: 70%;
  border-radius: 16px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #eb7e03;
}
</style>
