<template>
    <div class="animated-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        class="w-12 h-12 animate-spin text-blue-500"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          stroke-width="10"
          stroke-dasharray="283"
          stroke-dashoffset="75"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    name: "AnimatedIcon",
  };
  </script>
  
  <style scoped>
  .animated-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  