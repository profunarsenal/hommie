<template>
  <header class="header" :class="{ 'theme-dark': isDarkTheme }">
    <div class="header-wrapper">
      <div class="header-logo">
        <img
          v-if="!isDarkTheme"
          src="@/assets/icons/icon-logo.svg"
          alt="logo hommie"
        />
        <img
          v-if="isDarkTheme"
          src="@/assets/icons/icon-logo-on.svg"
          alt="logo hommie"
        />
      </div>
      <div class="header-search">
        <input
          class="input-search"
          :class="{ 'theme-dark': isDarkTheme }"
          type="text"
          placeholder="Поиск"
          v-model="fieldSearch"
        />
      </div>
      <div class="header-theme" :class="{ 'theme-dark': isDarkTheme }">
        <button class="theme-btn theme-light-btn" @click="isDarkTheme = false">
          <img
            v-if="!isDarkTheme"
            src="@/assets/icons/icon-light.svg"
            alt="light"
          />
          <img
            v-if="isDarkTheme"
            src="@/assets/icons/icon-light-on.svg"
            alt="light"
          />
        </button>
        <button class="theme-btn theme-dark-btn" @click="isDarkTheme = true">
          <img
            v-if="!isDarkTheme"
            src="@/assets/icons/icon-dark.svg"
            alt="dark"
          />
          <img
            v-if="isDarkTheme"
            src="@/assets/icons/icon-dark-on.svg"
            alt="dark"
          />
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

  computed: {
    fieldSearch: {
      get() {
        return this.$store.state.fieldSearch;
      },
      set(value) {
        this.$store.commit("updateFieldSearch", value);
      },
    },

    isDarkTheme: {
      get() {
        return this.$store.state.isDarkTheme;
      },
      set(value) {
        this.$store.commit("toggleDarkTheme", value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #fdfdfd;

  @media (max-width: 767px) {
    position: relative;
    z-index: 4;
  }

  &.theme-dark {
    background-color: #000;
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

  &.theme-dark {
    color: #fff;
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
    top: 2px;
    left: 1px;
    width: 67px;
    height: 40px;
    background-color: #ffffff;
    border: 0.5px solid rgba(171, 175, 185, 0.25);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.04), 0px 4px 4px rgba(0, 0, 0, 0.08);
    border-radius: 57px;
    transition: 0.3s ease-in;
  }

  @media (max-width: 767px) {
    display: none;
  }

  &.theme-dark {
    &::after {
      content: "";
      left: 72px;
      background-color: #000;
      box-shadow: 0px 0px 2px rgba(255, 255, 255, 0.04),
        0px 2px 2px rgba(255, 255, 255, 0);
    }
  }
}

.theme-btn {
  position: relative;
  z-index: 1;
  flex: 0 1 50%;
  background-color: transparent;
}
</style>