<template>
  <div class="package-selection">
    <div v-for="(pkg, index) in packages" :key="index" class="package">
      <!-- Display the package name at the top -->
      <p class="package-name">{{ pkg.name }}</p>
      <p class="ksh"><span>Ksh</span> {{ pkg.cost }}</p>
      <p class="time">{{ formatDuration(pkg.duration) }}</p>
      <p class="access">Unlimited Access</p>
      <p class="devices">{{ pkg.description }}</p>
      <!-- Button to navigate to checkout -->
      <button @click="goToCheckout(pkg)">Get Access</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      packages: [], // Array to hold the fetched packages
    };
  },
  mounted() {
    this.fetchPackages(); // Fetch packages when the component is mounted
  },
  methods: {
    // Fetch packages from the backend API
    fetchPackages() {
      fetch("http://localhost:3000/api/street_packages")
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch packages");
          return response.json();
        })
        .then((data) => {
          console.log("Data received:", data);
          this.packages = data.packages || []; // Store packages in the data
        })
        .catch((error) => console.error("Error fetching packages:", error));
    },
    // Format the duration from seconds to days or hours
    formatDuration(seconds) {
      const days = Math.floor(seconds / 86400);
      const hours = Math.floor((seconds % 86400) / 3600);
      if (days > 0) return `${days} Day${days > 1 ? 's' : ''}`;
      if (hours > 0) return `${hours} Hour${hours > 1 ? 's' : ''}`;
      return `${seconds} Seconds`;
    },
    // Navigate to checkout and pass the selected package data
    goToCheckout(pkg) {
      console.log("Navigating to checkout with:", pkg);

      // Save the package data to sessionStorage for secure access
      sessionStorage.setItem("checkoutData", JSON.stringify(pkg));

      // Navigate to the checkout route
      this.$router.push({ name: "checkout" });
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
  background:#FFFFFF;
  padding: 1px;
  margin: 10px;
  width: 100%;
  max-width: 400px;
  height: 300px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.package-name {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 25px;
  font-weight: bold;
  color: #202b61;
  margin-bottom: 10px;
}

.time, .access, .devices {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 18px;
  margin: 5px 0;
}

.ksh {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #704fde;
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 5px;
}

button {
  background: #FFE0C1;
  color: #202b61;
  font-weight: 900;
  font-size: 16px;
  padding: 8px;
  border-radius: 12px;
  width: 70%;
  outline-style: none;
  border-style: none;
  transition: 0.3s ease;
}

button:hover {
  background-color: #eb7e03;
  cursor: pointer;
}
</style>
