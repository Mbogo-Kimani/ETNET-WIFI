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
    <p>&copy; 2024 ETNET All Rights Reserved <a href="#">Privacy Policy</a></p>
  </div>
</footer>

  </div>
</template>




<script>
export default {
  name: 'App'
};
</script>

<style scoped>

.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: -50px; /* Total height of the header */
  margin-top:-80px;
  padding:20px;
}

.header-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px; /* Height of the blue background */
  background-color:#213061; /* Blue background color */
  z-index: 1;
}
.logo {
  
  width: 200px;
  margin-right: 10px;
  top: 0%;
}



/* General Footer Styling */
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

/* Contact Section */
.contact-section h3 {
  color: #F8AA5A;
  margin-bottom: 10px;
}

.social-icons {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.social-icons img {
  width: 25px;
  height: 25px;
}

.contact-section p {
  margin: 5px 0;
}

.contact-section a {
  color: #213061;
  text-decoration: none;
}

/* Branding Section */
.branding-section {
  display: flex;
  align-items: center;
  gap: 20px;
}

.branding-section .logo {
  height: 80px;
  width: auto;
}

.branding-text h3 {
  font-size: 1.5rem;
  color: #213061;
  margin: 0;
}

.branding-text p {
  margin: 0;
  font-size: 1rem;
  color: #666;
}

/* Footer Bottom */
.footer-bottom {
  margin-top: 20px;
  font-size: 0.85rem;
}

.footer-bottom a {
  color: #213061;
  text-decoration: none;
}

.p1{
  text-align:left;
  font-size: 25px;
  font-weight: 700;
  color:#FFAF41;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

p{
  text-align:left;
  font-size: 18px;
  font-weight: 700;
  color:#202b61;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.p4{
  text-align: center;
  font-weight: 500;
  margin-bottom: -600px;
}

.contacts{
  margin: 0 auto;
  padding: 15px;
  width: 50%;
  
  border-radius: 12px;
  color: #202b61;
  background-color: #fff;
}

.cont{
  font-size: 20px;
  font-weight: 700;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* Container for the branding section */
.branding {
  display: flex; /* Align text and image horizontally */
  align-items: center; /* Vertically center items */
  gap: 20px; /* Space between text and image */
  font-family: Arial, sans-serif; /* Adjust font for a clean look */
}

/* Style for the text */
.text {
  text-align: left;
}

.title {
  font-size: 2rem; /* Size for "Elephant" */
  font-weight: bold; /* Make it bold */
  margin: 0; /* Remove default margins */
  color: #213061; /* Text color */
}

.subtitle {
  font-size: 1rem; /* Size for "Technologies Limited" */
  margin: 0; /* Remove default margins */
  color: #666; /* Subtle gray color */
}

/* Style for the logo */
.logo1 {
  height: 80px; /* Adjust size of the image */
  width: auto; /* Maintain aspect ratio */
}


</style>
