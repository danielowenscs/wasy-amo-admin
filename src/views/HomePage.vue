<template>
    <div>Welcome to the homepage</div> 
    <button @click="changePage('buildings')">Buildings</button>

</template>
<script>

export default {
  name: 'HomePage',
  methods: {
    changePage(path) {
      this.$router.push('/' + path);
    },
  },
};
</script>