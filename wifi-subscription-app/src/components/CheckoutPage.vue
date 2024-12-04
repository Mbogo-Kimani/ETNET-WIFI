<template>
  <div class="pay">
    <div class="checkout-page">
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
      <p id="validation-message">{{ validationMessage }}</p>
      <button @click="payNow">Pay Now</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: "",
      duration: 0, // Store raw duration in seconds
      price: 0,
      validationMessage: "",
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
      this.price = parsedData.cost; // Adjust based on the property in `pkg`
    } else {
      console.error("No checkout data found. Redirecting to packages page...");
      this.$router.replace({ path: "/" });
    }
  },
  methods: {
    validatePhoneInput() {
      this.phoneNumber = this.phoneNumber.replace(/\D/g, "");
      this.validationMessage =
        this.phoneNumber.length === 10
          ? "Valid input"
          : "Please enter exactly 10 digits";
    },
    payNow() {
      if (this.phoneNumber.length !== 10) {
        this.validationMessage = "Enter a valid phone number before proceeding.";
        return;
      }

      // Navigate to success page after validation
      this.$router.push({ path: "/success" });
      this.$router.push({ path: "/success" });
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
  background-color:#FFFFFF80;
  text-align: center;
  width: 500px;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border-radius: 30px;
  height: 400px;
  margin: 50px;
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
  margin-top: 50px
}

.mpesa-icon {
  margin-bottom: -70px;
  width: 200px;

}

p {
  font-weight: 600;
  font-size: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-bottom: 10px;
  color:#213061;
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
  margin-top:30px;
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

::placeholder {
  color:#213061;
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

span {
  color: #00ff00;
}
</style>
