<template>
  <div class="container">
    <!-- Image Cards -->
    <div class="image-cards">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="image-card"
        :class="{ center: currentIndex === index }"
        @mouseover="onHover(index)"
      >
        <div class="card-text">{{ image.text }}</div>
        <img :src="image.src" :alt="image.alt" class="card-image" />
      </div>
    </div>

    <!-- Info Bar -->
    <div class="info-bar">
      <div class="info-item">
        <img src="@/assets/customer.png" alt="Contact Icon" class="icon" />
        <span @click="$router.push('/contact')">Contact customer care</span>
      </div>
      <div class="info-item">
        <img src="@/assets/wifi-green.png" alt="Subscription Icon" class="icon" />
        <span @click="$router.push('/subscription')">Subscriptions</span>
      </div>
    </div>

    <!-- Hotspot Plans Heading -->
    <h2>HOTSPOT PLANS</h2>

    <!-- Package Selection -->
    <div class="package-selection">
      <div
        v-for="(pkg, index) in packages"
        :key="index"
        :class="[
          'package-card',
          isOrangePackage(pkg.name) ? 'orange-theme' : 'green-theme',
        ]"
      >
        <h3 class="package-name">{{ pkg.name }}</h3>
        <p class="ksh"><span class="pay">Ksh</span> {{ pkg.cost }}</p>
        <p class="time">{{ formatDuration(pkg.duration) }}</p>
        <p class="devices">{{ pkg.description }}</p>
        <p class="access">Unlimited Access</p>
        <button @click="goToCheckout(pkg)">Get Access</button>
      </div>
    </div>

    <!-- Statistics Section -->
    <div class="statistics-section">
      <div class="stat-item">
        <span class="stat-number">5000+</span>
        <div class="stat-text">
          <img src="@/assets/users.png" alt="Users Icon" class="icon" />
          <span>USERS</span>
        </div>
      </div>
      <div class="stat-item">
        <div class="stat-top">
          <span class="stat-number">200</span>
          <img src="@/assets/hotspot.png" alt="Hotspots Icon" class="icon" />
        </div>
        <span class="name">HOTSPOTS</span>
      </div>
      <div class="stat-item">
        <div class="stat-top">
          <span class="stat-number">10</span>
          <img src="@/assets/towns.png" alt="Towns Icon" class="icon" />
        </div>
        <span class="name">TOWNS</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      packages: [
        { name: "Kumi Net", duration: 2400, cost: 10, description: "1 Device" },
        { name: "Mbao Net", duration: 7200, cost: 20, description: "1 Device" },
        { name: "8-Hour Net", duration: 28800, cost: 50, description: "1 Device" },
        { name: "Weekly Net", duration: 604800, cost: 380, description: "2 Devices" },
        { name: "Monthly Net", duration: 2592000, cost: 1000, description: "2 Devices" },
        { name: "Family x3", duration: 2592000, cost: 1300, description: "3 Devices" },
        { name: "Family x4", duration: 2592000, cost: 1600, description: "4 Devices" },
        { name: "Family x5", duration: 2592000, cost: 1800, description: "5 Devices" },
        { name: "Family x6", duration: 2592000, cost: 2000, description: "6 Devices" },
        { name: "QTRLY Family x3", duration: 7776000, cost: 3500, description: "3 Devices" },
        { name: "QTRLY Family x4", duration: 7776000, cost: 4200, description: "4 Devices" },
        { name: "QTRLY Family x5", duration: 7776000, cost: 4800, description: "5 Devices" },
        { name: "QTRLY Family x6", duration: 7776000, cost: 5300, description: "6 Devices" },
      ],
      orangePackages: [
        "Mbao Net",
        "Monthly Net",
        "Family x5",
        "QTRLY Family x4",
        "QTRLY Family x6",
      ],
      images: [
        {
          text: "Enjoy Seamless Live Stream",
          src: "https://img.freepik.com/free-vector/it-s-movie-time-banner-template-pop-corn-basket-cola-cup-movie-sign-blue-curtain-background_575670-2199.jpg",
          alt: "Live Stream Image",
        },
        {
          text: "No Lag Just Wins",
          src: "https://img.freepik.com/free-photo/front-view-man-playing-video-game_23-2149546688.jpg",
          alt: "Gaming Image",
        },
        {
          text: "Reels snaps and vibes anywhere",
          src: "https://img.freepik.com/free-photo/hands-holding-smartphone-social-media-concept_23-2150208238.jpg",
          alt: "Reels snaps and vibes with no lag",
        },
      ],
      currentIndex: 0,
    };
  },
  methods: {
    isOrangePackage(name) {
      return this.orangePackages.includes(name);
    },
    formatDuration(seconds) {
      const days = Math.floor(seconds / 86400);
      const hours = Math.floor((seconds % 86400) / 3600);
      if (days > 0) return `${days} Day${days > 1 ? "s" : ""}`;
      if (hours > 0) return `${hours} Hour${hours > 1 ? "s" : ""}`;
      return `${seconds} Seconds`;
    },
    goToCheckout(pkg) {
      console.log("Navigating to checkout with:", pkg);
      sessionStorage.setItem("checkoutData", JSON.stringify(pkg));
      this.$router.push({ name: "checkout" });
    },
    onHover(index) {
      this.currentIndex = index;
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>


<style scoped>
.package-selection {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: -90px;
  padding: 30px 0;
  border-radius: 24px;
  gap: 20px;
}

.package-card {
  border-radius: 12px;
  background: #ffffff;
  padding: 20px;
  margin-top: 100px;
  width: 300px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  animation: swivelEffect 1s ease-in-out;
  opacity: 1;
}

.orange-theme .package-name,
.orange-theme button {
  color: orange;
}

.orange-theme button {
  background-color: #ffe0c1;
}

.orange-theme button:hover {
  background-color: orange;
  color: white;
}

.green-theme .package-name,
.green-theme button {
  color: green;
}

.green-theme button {
  background-color: #00800059;
}



.green-theme button:hover {
  background-color: green;
  color: white;
}

.package-name {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
}

.ksh {
  color: #213061;
  font-size: 28.5px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: -2px;
}

.pay{
  color: #213061;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: -2px;
}

.time {
  font-size: 16px;
  margin-bottom: 10px;
}

.devices {
  font-size: 16px;
  margin-bottom: 10px;
}

.access {
  font-size: 16px;
  margin-bottom: 20px;
}

button {
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
  border-radius: 12px;
  width: 100%;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.image-cards {
  display: flex;
  gap: 20px;
  justify-content: center;
  position: relative;
}

.image-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  width: 300px;
  height: 500px;
  text-align: center;
  background-color: #f4f4f4;
  transition: transform 0.5s ease, filter 0.5s ease, box-shadow 0.5s ease;
  transform: scale(0.9); /* Slightly smaller non-center images */
}

.image-card.center {
  
  transform: scale(1); /* Enlarge the center image */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2); /* Add shadow for center image */
  z-index: 2; /* Ensure it's above other cards */
}

.card-text {
  position: absolute;
  top: 10px;
  left: 10px;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.2rem;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 5px;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #243c75;
  color: white;
  padding: 15px;
  border-radius: 8px;
  margin:0 auto; 
  width: 100%;
  max-width: 600px;
  text-align: center;
  margin-top: 60px;
  
  
}

.info-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 30px;
}

.icon {
  width: 50px;
  height: 50px;
}

h2{
  text-align: center;
  margin-top: 95px;
  color:#FF901D;
  font-size: 40px;
  font-weight: bold;
}

.statistics-section {
  display: flex; /* Flexbox for horizontal alignment */
  justify-content: space-around; /* Space between items */
  align-items: center; /* Center items vertically */
  padding: 20px; /* Padding around the section */
  gap: 30px; /* Space between items */
}

.stat-item {
  display: flex; /* Flexbox for content alignment */
  flex-direction: column; /* Stack number and text vertically */
  align-items: center; /* Center items horizontally */
  text-align: center;
}

.stat-number {
  font-size: 40px; /* Large font for the number */
  font-weight: bold;
  color: #213061; /* Blue color */
}

.stat-text {
  display: flex; /* Flexbox for icon and text */
  align-items: center; /* Center icon and text vertically */
  gap: 10px; /* Space between icon and text */
  font-size: 40px; /* Text size */
  color: #213061; /* Blue color */
}

.icon {
  height: 30px; /* Icon size */
  width: auto;
}

.name{
  color: #213061;
  font-size: 40px;
}

@keyframes swivelEffect {
  0% {
    transform: rotateY(0deg);
    opacity: 0.5;
  }
  50% {
    transform: rotateY(90deg);
    opacity: 0.8;
  }
  100% {
    transform: rotateY(0deg);
    opacity: 1;
  }
}
</style>

