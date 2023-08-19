<template>
  <div>Welcome to the homepage</div>
  <div class="card" @click="changePage('buildings')">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
          <g data-name="home">
            <rect width="24" height="24" opacity="0" />
            <rect x="10" y="14" width="4" height="7" />
            <path
              d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2H8v-9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h3.11A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44z"
            />
          </g>
        </g>
      </svg>
      <h2>Buildings</h2>
    </div>
  </div>
  <div class="card" @click="changePage('calendar')">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g data-name="Layer 2">
          <g data-name="calendar">
            <rect width="24" height="24" opacity="0" />
            <path
              d="M18 4h-1V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zM8 17a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm8 0h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm3-6H5V7a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h1a1 1 0 0 1 1 1z"
            />
          </g>
        </g>
      </svg>
      <h2>Calendar</h2>
    </div>
  </div>
</template>
<script>
//import HomeIcon from '../assets/home.svg';
export default {
  name: "HomePage",
  components: {
    //HomeIcon
  },
  methods: {
    changePage(path) {
      this.$router.push("/" + path);
    },
  },
};
</script>
<style>
.card {
  height: 256px;
  width: 256px;
  background-color: #519872;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
}
.card * {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center;
  color: #34252f;
}
.card * * {
  margin: 4px !important;
}
svg {
  width: 64px;
  height: 64px;
  fill: #34252f;
}
</style>
