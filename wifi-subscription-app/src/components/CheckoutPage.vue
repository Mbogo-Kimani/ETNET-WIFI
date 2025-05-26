<template>
  <div class="pay">
    <div class="checkout-page animated">
      <img src="@/assets/mpesa.png" alt="Error" class="mpesa-icon" />
      <p>
        <span class="span1">Ksh {{ price }}</span> for {{ formattedDuration }}
      </p>
      <input
        type="text"
        id="phone"
        class="phone-input"
        placeholder="Enter phone number"
        maxlength="10"
        v-model="phoneNumber"
        @input="validatePhoneInput"
      />
      <p id="validation-message" :class="{ valid: isValid, invalid: !isValid }">
        {{ validationMessage }}
      </p>
      <button @click="payNow">Pay Now</button>

      <!-- ✅ Return Button -->
      <div class="return-btn-container">
        <ReturnButton />
      </div>
    </div>

    <!-- Loading Popup -->
    <div v-if="isProcessing" class="loading-popup">
      <div class="popup-content">
        <p>Processing Payment...</p>
      </div>
    </div>
  </div>
</template>

<script>
import ReturnButton from "@/components/ReturnButton.vue";

export default {
  components: {
    ReturnButton,
  },
  data() {
    return {
      phoneNumber: "",
      duration: 0,
      price: 0,
      validationMessage: "",
      isProcessing: false,
      isValid: false,
    };
  },
  computed: {
    formattedDuration() {
      const days = Math.floor(this.duration / 86400);
      const hours = Math.floor((this.duration % 86400) / 3600);
      const minutes = Math.floor((this.duration % 3600) / 60);

      if (days === 1 && hours === 0) return "24 Hours";
      if (days > 0) return `${days} Day${days > 1 ? "s" : ""}`;
      if (hours > 0) return `${hours} Hour${hours > 1 ? "s" : ""}`;
      if (minutes > 0) return `${minutes} Minute${minutes > 1 ? "s" : ""}`;
      return `${this.duration} Seconds`;
    },
  },
  created() {
    const checkoutData = sessionStorage.getItem("checkoutData");
    if (checkoutData) {
      const parsedData = JSON.parse(checkoutData);
      this.duration = parsedData.duration;
      this.price = parsedData.cost;
    } else {
      console.error("No checkout data found. Redirecting to packages page...");
      this.$router.replace({ path: "/" });
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    validatePhoneInput() {
      this.phoneNumber = this.phoneNumber.replace(/\D/g, "");
      this.isValid = this.phoneNumber.length === 10;
      this.validationMessage = this.isValid
        ? "Valid input"
        : "Please enter exactly 10 digits";
    },
    payNow() {
      if (!this.isValid) {
        this.validationMessage = "Enter a valid phone number before proceeding.";
        return;
      }

      this.isProcessing = true;

      setTimeout(() => {
        this.isProcessing = false;
        const paymentSuccessful = Math.random() > 0.5;
        const path = paymentSuccessful ? "/success" : "/error";
        this.$router.push({ path });
      }, 3000);
    },
  },
};
</script>




<style scoped>
.pay {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -200px;
  padding-top: 30px;
  padding-bottom: 50px;
  border-radius: 24px;
  width: auto;
  height: 100%;
}

.checkout-page {
  background-color: #ffffff80;
  text-align: center;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  border-radius: 30px;
  height: 400px;
  margin: auto;
  margin-top: 200px;
  animation: rotate-in 0.8s ease-out; /* Apply rotate-in animation */
}

@keyframes rotate-in {
  from {
    transform: rotateY(90deg);
    opacity: 0;
  }
  to {
    transform: rotateY(0deg);
    opacity: 1;
  }
}

input {
  padding-left: 10px;
  padding: 15px;
  color: #213061;
  border-style: double;
  border-color: #213061;
  background-color: transparent;
  width: 100%;
  max-width: 80%;
  margin-bottom: 23px;
  border-radius: 16px;
  height: 35px;
  margin-top: 50px;
}

.mpesa-icon {
  margin-bottom: -70px;
  width: 200px;
}

p {
  font-weight: 600;
  font-size: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 10px;
  color: #213061;
  margin-top: 30px;
}

.span1 {
  color: #213061;
}

button {
  background: #007bff;
  color: #fff;
  padding: 15px;
  width: 100%;
  max-width: 70%;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 16px;
  border-style: none;
  background-color: #00ff00;
  transition: 0.3s ease;
}

button:hover {
  background-color: #02cf02;
  cursor: pointer;
}

.loading-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
}

.popup-content {
  background: white;
  padding: 20px 40px;
  border-radius: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

#validation-message {
  font-size: 14px;
  margin-top: -15px;
  margin-bottom: 20px;
}

#validation-message.valid {
  color: green;
}

#validation-message.invalid {
  color: red;
}

.return-btn-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  
}
</style>
