<template>
  <div>
    <h2>Create a New Building</h2>
    <form @submit.prevent="submitForm">
      <label for="buildingName">Building Name</label>
      <input id ="buildingName" v-model = "buildingName" type="text" required/>
      <label for="address">Building Address</label>
      <input id="address" v-model="buildingAddress" type="text" required />

      <h3>Contact Information</h3>
      <label for="email">Email</label>
      <input id="email" v-model="email" type="email" required />

      <label for="phone">Phone</label>
      <input id="phone" v-model="phone" type="tel" required />

      <h3>Contract Details</h3>
      <label for="contractLink">Contract Link</label>
      <input id="contractLink" v-model="contractLink" type="url" />

      <label for="contractStartDate">Contract Start Date</label>
      <input id="contractStartDate" v-model="contractStartDate" type="date" />

      <h3>Building Accessibility After</h3>
      <div v-for="(day, index) in daysOfWeek" :key="index">
        <label>
          <input
            type="checkbox"
            v-model="timeCheckboxes[day]"
          />
          {{ day }}
        </label>
        <input
          :id="'timeRange-' + day"
          v-model="timeRanges[day]"
          type="time"
          v-if="timeCheckboxes[day]"
        />
      </div>

      <h3>Alarm Codes</h3>
      <div v-for="(alarmCode, index) in alarmCodes" :key="index">
        <input v-model="alarmCodes[index]" type="text" placeholder="Enter alarm code" />
        <button type="button" @click="removeAlarmCode(index)">Remove</button>
      </div>
      <button type="button" @click="addAlarmCode">Add Alarm Code</button>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { addBuilding } from '../firebase.js'; // Update the path

export default {
  name: 'CreateBuildingForm',
  data() {
    return {
      buildingName: '',
      buildingAddress: '',
      email: '',
      phone: '',
      contractLink: '',
      contractStartDate: '',
      daysOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      timeCheckboxes: {},
      timeRanges: {},
      alarmCodes: [''] // Initial empty alarm code
    };
  },
  methods: {
    submitForm() {
      // Here you can handle the form submission, e.g., send data to a server
      console.log('Form submitted:', {
        buildingName: this.buildingName,
        buildingAddress: this.buildingAddress,
        email: this.email,
        phone: this.phone,
        contractLink: this.contractLink,
        contractStartDate: this.contractStartDate,
        timeCheckboxes: this.timeCheckboxes,
        timeRanges: this.timeRanges,
        alarmCodes: this.alarmCodes
      });

      // Create timeRanges based on timeCheckboxes
      for (const day of this.daysOfWeek) {
        if (!this.timeCheckboxes[day]) {
          this.timeRanges[day] = null;
        }
      }

      // Call the database function to add the building
      addBuilding({
        address: this.buildingAddress,
        email: this.email,
        phone: this.phone,
        contractLink: this.contractLink,
        contractStartDate: this.contractStartDate,
        timeRanges: this.timeRanges,
        alarmCodes: this.alarmCodes
      });
    },
    addAlarmCode() {
      this.alarmCodes.push(''); // Add a new empty alarm code input
    },
    removeAlarmCode(index) {
      this.alarmCodes.splice(index, 1); // Remove the alarm code input at the given index
    }
  }
};
</script>
