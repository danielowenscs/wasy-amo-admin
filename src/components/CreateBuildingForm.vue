<template>
    <div>
      <h2>Create a New Building</h2>
      <form @submit.prevent="submitForm">
        <label for="address">Building Address</label>
        <input id="address" v-model="buildingAddress" type="text" required />
  
        <h3>Contact Information</h3>
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" required />
  
        <label for="phone">Phone</label>
        <input id="phone" v-model="phone" type="tel" required />
  
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CreateBuildingForm',
    data() {
        return {
            buildingAddress: '',
            email: '',
            phone: ''
        }
    },
    methods: {
      submitForm() {
        // Here you can handle the form submission, e.g., send data to a server
        console.log('Form submitted:', {
          buildingAddress: this.buildingAddress,
          contact: this.contact
        });
      }
    }
  };
  </script>
  