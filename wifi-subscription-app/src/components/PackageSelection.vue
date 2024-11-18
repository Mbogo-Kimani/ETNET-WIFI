<template>
  <div class="package-selection">
    <div v-for="(pkg, index) in packages" :key="index" class="package">
      <!-- Display the duration (formatted) and price of the package -->
      <p class="time">{{ formatDuration(pkg.duration) }}</p>
      <p class="ksh"><span>Ksh</span> {{ pkg.cost }}</p>
      <!-- Pass only duration and price to the checkout page -->
      <button @click="goToCheckout(pkg.duration, pkg.cost)">Get Access</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      packages: [], // Empty initially, will be populated by API
    };
  },
  mounted() {
    this.fetchPackages(); // Fetch packages when component is mounted
  },
  methods: {
    // Fetch packages from the backend API
    fetchPackages() {
      fetch("https://task.etnet.co.ke/api/street_packages")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch packages");
          }
          return response.json();
        })
        .then((data) => {
          this.packages = data; // Populate packages with the response data
        })
        .catch((error) => {
          console.error("Error fetching packages:", error);
        });
    },
    // Format duration from seconds to a readable format
    formatDuration(seconds) {
      const days = Math.floor(seconds / 86400);
      const hours = Math.floor((seconds % 86400) / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);

      if (days > 0) return `${days} Days`;
      if (hours > 0) return `${hours} Hours`;
      if (minutes > 0) return `${minutes} Minutes`;
      return `${seconds} Seconds`;
    },
    // Navigate to the checkout page with package details
    goToCheckout(duration, price) {
      this.$router.push({ name: "checkout", state: { duration, price } });
    },
  },
};
</script>

<style scoped>
.package-selection {
  background: whitesmoke;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -90px;
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 24px;
  width: auto;
}

.package {
  border-radius: 12px;
  background: #fff;
  padding: 1px;
  margin: 10px;
  width: 100%;
  max-width: 300px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.time {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 30px;
  font-weight: bold;
  color: #202b61;
  margin-bottom: -45px;
}

.ksh {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #704fde;
  font-size: 50px;
  font-weight: 900;
  margin-bottom: -0.1px;
}

span {
  font-size: 20px;
  font-weight: 900;
}

button {
  background: #f99526;
  color: #fff;
  font-weight: 900;
  font-size: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 8px;
  border-radius: 12px;
  width: 70%;
  margin-bottom: 15px;
  outline-style: none;
  border-style: none;
  transition: 0.3s ease;
}

button:hover {
  background-color: #eb7e03;
  cursor: pointer;
}
</style>
