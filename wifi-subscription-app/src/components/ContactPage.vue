<template>
    <div class="contact-page">
      <header class="contact-header">
        <h1>Contact Us</h1>
      </header>
      <div class="contact-container">
        <div class="map-section">
          <iframe
            src="https://www.google.com/maps/dir//Wood-Avenue+off+Lenana+road/@-1.2899266,36.7033165,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x182f1136b65425b9:0xfb76365e998d2eb1!2m2!1d36.7857185!2d-1.2899279?entry=ttu&g_ep=EgoyMDI0MTIwMS4xIKXMDSoASAFQAw%3D%3D"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <div class="form-card">
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
              <input
                type="text"
                id="firstName"
                v-model="formData.firstName"
                placeholder="First Name"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                id="lastName"
                v-model="formData.lastName"
                placeholder="Last Name"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                id="email"
                v-model="formData.email"
                placeholder="Email"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="tel"
                id="phone"
                v-model="formData.phone"
                placeholder="Phone"
                required
              />
            </div>
            <div class="form-group">
              <textarea
                id="message"
                v-model="formData.message"
                placeholder="Message"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" class="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </template>
<script>
export default {
  name: "ContactPage",
  data() {
    return {
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Simulate sending data to backend
      console.log("Form submitted:", this.formData);
      alert("Your message has been sent successfully!");
      this.formData = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      };
    },
  },
};
</script>
<style scoped>
.contact-page {
  padding: 20px;
}

.contact-header h1 {
  text-align: center;
  color: #243c75;
  margin-bottom: 20px;
  margin-top:-130px;
}

.contact-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}

.map-section {
  flex: 1;
  max-width: 400px; /* Match the card form width */
  height: 561px; /* Set to match form-card height */
  margin-left: 300px;
}

.map-section iframe {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border: 0;
  aspect-ratio: 1; /* Ensures square dimensions */
}

.form-card {
  flex: 1;
  width: 100%;
  max-width: 400px; /* Fixed width to match map-section */
  background: #FFFFFF80;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 30px;
  height: 500px; /* Maintain aspect ratio and match map-section */
  margin-right: 300px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 20px;
  border: 1px  #FFFFFF80;
  border-radius: 8px;
  font-size: 16px;
  margin-left:-20px;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #243c75;
  outline: none;
}

.submit-btn {
  background-color:#FFC992;
  color: #243c75;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #FFAF41;
  color:#ffffff;
}
</style>
