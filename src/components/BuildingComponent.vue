<template>
  <div class="building">
    <div class="container">
      <div class="building-header">
        <search-field />
        <div class="building-results">
          Показано
          <span>30 результатов</span>
        </div>
        <button class="building-sort-btn">
          <span>Сортировать по</span>
        </button>
      </div>
      <div class="building-wrapper">
        <card-component v-for="card in 10" :key="card" />
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
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>