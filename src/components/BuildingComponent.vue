<template>
  <div class="building">
    <div class="container">
      <div class="building-header">
        <search-field />
        <div class="building-results">
          Показано
          <span>{{ filteredBuildings.length }} результатов</span>
        </div>
        <button class="building-sort-btn">
          <span>Сортировать по</span>
        </button>
      </div>
      <div class="building-wrapper">
        <card-component
          v-for="building in filteredBuildings"
          :key="building"
          :building="building"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import SearchField from "@/components/SearchField.vue";

export default {
  name: "Building-Component",

  components: {
    CardComponent,
    SearchField,
  },

  data() {
    return {
      buildings: [],
    };
  },

  computed: {
    fieldSearch() {
      return this.$store.getters["getFieldSearch"];
    },

    metroList() {
      return this.$store.getters["getMetroList"];
    },

    searchBuildings() {
      return this.buildings.filter(
        (building) =>
          building.name
            .toLowerCase()
            .includes(this.fieldSearch.toLowerCase()) ||
          building.street.toLowerCase().includes(this.fieldSearch.toLowerCase())
      );
    },

    filteredBuildings() {
      const buildings = [];

      this.searchBuildings.forEach((building) => {
        this.metroList.forEach((metro) => {
          if (building.metro === metro) {
            buildings.push(building);
          }
        });
      });

      if (this.metroList.length > 0) {
        return buildings;
      } else {
        return this.searchBuildings;
      }
    },
  },

  mounted() {
    this.getBuildingsList();
  },

  methods: {
    getBuildingsList() {
      fetch("https://api.jsonbin.io/b/62bbfc57402a5b380240adff")
        .then((res) => res.json())
        .then((data) => (this.buildings = data));
    },
  },
};
</script>

<style lang="scss" scoped>
.building {
  width: 100%;
  padding: 60px 0;

  @media (max-width: 767px) {
    padding: 30px 0;
  }
}

.building-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.building-results {
  font-weight: 400;
  font-size: 18px;

  span {
    font-weight: 700;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
}

.building-sort-btn {
  display: none;
  padding: 16px 40px 16px 20px;
  border: 1px solid rgba(171, 175, 185, 0.5);
  border-radius: 12px;
  background-color: transparent;
  transition: all 0.3s;

  span {
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      top: 7px;
      right: -28px;
      width: 16px;
      height: 16px;
      background-image: url("@/assets/icons/icon-arrow.svg");
      background-repeat: no-repeat;
    }
  }

  @media (any-hover: hover) {
    &:hover {
      background-color: rgba(171, 175, 185, 0.2);
    }
  }
}

.building-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;

  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}
</style>