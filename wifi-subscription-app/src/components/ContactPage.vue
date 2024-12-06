<template>
  <div class="contact-page">
    <header class="contact-header">
      <!-- Optional header content can be added here -->
    </header>
   
    <div class="contact-container">
      <!-- Form Section -->
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

      <!-- Map Section -->
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
  mounted() {
    // Ensure the page scrolls to the top when the checkout page is loaded
    window.scrollTo(0, 0);
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

.contact-container {
  width: 100%;
  max-width: 900px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

/* Map Section */
.map-section {
  flex: 1;
  max-width: 500px; 
  height: 490px;
  margin: 0 auto;
  margin-bottom: 8px;
}

.map-section iframe {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border: 0;
}

/* Form Section */
.form-card {
  width: 50%;
  height: 500px;
  background: #ffffff80;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
}

.contact-form {
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
  margin-top: 19px;
  height: 100%;
  max-height: 1000px;
}

/* Form Inputs */
.form-group input{
  width: 100%;
  max-width: 500px;
  height: 10px;
  padding: 18px; /* Increased padding */
  font-size: 16px; /* Larger font size */
  border: 2px solid #ffffff;
  border-radius: 8px;
  background-color: transparent;
}

.form-group textarea {
  width: 100%;
  max-width: 500px;
  height: 30px;
  padding: 18px; /* Increased padding */
  font-size: 16px; /* Larger font size */
  border: 2px solid #ffffff;
  border-radius: 8px;
  background-color: transparent;
}


.form-group input:focus,
.form-group textarea:focus {
  border-color: #243c75;
  outline: none;
}

input::placeholder {
  font-size: 14px; /* Adjusted placeholder font size */
  color: #252525;
}

/* Submit Button */
.submit-btn {
  background-color: #ffc992;
  color: #243c75;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px; /* Larger button text */
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  max-width: 50%;
  margin-top: 60px;
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
    padding: 10px;
  }

  .map-section {
    max-width: 400px;
    height: 400px;
    margin: 20px 0;
  }

  .form-card {
    width: 100%;
    padding: 30px;
    max-width: 800px;
    margin: 20px auto;
  }

  .contact-form {
    width: 100%;
    padding: 15px;
    gap: 10px;
   
  }

  .form-group input,
  .form-group textarea {
    font-size: 16px; /* Larger font size for inputs */
    padding: 18px; /* Increased padding */
    width: 100%;
    max-width: 400px;
  }

  .submit-btn {
    font-size: 18px;
    padding: 15px;
    width: 100%;
    max-width: 60%;
    
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
    width: 100%;
    max-width:90%;
    padding: 20px;
    margin: 0 auto;
  }

  .contact-form {
    width: 100%;
    padding: 20px;
    gap: 20px;
    margin-bottom: -90px;
    align-items: center;
  }

  .form-group input,
  .form-group textarea {
    font-size: 16px; /* Larger font size for inputs */
    padding: 10px; /* Increased padding */
    width: 100%;
    max-width: 250px;

  }


  .submit-btn {
    font-size: 18px;
    padding: 14px;
    margin-top: 40px;
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
    padding: 12px;
  }

  .submit-btn {
    font-size: 16px;
    padding: 10px;
  }

  .contact-form {
    padding: 15px;
    width: 100%;
  }
}

/* Large Screens (Desktops) */
@media (min-width: 1200px) {
  .form-card {
    max-width: 800px;
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
