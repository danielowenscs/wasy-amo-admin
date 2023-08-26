<template>
  <div>
    <button @click="changePage('')">Go Home</button>
    <div>
      <button @click="openModal">Create a New Building</button>
      <teleport to="body">
        <div v-if="isModalOpen" class="modal-overlay">
          <div class="modal">
            <button @click="closeModal">Close</button>
            <create-building-form />
          </div>
        </div>
      </teleport>
    </div>
    <div v-for="building in buildings" :key="building.id">
      <!-- <div @click="changePage('building')">{{ building.id }} </div> -->
    </div>
    <BuildingPage/>
  </div>
</template>

<script>
import CreateBuildingForm from "../components/CreateBuildingForm.vue";
import { getBuildings } from "../firebase.js";
import { BuildingPage } from "./BuildingPage.vue";

export default {
  name: "AllBuildingsPage",
  components: {
    CreateBuildingForm,
    BuildingPage,
  },
  data() {
    return {
      isModalOpen: false,
      buildings: [],
    };
  },
  methods: {
    changePage(path) {
      this.$router.push("/" + path);
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    async fetchBuildings() {
      this.buildings = await getBuildings();
    },
  },
  async mounted() {
    console.log("here");
    await this.fetchBuildings(); // Call the async method here
    console.log(this.buildings);
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
