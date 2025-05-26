<template>
  <div class="app">
    <header class="header">
     <div class="header-bg"></div> 
      <img src="@/assets/logo.png" alt="Logo" class="logo">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">

    </header>

    <router-view></router-view>

    <footer class="footer">
  <div class="footer-content">
    <!-- Contact Section -->
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

    <!-- Branding Section -->
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
    <p>
      &copy; 2024 ETNET All Rights Reserved 
      <a href="/privacy-policy" class="privacy-policy">Privacy Policy</a>
    </p>
  </div>
</footer>


    <!-- Cursor Elements -->
    <div class="cursor"></div>
    <div class="cursor-trail"></div>

    <!-- Background Effects -->
    <div class="background-effects">
      <!-- Pulsating background effect -->
      <div class="background-pulsating"></div>

      <!-- Particle Effects -->
      <div 
        class="particle" 
        v-for="n in 30" 
        :key="n" 
        :style="generateParticleStyles()"
      ></div>
    </div>

    <!-- WhatsApp CTA Button -->
    <a
      href="https://wa.me/254748449048"
      target="_blank"
      class="whatsapp-cta"
      aria-label="Contact us on WhatsApp"
    >
      <div class="cta-content">
        <img src="./assets/whatsapp-icon.png" alt="WhatsApp Icon" class="cta-img" />
        <span class="cta-text">How can we help you?</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // Particle styles will be generated dynamically
      particles: [],
    };
  },
  mounted() {
    const cursor = document.querySelector(".cursor");
    const cursorTrail = document.querySelector(".cursor-trail");
    const background = document.querySelector(".background-effects"); // Define the background variable

    if (!cursor || !cursorTrail || !background) return;

    // Cursor movement
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
      background.style.backgroundPosition = `${wavePosition}px ${wavePosition}px`;
    }, 30);
},
methods: {
    // Generate random styles for each particle
    generateParticleStyles() {
      const size = Math.random() * 15 + 10 + "px"; // Random size between 10px and 25px
      const left = Math.random() * 100 + "vw"; // Random horizontal position
      const top = Math.random() * 100 + "vh"; // Random vertical position
      const animationDuration = Math.random() * 10 + 5 + "s"; // Random animation speed
      const colors = ['#ffe0c1', '#FF901D', '#213061']; // Particle colors
      const color = colors[Math.floor(Math.random() * colors.length)]; // Randomly pick a color

      return {
        width: size,
        height: size,
        left: left,
        top: top,
        animationDuration: animationDuration,
        background: color, // Apply random color to each particle
      };
    },
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
  height: 90px;
  width: 100%;
}

.header-bg {
  background: #213061; /* This is likely the missing part */
}


.logo {
  width: 200px;
  z-index: 2;
}

/* Footer Styles */
.footer {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #000;
  text-align: center;
  padding: 40px 20px;
  border-top: 1px solid #ccc;
  margin-top: 30px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 20px;
}

.contact-section {
  flex: 1;
  min-width: 250px;
  text-align: center;
}

.contact-section h3 {
  color: #F8AA5A;
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 15px;
}

.social-icons img {
  width: 30px;
  height: 30px;
}

.contact-section p {
  margin: 5px 0;
  color: #213061;
  font-weight: bold;
  font-size: 14px;
}

.contact-section a {
  color: #213061;
  text-decoration: none;
  font-weight: bold;
}

.branding-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  min-width: 250px;
}

.branding-section .logo1 {
  height: 100px;
  margin-bottom: 10px;
}

.branding-text h3 {
  font-size: 1.5rem;
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
  margin-top: 20px;
  font-size: 0.9rem;
  color: #FF901D;
}

.footer-bottom a {
  color: #213061;
  text-decoration: underline;
  font-weight: bold;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }

  .contact-section {
    margin-bottom: 20px;
  }

  .contact-section h3 {
    font-size: 1.2rem;
  }

  .social-icons {
    justify-content: center;
  }

  .branding-section {
    margin-top: 20px;
  }

  .branding-section .logo1 {
    height: 80px;
  }

  .branding-text h3 {
    font-size: 1.2rem;
  }

  .footer-bottom {
    font-size: 0.8rem;
  }
}

.cursor-trail {
  width: 30px;
  height: 30px;
  background: radial-gradient(circle, rgba(255,144,29,0.3) 0%, rgba(255,144,29,0) 70%);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  animation: antenna-pulse 1.5s infinite;
}

  .contact-section h3 {
    font-size: 2rem;
  }

  .branding-section .logo1 {
    height: 120px;
  }

  .branding-text h3 {
    font-size: 2rem;
  }

 /* Background Effects */
.background-effects {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background-pulsating {
  position: fixed;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, #213061,  #ffe0c1,  #f5ae63);
  animation: pulsatingBackground 5s ease-in-out infinite;
}

@keyframes pulsatingBackground {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.particle {
  position: absolute;
  border-radius: 50%;
  animation: moveParticle 10s infinite;
}

@keyframes moveParticle {
  0% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100vw) translateY(100vh);
    opacity: 0;
  }
}


/* WhatsApp CTA Button */
.whatsapp-cta {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25D366;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 50px;
  padding: 10px 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.whatsapp-cta:hover {
  transform: scale(1.1);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
}

.cta-content {
  display: flex;
  align-items: center;
}

.cta-img {
  width: 24px;
  height: 24px;
}

.cta-text {
  font-size: 16px;
  font-weight: bold;
}
</style>
