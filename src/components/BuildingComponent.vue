<template>
  <div class="building">
    <div class="container">
      <div class="building-header">
        <search-field />
        <div class="building-results" @click="lol">
          Показано
          <span>{{ filteredByCredit.length }} результатов</span>
        </div>
        <button class="building-sort-btn">
          <span>Сортировать по</span>
        </button>
      </div>
      <div class="building-wrapper">
        <card-component
          v-for="building in filteredByCredit"
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
import { mapGetters } from "vuex";

export default {
  name: "Building-Component",

  components: {
    CardComponent,
    SearchField,
  },

  computed: {
    ...mapGetters([
      "BUILDINGS",
      "FIELDSEARCH",
      "METRO",
      "BUILDCHECKBOXES",
      "OPTIONS",
      "CREDIT",
    ]),

    searchBuildings() {
      return this.BUILDINGS.filter(
        (building) =>
          building.name
            .toLowerCase()
            .includes(this.FIELDSEARCH.toLowerCase()) ||
          building.street.toLowerCase().includes(this.FIELDSEARCH.toLowerCase())
      );
    },

    filteredByMetro() {
      const metroBuildingsArray = [];

      this.METRO.forEach((metro) => {
        this.searchBuildings.forEach((building) => {
          if (metro === building.metro) {
            metroBuildingsArray.push(building);
          }
        });
      });

      if (this.METRO.length > 0) {
        return metroBuildingsArray;
      } else {
        return this.searchBuildings;
      }
    },

    filteredByStatusBuilding() {
      if (this.BUILDCHECKBOXES.anyBuild) {
        return this.filteredByMetro;
      } else {
        const buildingArray = [];

        this.BUILDCHECKBOXES.buildCheckboxesArray.forEach((status) => {
          this.filteredByMetro.forEach((building) => {
            if (status === building.term) {
              buildingArray.push(building);
            }
          });
        });

        if (this.BUILDCHECKBOXES.buildCheckboxesArray.length > 0) {
          return buildingArray;
        } else {
          return this.filteredByMetro;
        }
      }
    },

    filteredByOptions() {
      if (this.OPTIONS.length > 0) {
        return this.filteredByStatusBuilding.filter((building) => {
          let flag = true;

          this.OPTIONS.forEach((option) => {
            if (!building[option]) {
              flag = false;
            }
          });

          return flag;
        });
      } else {
        return this.filteredByStatusBuilding;
      }
    },

    filteredByCredit() {
      if (this.CREDIT) {
        return this.filteredByOptions.filter((building) => building.credit);
      } else {
        return this.filteredByOptions;
      }
    },
  },

  mounted() {
    this.$store.dispatch("getBuildings");
  },

  methods: {
    lol() {},
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