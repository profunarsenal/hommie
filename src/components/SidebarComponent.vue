<template>
  <div class="sidebar" :class="{ 'theme-dark': isDarkTheme }">
    <div class="container">
      <form class="sidebar-wrapper">
        <div class="sidebar-widget">
          <h4 @click="toggleWidget" class="widget-title title">
            Метро поблизости
          </h4>
          <div class="metro-checkboxes">
            <label class="checkbox">
              <input
                class="checkbox-hide"
                type="checkbox"
                value="Алабинская"
                v-model="metroCheckboxes"
              />
              <span class="checkbox-show">
                <span class="metro-name">Алабинская</span>
              </span>
            </label>
            <label class="checkbox">
              <input
                class="checkbox-hide"
                type="checkbox"
                value="Российская"
                v-model="metroCheckboxes"
              />
              <span class="checkbox-show">
                <span class="metro-name">Российская</span>
              </span>
            </label>
            <label class="checkbox">
              <input
                class="checkbox-hide"
                type="checkbox"
                value="Московская"
                v-model="metroCheckboxes"
              />
              <span class="checkbox-show">
                <span class="metro-name">Московская</span>
              </span>
            </label>
            <label class="checkbox">
              <input
                class="checkbox-hide"
                type="checkbox"
                value="Гагаринская"
                v-model="metroCheckboxes"
              />
              <span class="checkbox-show">
                <span class="metro-name">Гагаринская</span>
              </span>
            </label>
            <label class="checkbox">
              <input
                class="checkbox-hide"
                type="checkbox"
                value="Спортивная"
                v-model="metroCheckboxes"
              />
              <span class="checkbox-show">
                <span class="metro-name">Спортивная</span>
              </span>
            </label>
            <label class="checkbox">
              <input
                class="checkbox-hide"
                type="checkbox"
                value="Советская"
                v-model="metroCheckboxes"
              />
              <span class="checkbox-show">
                <span class="metro-name">Советская</span>
              </span>
            </label>
            <label class="checkbox">
              <input
                class="checkbox-hide"
                type="checkbox"
                value="Победы"
                v-model="metroCheckboxes"
              />
              <span class="checkbox-show">
                <span class="metro-name">Победы</span>
              </span>
            </label>
            <label class="checkbox">
              <input
                class="checkbox-hide"
                type="checkbox"
                value="Безымянка"
                v-model="metroCheckboxes"
              />
              <span class="checkbox-show">
                <span class="metro-name">Безымянка</span>
              </span>
            </label>
            <label class="checkbox">
              <input
                class="checkbox-hide"
                type="checkbox"
                value="Кировская"
                v-model="metroCheckboxes"
              />
              <span class="checkbox-show">
                <span class="metro-name">Кировская</span>
              </span>
            </label>
            <label class="checkbox">
              <input
                class="checkbox-hide"
                type="checkbox"
                value="Юнгородок"
                v-model="metroCheckboxes"
              />
              <span class="checkbox-show">
                <span class="metro-name">Юнгородок</span>
              </span>
            </label>
          </div>
        </div>
        <div class="sidebar-widget">
          <h4 @click="toggleWidget" class="widget-title title">Срок сдачи</h4>
          <div class="term-checkboxes">
            <label class="checkbox">
              <input
                class="checkbox-hide"
                type="checkbox"
                value="Любой"
                v-model="anyBuild"
                :disabled="buildCheckboxesArray.length === 0"
              />
              <span class="checkbox-show">Любой</span>
            </label>
            <label class="checkbox">
              <input
                class="checkbox-hide"
                type="checkbox"
                value="Сдан"
                v-model="buildCheckboxesArray"
              />
              <span class="checkbox-show">Сдан</span>
            </label>
            <label class="checkbox">
              <input
                class="checkbox-hide"
                type="checkbox"
                value="В этом году"
                v-model="buildCheckboxesArray"
              />
              <span class="checkbox-show">В этом году</span>
            </label>
            <label class="checkbox">
              <input
                class="checkbox-hide"
                type="checkbox"
                value="В следующем году"
                v-model="buildCheckboxesArray"
              />
              <span class="checkbox-show">В следующем году</span>
            </label>
          </div>
        </div>
        <div class="sidebar-widget">
          <h4 @click="toggleWidget" class="widget-title title">
            Дополнительные опции
          </h4>
          <div class="options-checkboxes">
            <label class="option-checkbox">
              <input
                class="option-checkbox-hide"
                type="checkbox"
                value="parking"
                v-model="optionParking"
              />
              <span class="option-checkbox-show">Парковка</span>
            </label>
            <label class="option-checkbox">
              <input
                class="option-checkbox-hide"
                type="checkbox"
                value="school"
                v-model="optionSchool"
              />
              <span class="option-checkbox-show">Школа</span>
            </label>
            <label class="option-checkbox">
              <input
                class="option-checkbox-hide"
                type="checkbox"
                value="kindergarten"
                v-model="optionKindergarten"
              />
              <span class="option-checkbox-show">Детский сад</span>
            </label>
            <label class="option-checkbox">
              <input
                class="option-checkbox-hide"
                type="checkbox"
                value="studio"
                v-model="optionStudio"
              />
              <span class="option-checkbox-show">Студия</span>
            </label>
            <label class="option-checkbox">
              <input
                class="option-checkbox-hide"
                type="checkbox"
                value="repair"
                v-model="optionRepair"
              />
              <span class="option-checkbox-show">С отделкой</span>
            </label>
            <label class="option-checkbox">
              <input
                class="option-checkbox-hide"
                type="checkbox"
                value="lowRise"
                v-model="optionLowRise"
              />
              <span class="option-checkbox-show">Малоэтажный</span>
            </label>
            <label class="option-checkbox">
              <input
                class="option-checkbox-hide"
                type="checkbox"
                value="penthouse"
                v-model="optionPenthouse"
              />
              <span class="option-checkbox-show">Пентхаус</span>
            </label>
          </div>
        </div>
        <div class="sidebar-toggle">
          <h4 class="toggle-title title">Рассрочка</h4>
          <label class="toggle">
            <input
              class="toggle-checkbox-hide"
              type="checkbox"
              value="credit"
              v-model="credit"
            />
            <span class="toggle-checkbox-show"></span>
          </label>
        </div>
        <button class="reset-btn" type="button" @click="resetForm">
          <span>Сбросить все фильтры</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar-Component",

  computed: {
    metroCheckboxes: {
      get() {
        return this.$store.state.metroCheckboxes;
      },
      set(value) {
        this.$store.commit("updateMetroCheckboxes", value);
      },
    },

    anyBuild: {
      get() {
        return this.$store.state.buildCheckboxes.anyBuild;
      },
      set(value) {
        this.$store.commit("updateAnyCheckbox", value);
      },
    },

    buildCheckboxesArray: {
      get() {
        return this.$store.state.buildCheckboxes.buildCheckboxesArray;
      },
      set(value) {
        this.$store.commit("updatebuildCheckboxes", value);
      },
    },

    optionParking: {
      get() {
        return this.$store.state.options.parking;
      },
      set(value) {
        this.$store.commit("updateOptionParking", value);
      },
    },

    optionSchool: {
      get() {
        return this.$store.state.options.school;
      },
      set(value) {
        this.$store.commit("updateOptionSchool", value);
      },
    },

    optionKindergarten: {
      get() {
        return this.$store.state.options.kindergarten;
      },
      set(value) {
        this.$store.commit("updateOptionKindergarten", value);
      },
    },

    optionStudio: {
      get() {
        return this.$store.state.options.studio;
      },
      set(value) {
        this.$store.commit("updateOptionStudio", value);
      },
    },

    optionRepair: {
      get() {
        return this.$store.state.options.repair;
      },
      set(value) {
        this.$store.commit("updateOptionRepair", value);
      },
    },

    optionLowRise: {
      get() {
        return this.$store.state.options.lowRise;
      },
      set(value) {
        this.$store.commit("updateOptionLowRise", value);
      },
    },

    optionPenthouse: {
      get() {
        return this.$store.state.options.penthouse;
      },
      set(value) {
        this.$store.commit("updateOptionPenthouse", value);
      },
    },

    credit: {
      get() {
        return this.$store.state.credit;
      },
      set(value) {
        this.$store.commit("updateCredit", value);
      },
    },

    isDarkTheme() {
      return this.$store.getters.isDarkTheme;
    },
  },

  watch: {
    buildCheckboxesArray() {
      if (this.buildCheckboxesArray.length <= 0) {
        this.$store.commit("updateAnyCheckbox", true);
      }
    },
  },

  methods: {
    toggleWidget(e) {
      e.target.classList.toggle("toggle-widget");
      e.target.nextElementSibling.classList.toggle("toggle-widget-content");
    },

    resetForm() {
      this.$store.commit("resetForm", true);
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  @media (max-width: 767px) {
    position: absolute;
    z-index: 3;
    top: 0;
    left: -100%;
    height: 100%;
    padding-top: 60px;
    background-color: #f4f4f4;
    transition: all 0.3s;

    &.toggle-sidebar {
      left: 0;
      overflow: scroll;
    }

    &.theme-dark {
      background-color: #222222;
    }
  }
}

.sidebar-wrapper {
  width: 284px;
  padding: 60px 0;

  @media (max-width: 767px) {
    padding: 30px 0;
  }
}

.sidebar-widget {
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 40px;
  }
}

.title {
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
}

.widget-title {
  position: relative;
  margin-bottom: 28px;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 6px;
    right: 0;
    width: 10px;
    height: 8px;
    background-image: url("@/assets/icons/icon-arrow.svg");
    background-repeat: no-repeat;
    transition: all 0.3s;
  }

  &.toggle-widget {
    margin-bottom: 0;

    &::after {
      transform: rotate(180deg);
    }
  }
}

.checkbox {
  display: block;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
}

.checkbox-hide {
  position: absolute;
  z-index: -1;
  width: 1px;
  height: 1px;
  opacity: 0;
  appearance: none;

  &:checked + .checkbox-show {
    &::before {
      background-color: #4585f8;
    }

    &::after {
      content: "";
      position: absolute;
      z-index: 1;
      top: 4px;
      left: 6px;
      width: 12px;
      height: 12px;
      background-image: url("@/assets/icons/icon-check.svg");
      background-repeat: no-repeat;
    }
  }
}

.checkbox-show {
  position: relative;
  padding-left: 36px;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: 0;
    width: 24px;
    height: 24px;
    border: 1px solid rgba(171, 175, 185, 0.5);
    border-radius: 8px;
    transition: all 0.2s;
  }

  @media (any-hover: hover) {
    &:hover {
      &::before {
        background-color: rgba(171, 175, 185, 0.2);
      }
    }
  }
}

.metro-name {
  position: relative;
  display: inline-block;
  padding-left: 24px;

  &::before {
    content: "";
    position: absolute;
    top: 3px;
    left: 0;
    width: 16px;
    height: 16px;
    background-image: url("@/assets/icons/icon-metro.svg");
    background-repeat: no-repeat;
  }
}

.option-checkbox {
  display: inline-block;
  margin-bottom: 10px;

  &:not(:last-child) {
    margin-right: 10px;
  }
}

.option-checkbox-hide {
  position: absolute;
  z-index: -1;
  width: 1px;
  height: 1px;
  opacity: 0;
  appearance: none;

  &:checked + .option-checkbox-show {
    background-color: #4585f8;
    border: 1px solid #4585f8;
    color: #ffffff;
  }
}

.option-checkbox-show {
  display: inline-block;
  padding: 12px;
  border: 1px solid rgba(171, 175, 185, 0.5);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;

  @media (any-hover: hover) {
    &:hover {
      background-color: rgba(171, 175, 185, 0.2);
    }
  }
}

.sidebar-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}

.toggle {
  display: inline-block;
}

.toggle-checkbox-hide {
  position: absolute;
  z-index: -1;
  width: 1px;
  height: 1px;
  opacity: 0;
  appearance: none;

  &:checked + .toggle-checkbox-show {
    &::before {
      background-color: #005ff9;
    }

    &::after {
      left: 14px;
    }
  }
}

.toggle-checkbox-show {
  position: relative;
  display: inline-block;
  width: 32px;
  height: 20px;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(171, 175, 185, 0.5);
    border-radius: 999px;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    background-color: #fff;
    border-radius: 50%;
    transition: all 0.3s;
  }
}

.reset-btn {
  width: 100%;
  padding: 16px;
  background: rgba(171, 175, 185, 0.25);
  border-radius: 12px;
  transition: all 0.3s;

  span {
    position: relative;
    display: inline-block;
    padding-left: 18px;

    &::after {
      content: "";
      position: absolute;
      top: 4px;
      left: 0;
      width: 14px;
      height: 14px;
      background-image: url("@/assets/icons/icon-close.svg");
      background-repeat: no-repeat;
    }
  }

  @media (any-hover: hover) {
    &:hover {
      background-color: rgba(171, 175, 185, 0.5);
    }
  }
}

.toggle-widget-content {
  display: none;
}
</style>