<template>
  <button class="return-button" @click="goBack">
    ← Return
  </button>
</template>

<script>
export default {
  name: "ReturnButton",
  methods: {
    goBack() {
      // Use Vue Router if available, otherwise fallback
      if (this.$router) {
        this.$router.back();
      } else {
        window.history.back();
      }
    },
  },
};
</script>

<style scoped>
.return-button {
  background-color: #3498db;
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

.return-button:hover {
  background-color: #2c80b4;
}

@media (max-width: 600px) {
  .return-button {
    width: 100%;
    font-size: 0.95rem;
    padding: 12px;
  }
}
</style>
