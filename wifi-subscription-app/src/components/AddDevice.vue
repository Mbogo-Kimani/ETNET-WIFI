<template>
    <div class="container">
      <!-- Header -->
      <h1 class="title">Add and Change Device</h1>
  
      <!-- Select Package -->
      <div class="package-section">
        <h2 class="section-title">Select Package:</h2>
        <div class="package-info">
          <label class="flex items-center">
            <!-- Custom Radio Button Toggle -->
            <input
              type="radio"
              name="package"
              value="Family Net x3"
              :checked="selectedPackage === 'Family Net x3'"
              @click="togglePackage('Family Net x3')"
              class="radio-input"
            />
            <span class="package-name ml-2">Family Net x3</span>
          </label>
          <span class="expiry-date">Exp: 30/12/2024, 3:47 pm</span>
        </div>
      </div>
  
      <!-- Active Devices -->
      <div class="active-devices">
        <h2 class="section-title">Active Devices:</h2>
        <div class="device-item" v-for="(device, index) in devices" :key="index">
          <span class="device-name">{{ device.name }}</span>
          <div class="device-actions">
            <button
              class="delete-btn"
              @click="handleAction('remove', device.name)"
            >
              🗑️
            </button>
            <button
              class="change-btn"
              @click="handleAction('change', device.name)"
            >
              Change
            </button>
          </div>
        </div>
      </div>
  
      <!-- Add New Device -->
      <div class="new-device">
        <h2 class="section-title">New Device:</h2>
        <input
          v-model="newDeviceMac"
          type="text"
          placeholder="MAC ADDRESS"
          class="mac-input"
        />
      </div>
  
      <!-- Add Device Button -->
      <button class="add-btn" @click="handleAction('add')">Add Device</button>

      <!-- Buttons Section -->
<div class="button-group">
  <ReturnButton />
  <HomeButton />
</div>

    </div>
  </template>
  
  <script>
  import ReturnButton from "@/components/ReturnButton.vue";
import HomeButton from "@/components/HomeButton.vue";

  export default {
    name: "AddDevicePage",
    components: {
    ReturnButton,
    HomeButton,
  },
    data() {
      return {
        selectedPackage: "", // Holds the selected package
        devices: [
          { name: "Huawei y7a" },
          { name: "Samsung" },
        ],
        newDeviceMac: "", // For inputting a new MAC address
      };
    },
    methods: {
      // Toggle package selection (radio button select/deselect)
      togglePackage(packageName) {
        if (this.selectedPackage === packageName) {
          this.selectedPackage = ""; // Deselect if already selected
        } else {
          this.selectedPackage = packageName; // Select the package
        }
      },
  
      // Generic action handler
      handleAction(action, deviceName = "") {
        if (!this.selectedPackage) {
          alert("Please select a package before proceeding.");
          return;
        }
  
        switch (action) {
          case "remove":
            this.removeDevice(deviceName);
            break;
          case "change":
            this.changeDevice(deviceName);
            break;
          case "add":
            this.addDevice();
            break;
        }
      },
  
      // Remove a device
      removeDevice(deviceName) {
        this.devices = this.devices.filter((device) => device.name !== deviceName);
        alert(`Device '${deviceName}' has been removed.`);
      },
  
      // Change a device
      changeDevice(deviceName) {
        alert(`Changing device: ${deviceName}`);
      },
  
      // Add a new device
      addDevice() {
        if (this.newDeviceMac.trim() === "") {
          alert("Please enter a valid MAC address.");
          return;
        }
        this.devices.push({ name: this.newDeviceMac });
        this.newDeviceMac = ""; // Clear input field
        alert("New device added successfully!");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Container styling */
  .container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #FFFFFF80;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    margin-bottom: 50px;
  }
  
  /* Title */
  .title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    color: #000;
  }
  
  /* Section Titles */
  .section-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }
  
  /* Package Section */
  .package-section {
    margin-bottom: 20px;
  }
  
  .package-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #555;
  }
  
  .radio-input {
    appearance: none;
    width: 16px;
    height: 16px;
    border: 3px solid #ccc;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  
  .radio-input:checked {
    background-color: #0077ff;
    border: 3px solid #ccc;
  }
  
  .package-name {
    font-weight: bold;
    color: #0077ff;
  }
  
  .expiry-date {
    color: #888;
  }
  
  /* Active Devices */
  .active-devices {
    margin-bottom: 20px;
  }
  
  .device-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
  }
  
  .device-name {
    font-weight: bold;
    color: #213061;
  }
  
  .device-actions {
    display: flex;
    gap: 10px;
  }
  
  .delete-btn {
    background-color: transparent;
    color: red;
    font-size: 18px;
    cursor: pointer;
    border: none;
    outline: none;
  }
  
  .change-btn {
    background-color: #5D678A;
    color: #eb7e03;
    border: none;
    padding: 5px 10px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
  }
  
  .change-btn:hover {
    background-color: #213061;
    color: #fff;
  }
  
  /* New Device */
  .new-device {
    margin-bottom: 20px;
  }
  
  .mac-input {
    width: 100%;
    max-width: 375px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    text-align: center;
    font-size: 14px;
    outline: none;
    transition: border 0.3s;
    cursor: pointer;
  }
  
  .mac-input:focus {
    border-color: #0077ff;
  }
  
  /* Add Device Button */
  .add-btn {
    display: block;
    width: 100%;
    background-color: #FFE0C1;
    color: #5D678A;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }
  
  .add-btn:hover {
    background-color: #eb7e03;
    color: #fff;
  }

  .button-group {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

  </style>
  