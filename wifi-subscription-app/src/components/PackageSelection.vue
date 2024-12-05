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
    <div class="card-text glow">{{ image.text }}</div>
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
body {
  overflow-x: hidden; /* Prevent horizontal overflow */
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.container {
  padding: 20px;
}



.info-bar {
  display: flex;
  flex-wrap: wrap; /* Wrap items for smaller screens */
  justify-content: space-around;
  align-items: center;
  background-color: #243c75;
  color: white;
  padding: 15px;
  border-radius: 8px;
  margin: 20px auto; /* Centered */
  max-width: 600px;
  text-align: center;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  text-align: center;
}

.icon {
  width: 50px;
  height: 50px;
}

h2 {
  text-align: center;
  margin-top: 30px;
  color: #FF901D;
  font-size: 32px;
  font-weight: bold;
}

.package-selection {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
}

.package-card {
  border-radius: 12px;
  background: #ffffff;
  padding: 20px;
  width: 100%;
  max-width: 300px;
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

.pay {
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

/* Image Cards Layout */ 
.image-cards {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  overflow: hidden; /* Prevent horizontal overflow */
  position: relative; /* For small screen animations */
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

/* Styling for Card Text */
.card-text {
  position: absolute;
  top: 8%;
  left: 10%; /* Center horizontally */
  transform: translateX(-50%); /* Center text horizontally */
  color: #ffffff;
  font-weight: bold;
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  padding: 10px 20px;
  border-radius: 10px;
  opacity: 0;
  transform: translateY(20px); /* Slide-in effect */
  transition: opacity 0.5s ease, transform 0.5s ease;
}

/* Glow Effect */
@keyframes glowingEffect {
  0% {
    text-shadow: 0 0 5px #ff6f61, 0 0 10px #ff6f61, 0 0 15px #ff6f61;
  }
  50% {
    text-shadow: 0 0 10px #ff4500, 0 0 20px #ff4500, 0 0 30px #ff4500;
  }
  100% {
    text-shadow: 0 0 5px #ff6f61, 0 0 10px #ff6f61, 0 0 15px #ff6f61;
  }
}

/* Apply Glow Effect to Text */
.card-text.glow {
  animation: glowingEffect 2s infinite;
}

/* Gradient Text Effect */
.card-text.gradient {
  background: linear-gradient(90deg, #ff7f50, #ff4500);
  -webkit-background-clip: text;  /* Vendor prefix for Safari */
  background-clip: text;  /* Standard property */
  -webkit-text-fill-color: transparent; /* Only needed for WebKit-based browsers */
}

/* Hover Effect to Show Text (Only on Large Screens) */
.image-card:hover .card-text {
  opacity: 1;
  transform: translateY(0); /* Text slides into position */
}

/* Card Image Styling */
.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* New Styles for Small Screens */
@media (max-width: 768px) {
  .image-cards {
    display: flex;
    flex-direction: column; /* Stack cards vertically */
    align-items: center; /* Center align cards */
    height: 500px; /* Set a fixed height for the focus area */
    overflow: hidden; /* Hide cards outside focus */
  }

  .image-card {
    position: absolute; /* Stack cards */
    width: 100%; /* Take full width */
    height: 100%; /* Take full height */
    opacity: 0; /* Hide non-focused cards */
    transform: scale(0.8); /* Reduce size of non-focused cards */
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .image-card.center {
    opacity: 1; /* Show focused card */
    transform: scale(1); /* Full size for the focused card */
    z-index: 2;
  }

  /* Display text automatically on small screens */
  .card-text {
    opacity: 1; /* Show the text */
    transform: translateY(0); /* Text slides into position */
  }
}



.info-bar {

  display: flex;
  flex-wrap: wrap; /* Wrap for smaller screens */
  justify-content: center; /* Center items */
  gap: 20px;
  padding: 20px;
}

.statistics-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 80px;
  padding: 20px 0;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 150px; /* Adjust width for consistency */
  padding: 15px;
  border: 1px solid #ff7f50; /* Outline */
  border-radius: 8px;
  
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Individual box shadow */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Hover animation */
}

.stat-item:hover {
  transform: translateY(-5px); /* Lift on hover */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
}

.stat-number {
  font-size: 40px;
  font-weight: bold;
  color: #213061;
  margin-bottom: 5px;
}



.stat-text {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #213061;
}

.name {
  color: #213061;
  font-size: 16px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .statistics-section {
    flex-direction: column; /* Stack items vertically */
    align-items: center;
  }

  .stat-item {
    width: 100%; /* Full width on smaller screens */
    max-width: 300px; /* Limit maximum width */
  }
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

/* Responsive Design */
@media (max-width: 768px) {
  .image-card {
    aspect-ratio: auto; /* Let height adjust to content */
  }

  .package-card {
    margin: 10px auto; /* Adjust margins for smaller screens */
  }

  .info-bar {
    flex-direction: column; /* Stack items vertically */
    text-align: center;
  }

  .info-item {
    font-size: 16px; /* Smaller font for smaller screens */
  }

  h2 {
    font-size: 28px;
  }

  .stat-item {
    max-width: 150px; /* Reduce size for smaller screens */
  }
}
</style>
