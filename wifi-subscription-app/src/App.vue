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
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    const cursor = document.querySelector('.cursor');
    const cursorTrail = document.querySelector('.cursor-trail');

    if (!cursor || !cursorTrail) return;

    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event;

      // Update cursor position
      cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
      cursorTrail.style.transform = `translate(${clientX}px, ${clientY}px)`;
    });

    document.addEventListener('mousedown', () => {
      cursor.classList.add('click');
    });

    document.addEventListener('mouseup', () => {
      cursor.classList.remove('click');
    });
  },
};
</script>

<style scoped>
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
  top: 0%;
}

.footer {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #fff;
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

/* Responsive Styles */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .contact-section {
    text-align: center;
    margin-left: 0;
  }

  .contact-section h3 {
    margin-left: 0;
    margin-top: 0;
  }

  .social-icons {
    justify-content: center;
    margin-left: 100px;
    
  }

  .branding-section {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-right: 0;
  }

  .branding-section .logo1 {
    margin-right: 0;
    width: 80%;
  }

  .branding-text h3 {
    font-size: 2rem;
  }
}

@media (min-width: 1200px) {
  .footer-content {
    gap: 80px;
  }

  .contact-section h3 {
    font-size: 50px;
  }

  .branding-section .logo1 {
    width: 40%;
  }

  .branding-text h3 {
    font-size: 3.5rem;
  }
}
</style>
