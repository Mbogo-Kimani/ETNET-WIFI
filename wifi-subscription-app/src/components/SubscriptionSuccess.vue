<template>
  <div class="message">
    <div :class="['success-page', animationClass]">
      <div class="icon-ring">
        <img src="@/assets/success.png" alt="Success" class="success-icon" />
      </div>
      <p class="success">Success</p>
      <p class="mess">Your subscription was successful</p>
      <button @click="goToSubscriptionPage">OK</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animationClass: "animated rollIn", // Initial animation class
    };
  },
  mounted() {
    // Wait 10 seconds before transitioning to rollOut animation
    setTimeout(() => {
      this.animationClass = "animated rollOut"; // Change animation to rollOut
      setTimeout(() => {
        this.$router.push("/subscriptionpage"); // Redirect after rollOut completes
      }, 1000); // Duration of the rollOut animation
    }, 5000); // Delay before rollOut starts (10 seconds)
  },
  methods: {
    goToSubscriptionPage() {
      this.$router.push("/subscriptionpage"); // Manual navigation
    },
  },
};
</script>

<style scoped>
/* Main container */
.message {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px 20px;
  flex-wrap: wrap;
  padding: 30px 20px;
  border-radius: 24px;
  margin-top: -50px;
  margin-top: -50px;
}

.success-page {
  border-radius: 30px;
  background-color: #FFFFFF80;
  border-radius: 30px;
  background-color: #FFFFFF80;
  text-align: center;
  padding: 30px;
  margin-top: 50px;
 
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  animation-duration: 1s; /* Animation duration for rollIn and rollOut */
  animation-fill-mode: both; /* Ensures animation stays applied after finishing */
}


/* Icon ring for centering and design */
.icon-ring {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

/* Icon styling */
.success-icon {
  width: 150px; /* Adjust icon size */
  width: 150px; /* Adjust icon size */
  height: auto; /* Maintain aspect ratio */
}

/* Success message */
.success {
  font-weight: 700;
  font-size: 25px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
}

/* Additional success message */
.mess {
  font-weight: 500;
  font-size: 18px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #213061;
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

/* Keyframes for rollIn animation */
@keyframes rollIn {
  0% {
    opacity: 0;
    transform: translateX(-100%) rotate(-120deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotate(0deg);
  }
}

/* Keyframes for rollOut animation */
@keyframes rollOut {
  0% {
    opacity: 1;
    transform: translateX(0) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: translateX(100%) rotate(120deg);
  }
}

/* Animation classes */
.animated {
  animation-duration: 1.5s;
  animation-fill-mode: both;
}

.rollIn {
  animation-name: rollIn;
}

.rollOut {
  animation-name: rollOut;
}
</style>


