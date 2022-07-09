<template>
  <div class="card" :class="{ 'theme-dark': isDarkTheme }">
    <div class="card-image">
      <img
        :src="require(`@/assets/images/${building.image}`)"
        alt="building-photo"
      />
      <div class="card-stickers">
        <div v-if="building.comfort" class="card-sticker sticker-comfort">
          Комфорт
        </div>
        <div v-if="building.credit" class="card-sticker sticker-credit">
          Рассрочка 12 мес.
        </div>
      </div>
    </div>
    <div class="card-content" :class="{ 'theme-dark': isDarkTheme }">
      <div class="card-location">{{ building.street }}</div>
      <h3 class="card-title">{{ building.name }}</h3>
    </div>
    <div class="card-subtitles">
      <span class="card-subtitle card-metro">{{ building.metro }}</span>
      <span class="card-subtitle card-time">{{ building.time }}</span>
    </div>
    <button @click="likeCard = !likeCard" class="card-favorite">
      <img
        v-if="!likeCard"
        src="@/assets/icons/icon-favorite.svg"
        alt="favorite icon"
      />
      <img
        v-if="likeCard"
        src="@/assets/icons/icon-favorite-active.svg"
        alt="favorite icon"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: "Card-Component",

  data() {
    return {
      likeCard: false,
    };
  },

  props: {
    building: {
      type: Object,
      required: true,
    },
  },

  computed: {
    isDarkTheme() {
      return this.$store.getters.isDarkTheme;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  border-radius: 16px;
  background: #fff;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  @media (any-hover: hover) {
    &:hover {
      box-shadow: 1px 5px 5px -5px rgba(0, 0, 0, 0.6);

      .card-image {
        img {
          transform: scale(1.1);
        }
      }
    }
  }

  &.theme-dark {
    background: #000;

    @media (any-hover: hover) {
      &:hover {
        box-shadow: 1px 5px 5px -5px rgb(255, 255, 255);
      }
    }
  }
}

.card-image {
  position: relative;
  height: 360px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s;
  }
}

.card-content {
  position: relative;
  z-index: 1;
  padding: 20px;
  background-color: #fff;

  &.theme-dark {
    background: #000;
  }
}

.card-location {
  position: relative;
  padding-left: 23px;
  margin-bottom: 18px;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: -0.01em;
  color: #abafb9;

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: 0;
    width: 15px;
    height: 15px;
    background-image: url("@/assets/icons/icon-location.svg");
    background-repeat: no-repeat;
  }
}

.card-title {
  margin-bottom: 32px;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
}

.card-subtitles {
  position: absolute;
  z-index: 2;
  bottom: 20px;
  left: 20px;
  display: flex;
}

.card-subtitle {
  position: relative;
  padding-left: 24px;
  font-size: 12px;
  letter-spacing: -0.01em;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    background-repeat: no-repeat;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
}

.card-metro {
  &::before {
    background-image: url("@/assets/icons/icon-metro.svg");
  }
}

.card-time {
  &::before {
    background-image: url("@/assets/icons/icon-clock.svg");
  }
}

.card-stickers {
  position: absolute;
  bottom: 16px;
  left: 20px;
  display: flex;
}

.card-sticker {
  padding: 6px 12px;
  font-size: 12px;
  border-radius: 25px;

  &:not(:last-child) {
    margin-right: 6px;
  }
}

.sticker-comfort {
  background: #a3e27a;
}

.sticker-credit {
  color: #fff;
  background: #4585f8;
}

.card-favorite {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 12px;
  background: rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  transition: all 0.3s;

  @media (any-hover: hover) {
    &:hover {
      background: rgba(0, 0, 0, 0.22);
    }
  }
}
</style>