<template>
  <div class="sidebar">
    <div class="container">
      <div class="sidebar-wrapper">
        <div class="sidebar-widget">
          <h4 class="widget-title title">Метро поблизости</h4>
          <div class="metro-checkboxes">
            <label class="checkbox">
              <input class="checkbox-hide" type="checkbox" />
              <span class="checkbox-show">
                <span class="metro-name">Алабинская</span>
              </span>
            </label>
            <label class="checkbox">
              <input class="checkbox-hide" type="checkbox" />
              <span class="checkbox-show">
                <span class="metro-name">Российская</span>
              </span>
            </label>
            <label class="checkbox">
              <input class="checkbox-hide" type="checkbox" />
              <span class="checkbox-show">
                <span class="metro-name">Московская</span>
              </span>
            </label>
            <label class="checkbox">
              <input class="checkbox-hide" type="checkbox" />
              <span class="checkbox-show">
                <span class="metro-name">Гагаринская</span>
              </span>
            </label>
            <label class="checkbox">
              <input class="checkbox-hide" type="checkbox" />
              <span class="checkbox-show">
                <span class="metro-name">Спортивная</span>
              </span>
            </label>
            <label class="checkbox">
              <input class="checkbox-hide" type="checkbox" />
              <span class="checkbox-show">
                <span class="metro-name">Советская</span>
              </span>
            </label>
            <label class="checkbox">
              <input class="checkbox-hide" type="checkbox" />
              <span class="checkbox-show">
                <span class="metro-name">Победа</span>
              </span>
            </label>
            <label class="checkbox">
              <input class="checkbox-hide" type="checkbox" />
              <span class="checkbox-show">
                <span class="metro-name">Безымянка</span>
              </span>
            </label>
            <label class="checkbox">
              <input class="checkbox-hide" type="checkbox" />
              <span class="checkbox-show">
                <span class="metro-name">Кировская</span>
              </span>
            </label>
            <label class="checkbox">
              <input class="checkbox-hide" type="checkbox" />
              <span class="checkbox-show">
                <span class="metro-name">Юнгородок</span>
              </span>
            </label>
          </div>
        </div>
        <div class="sidebar-widget">
          <h4 class="widget-title title">Срок сдачи</h4>
          <div class="term-checkboxes">
            <label class="checkbox">
              <input class="checkbox-hide" type="checkbox" />
              <span class="checkbox-show">Любой</span>
            </label>
            <label class="checkbox">
              <input class="checkbox-hide" type="checkbox" />
              <span class="checkbox-show">Сдан</span>
            </label>
            <label class="checkbox">
              <input class="checkbox-hide" type="checkbox" />
              <span class="checkbox-show">В этом году</span>
            </label>
            <label class="checkbox">
              <input class="checkbox-hide" type="checkbox" />
              <span class="checkbox-show">В следующем году</span>
            </label>
          </div>
        </div>
        <div class="sidebar-widget">
          <h4 class="widget-title title">Дополнительные опции</h4>
          <div class="options-checkboxes">
            <label class="option-checkbox">
              <input class="option-checkbox-hide" type="checkbox" />
              <span class="option-checkbox-show">Двор без машин</span>
            </label>
            <label class="option-checkbox">
              <input class="option-checkbox-hide" type="checkbox" />
              <span class="option-checkbox-show">Кладовая</span>
            </label>
            <label class="option-checkbox">
              <input class="option-checkbox-hide" type="checkbox" />
              <span class="option-checkbox-show">Панорамные окна</span>
            </label>
            <label class="option-checkbox">
              <input class="option-checkbox-hide" type="checkbox" />
              <span class="option-checkbox-show">Студия</span>
            </label>
            <label class="option-checkbox">
              <input class="option-checkbox-hide" type="checkbox" />
              <span class="option-checkbox-show">С ремонтом</span>
            </label>
            <label class="option-checkbox">
              <input class="option-checkbox-hide" type="checkbox" />
              <span class="option-checkbox-show">Малоэтажный</span>
            </label>
            <label class="option-checkbox">
              <input class="option-checkbox-hide" type="checkbox" />
              <span class="option-checkbox-show">Высокие потолки</span>
            </label>
          </div>
        </div>
        <div class="sidebar-toggle">
          <h4 class="toggle-title title">Рассрочка</h4>
          <label class="toggle">
            <input class="toggle-checkbox-hide" type="checkbox" />
            <span class="toggle-checkbox-show"></span>
          </label>
        </div>
        <button class="reset-btn">
          <span>Сбросить все фильтры</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar-Component",
};
</script>

<style lang="scss" scoped>
.sidebar-wrapper {
  width: 284px;
  padding: 60px 0;
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
    width: 24px;
    height: 24px;
    background-image: url("@/assets/icons/icon-arrow.svg");
    background-repeat: no-repeat;
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
</style>