<template>
  <button class="home-button" @click="goHome">
    🏠 Home
  </button>
</template>

<script>
export default {
  name: "HomeButton",
  methods: {
    goHome() {
      if (this.$router) {
        this.$router.push({ path: "/" });
      } else {
        window.location.href = "/";
      }
    },
  },
};
</script>

<style scoped>
.home-button {
  background-color: #2ecc71;
  color: white;
  padding: 10px 20px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  
}

.home-button:hover {
  background-color: #27ae60;
}

@media (max-width: 600px) {
  .home-button {
    width: 100%;
    font-size: 0.95rem;
    padding: 12px;
  }
}
</style>
