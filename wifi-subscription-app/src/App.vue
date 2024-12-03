<template>
  <div class="app">
    <header class="header">
      <div class="header-bg"></div>
      <img src="@/assets/logo.png" alt="Logo" class="logo">
    </header>

    <router-view></router-view>

    <footer class="footer">
      <div class="footer-content">
        <!-- Left Section -->
        <div class="contact-section">
          <h3>Get in Touch with Us</h3>
          <div class="social-icons">
            <a href="#"><img src="./assets/titkok.png" alt="TikTok"></a>
            <a href="#"><img src="./assets/x.png" alt="X"></a>
            <a href="#"><img src="./assets/instagram.png" alt="Instagram"></a>
            <a href="#"><img src="./assets/facebook.png" alt="Facebook"></a>
          </div>
          <p>Email: <a href="mailto:sales@etnet.co.ke">sales@etnet.co.ke</a></p>
          <p>Phone: 0791012345</p>
          <p><a href="https://www.etnet.co.ke">www.etnet.co.ke</a></p>
        </div>

        <!-- Right Section -->
        <div class="branding-section">
          <img src="./assets/elephant.png" alt="Elephant Logo" class="logo1">
          <div class="branding-text">
            <h3>Elephant</h3>
            <p>Technologies Limited</p>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p>&copy; 2024 ETNET All Rights Reserved</p>
      </div>
    </footer>

    <!-- Cursor Elements -->
    <div class="cursor"></div>
    <div class="cursor-trail"></div>

    <!-- Background Effects -->
    <div class="background-effects"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    const cursor = document.querySelector(".cursor");
    const cursorTrail = document.querySelector(".cursor-trail");
    const background = document.querySelector(".background-effects");

    if (!cursor || !cursorTrail || !background) return;

    // Cursor movement and trail effect
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
      cursorTrail.style.transform = `translate(${clientX}px, ${clientY}px)`;
    });

    document.addEventListener("mousedown", () => {
      cursor.classList.add("click");
    });

    document.addEventListener("mouseup", () => {
      cursor.classList.remove("click");
    });

    // Dynamic pulsating background effect
    let wavePosition = 0;
    setInterval(() => {
      wavePosition += 0.5;
      background.style.backgroundPosition = `${wavePosition}px ${wavePosition}px`;
    }, 30);
  },
};
</script>

<style scoped>
/* Header Styles */
.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: -50px;
  margin-top: -80px;
  padding: 20px;
}

.header-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background-color: #213061;
  z-index: 1;
}

.logo {
  width: 200px;
  margin-right: 10px;
}

/* Footer Styles */
.footer {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #000;
  text-align: center;
  padding: 40px 20px;
  border-top: 1px solid #ccc;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.contact-section h3 {
  color: #F8AA5A;
  margin-bottom: 10px;
  font-size: 40px;
  margin-left: 80px;
  margin-top: -20px;
  width: 100%;
}

.social-icons {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  width: 100%;
  margin-left: 180px;
}

.social-icons img {
  width: 55px;
  height: 55px;
  width: 100%;
}

.contact-section p {
  margin: 10px 0;
  margin-left: 70px;
  color: #213061;
  font-weight: bold;
  font-size: 20px;
  width: 100%;
}

.contact-section a {
  color: #213061;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
}

.branding-section {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 50%;
  margin-top: 80px;
  margin-right: -25%;
}

.branding-section .logo1 {
  height: auto;
  width: 50%;
  margin-right: -69%;
}

.branding-text h3 {
  font-size: 3rem;
  color: #213061;
  margin: 0;
}

.branding-text p {
  margin: 0;
  font-size: 1rem;
  color: #213061;
  font-weight: 500;
}

.footer-bottom {
  margin-top: -25px;
  font-size: 1rem;
  font-weight: bold;
  color: #FF901D;
  margin-bottom: -50px;
}

/* Cursor Effects */
.cursor {
  width: 15px;
  height: 15px;
  background-color: #FF901D;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease-in-out;
}

.cursor-trail {
  width: 30px;
  height: 30px;
  background: radial-gradient(circle, rgba(255,144,29,0.3) 0%, rgba(255,144,29,0) 70%);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  transition: transform 0.15s ease-in-out;
}

.cursor.click {
  transform: scale(1.5);
}

/* Background Effects */
.background-effects {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #213061, #ffcf9d, #ffe0c1, #ccc);
  background-size: 400% 400%;
  z-index: -1;
  animation: pulsate 6s ease infinite;
}

@keyframes pulsate {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
