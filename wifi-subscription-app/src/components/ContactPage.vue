<template>
  <div class="contact-page">
    <header class="contact-header">
      <h1>Contact Us</h1>
    </header>
   
    <div class="contact-container">
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
      <div class="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d63821.06843002517!2d36.75567464485618!3d-1.2838227182003692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x182f1136b65425b9%3A0xfb76365e998d2eb1!2sGOLDPARK%20HOMES%2C%20Wood-Avenue%20off%20Lenana%20road!3m2!1d-1.2899279!2d36.7857185!5e0!3m2!1sen!2ske!4v1733397281996!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style="border:0; border-radius: 12px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
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
/* Base Styles */
.contact-page {
  padding: 20px;

}

.contact-header h1 {
  text-align: center;
  color: #243c75;
  margin-bottom: 20px;
  margin-top:-40px;
}

.contact-container {
  display: flex;
  justify-content: space-between; /* Align form and map horizontally */
  gap: 20px;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
}

.map-section {
  flex: 1;
  max-width: 500px; /* Increased width */
  height: 697px;
  margin: 0 auto;
}

.map-section iframe {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border: 0;
}

.form-card {
  flex: 1;
  max-width: 90%; /* Nearly full width */
  background: #ffffff80;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.contact-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
}

.form-group input,
.form-group textarea {
  width: 100%; /* Ensure inputs fill the container */
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box; /* Prevent overflow issues */
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #243c75;
  outline: none;
}

.submit-btn {
  background-color: #ffc992;
  color: #243c75;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #ffaf41;
  color: #ffffff;
}

/* Medium Screens (Tablets) */
@media (max-width: 1024px) {
  .contact-container {
    flex-direction: column;
    align-items: center;
  }

  .map-section {
    max-width: 600px;
    height: 400px;
    margin: 0 auto;
  }

  .form-card {
    max-width: 95%; /* Increased width on tablets */
    padding: 30px;
  }
}

/* Small Screens (Phones) */
@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    align-items: center;
  }

  .map-section {
    display: none; /* Hide map on small screens */
  }

  .form-card {
    max-width: 100%; /* Form spans the full width */
    padding: 25px;
    margin: 0 10px;
  }

  .contact-header h1 {
    font-size: 1.8rem;
  }

  .form-group input,
  .form-group textarea {
    padding: 12px;
    font-size: 14px;
  }

  .submit-btn {
    font-size: 14px;
    padding: 12px;
  }
}

/* Extra Small Screens (Very Small Phones) */
@media (max-width: 480px) {
  .contact-header h1 {
    font-size: 1.5rem;
  }

  .form-card {
    max-width: 100%;
    padding: 20px;
  }

  .form-group input,
  .form-group textarea {
    font-size: 14px;
    padding: 10px;
  }

  .submit-btn {
    font-size: 14px;
    padding: 10px;
  }
}

/* Large Screens (Desktops) */
@media (min-width: 1200px) {
  .form-card {
    max-width: 800px; /* Maintain centered layout for large screens */
    padding: 50px;
  }

  .map-section {
    max-width: 600px;
  }

  .form-group input,
  .form-group textarea {
    font-size: 18px;
    padding: 16px;
  }

  .submit-btn {
    font-size: 18px;
    padding: 14px;
  }
}
</style>









