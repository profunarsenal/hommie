<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="header-logo">
        <img src="@/assets/icons/icon-logo.svg" alt="logo hommie" />
      </div>
      <div class="header-search">
        <input class="input-search" type="text" placeholder="Поиск" />
      </div>
      <div class="header-theme">
        <button class="theme-btn theme-light-btn">
          <img src="@/assets/icons/icon-light.svg" alt="light" />
        </button>
        <button class="theme-btn theme-dark-btn">
          <img src="@/assets/icons/icon-dark.svg" alt="dark" />
        </button>
      </div>
      <mobile-navigation />
    </div>
  </header>
</template>

<script>
import MobileNavigation from "@/components/MobileNavigation.vue";

export default {
  name: "Header-Component",

  components: {
    MobileNavigation,
  },
};
</script>

<style lang="scss" scoped>
.header {
  background: #fdfdfd;

  @media (max-width: 767px) {
    position: relative;
    z-index: 4;
  }
}

.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 88px;
  padding: 0 40px;

  @media (max-width: 767px) {
    min-height: 60px;
    padding: 0 10px;
  }
}

.header-logo {
  img {
    width: 136px;
    height: 24px;
  }

  @media (max-width: 767px) {
    img {
      width: 116px;
      height: 24px;
    }
  }
}

.header-search {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 12px;
    right: 12px;
    width: 26px;
    height: 26px;
    background-image: url("@/assets/icons/icon-search.svg");
    background-repeat: no-repeat;
  }

  @media (max-width: 767px) {
    display: none;
  }
}

.input-search {
  background: rgba(171, 175, 185, 0.08);
  border-radius: 100px;
  padding: 14px 44px 14px 24px;

  &::placeholder {
    letter-spacing: -0.02em;
    color: rgba(171, 175, 185, 0.8);
  }
}

.header-theme {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 44px;
  background: rgba(171, 175, 185, 0.1);
  border-radius: 135px;

  &::after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 67px;
    height: 40px;
    background: #ffffff;
    border: 0.5px solid rgba(171, 175, 185, 0.25);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.04), 0px 4px 4px rgba(0, 0, 0, 0.08);
    border-radius: 57px;
  }

  @media (max-width: 767px) {
    display: none;
  }
}

.theme-btn {
  position: relative;
  z-index: 1;
  flex: 0 1 50%;
  background-color: transparent;
}
</style>