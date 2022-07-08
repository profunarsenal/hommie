<template>
  <div class="search-field">
    <input
      @blur="hideSearchField"
      type="text"
      placeholder="Поиск"
      v-model="fieldSearch"
    />
  </div>
</template>

<script>
export default {
  name: "Search-Field",

  computed: {
    fieldSearch: {
      get() {
        return this.$store.state.fieldSearch;
      },
      set(value) {
        this.$store.commit("updateFieldSearch", value);
      },
    },
  },

  methods: {
    hideSearchField() {
      const searchField = document.querySelector(".search-field");
      searchField.classList.remove("show-search");
    },
  },
};
</script>

<style lang="scss" scoped>
.search-field {
  position: absolute;
  z-index: 2;
  top: -300%;
  left: 0;
  width: 100%;
  height: 50px;
  margin-top: 60px;
  background-color: #fff;
  transition: all 0.3s;

  input {
    width: 100%;
    height: 100%;
    padding: 14px;
    background: rgba(171, 175, 185, 0.08);

    &::placeholder {
      letter-spacing: -0.02em;
      color: rgba(171, 175, 185, 0.8);
    }
  }

  @media (min-width: 767px) {
    display: none;
  }

  &.show-search {
    top: 0;
  }
}
</style>