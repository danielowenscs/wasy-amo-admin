<template>
  <button @click="changePage('')">Go Home</button>
  <div>Calendar</div>
  <div class="calendar">
    <div v-for="day in calendar" :key="day" class="calendar">
      {{ day }}
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Calendar",
  data() {
    return {
      currentYear: "",
      currentMonth: "",
      currentDay: "",
      startDay: "",
      calendar: [],
    };
  },
  methods: {
    changePage(path) {
      this.$router.push("/" + path);
    },
    drawCalendar() {
      const currentDate = new Date();
      this.currentYear = currentDate.getFullYear();
      this.currentMonth = currentDate.getMonth();
      this.startDay = new Date(this.currentYear, this.currentMonth, 1).getDay();

      const prevMonthLastDay = new Date(
        this.currentYear,
        this.currentMonth,
        0
      ).getDate();
      const currentMonthLastDay = new Date(
        this.currentYear,
        this.currentMonth + 1,
        0
      ).getDate();

      this.calendar = []; // Initialize the calendar array

      // Populate days before the current month
      for (let i = this.startDay - 1; i >= 0; i--) {
        this.calendar.push(prevMonthLastDay - i);
      }

      // Populate days of the current month
      for (let j = 1; j <= currentMonthLastDay; j++) {
        this.calendar.push(j);
      }

      // Populate days after the current month
      let nextMonthDay = 1;
      while (this.calendar.length < 35) {
        this.calendar.push(nextMonthDay);
        nextMonthDay++;
      }
    },
  },
  mounted() {
    this.drawCalendar();
  },
};
</script>
<style>
.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr) !important;
  gap: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.calendar-container * {
  border: 1px solid #611010;
  padding: 10px;
  text-align: center;
}
</style>
