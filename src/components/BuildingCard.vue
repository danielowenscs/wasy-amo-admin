<template>
   <div class="card">
    {{ buildingName }}
   </div>
</template>
<script>
export default {
    name: "BuildingCard",
    props: ['buildingName', 'buildingId']
}
</script>
<style scoped>
/* .card {
    border-radius: 16px;
} */
</style>