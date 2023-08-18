<template>
    <button @click="changePage('')">Go Home</button>
    <button>Create a New Building</button>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Buildings', // Provide the name as a string
    // Other component options
    methods : {
        changePage(path) {
            this.$router.push('/' + path);
        }
    }
}
</script>