<template>
  <div class="message">
    <!-- Loading Page -->
    <div v-if="loading" class="loading-page">
      <div class="spinner"></div>
      <p class="loading-text">Processing your payment...</p>
    </div>

    <!-- Success Page -->
    <template v-else-if="paymentSuccess">
      <SuccessPage />
    </template>

    <!-- Error Page -->
    <template v-else-if="paymentError">
      <ErrorPage />
    </template>
  </div>
</template>

<script>
import SuccessPage from "@/components/SubscriptionSuccess.vue";
import ErrorPage from "@/components/SubscriptionError.vue";

export default {
  components: {
    SuccessPage,
    ErrorPage,
  },
  data() {
    return {
      loading: true,
      paymentSuccess: false,
      paymentError: false,
    };
  },
  methods: {
    async listenForPayment() {
      try {
        // Replace with your actual payment status endpoint
        const response = await fetch("http://localhost:3000/api/check_payment_status", {
          method: "GET", // Or POST if necessary
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch payment status");
        }

        const data = await response.json();

        // Example response handling
        // Assuming the response has a field `status` that is either "success" or "failure"
        this.loading = false;
        if (data.status === "success") {
          this.paymentSuccess = true;
        } else {
          this.paymentError = true;
        }
      } catch (error) {
        console.error("Error checking payment status:", error);
        this.loading = false;
        this.paymentError = true; // Default to error on any issues
      }
    },
  },
  mounted() {
    this.listenForPayment(); // Check payment status on mount
  },
};
</script>

<style scoped>
.message {
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -20px;
  padding-top: 20px;
  padding-bottom: 70px;
  border-radius: 24px;
  width: 100%;
  height: 80%;
}

.loading-page {
  border-radius: 12px;
  color: #202b61;
  padding: 15px;
  padding-top: 60px;
  text-align: center;
  width: 100%;
  max-width: 800px;
  margin-top: 40px;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 50px;
  height: 50px;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 5s linear infinite;
  margin-left: 45%;
}

p {
  font-weight: 800;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
