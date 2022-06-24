<template>
  <div class="mobile-navigation">
    <button @click="showSearchField" class="mobile-navigation-btn">
      <img src="@/assets/icons/icon-search.svg" alt="icon-search" />
    </button>
    <button class="mobile-navigation-btn">
      <img src="@/assets/icons/icon-dark.svg" alt="icon-dark" />
    </button>
    <button @click="toggleSidebar" class="mobile-navigation-btn">
      <img
        v-if="!sidebarIsOpen"
        src="@/assets/icons/icon-burger.svg"
        alt="icon-menu"
      />
      <img
        v-if="sidebarIsOpen"
        src="@/assets/icons/icon-close.svg"
        alt="icon-close"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: "Mobile-Navigation",

  data() {
    return {
      sidebarIsOpen: false,
    };
  },

  methods: {
    toggleSidebar() {
      const sidebar = document.querySelector(".sidebar");
      sidebar.classList.toggle("toggle-sidebar");
      document.body.classList.toggle("lock");
      this.sidebarIsOpen = !this.sidebarIsOpen;
    },

    showSearchField() {
      const searchField = document.querySelector(".search-field");
      searchField.classList.toggle("show-search");
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-navigation {
  @media (min-width: 767px) {
    display: none;
  }
}

.mobile-navigation-btn {
  width: 26px;
  height: 26px;
  background-color: transparent;

  &:not(:last-child) {
    margin-right: 15px;
  }

  img {
    width: 100%;
    height: 100%;
  }
}
</style>