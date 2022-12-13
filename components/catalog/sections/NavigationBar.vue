<template>
  <aside class="navigation" :class="{ active: activeFilters }">
    <section class="navigation__status">
      <CheckBox v-model="checkboxesValue.suggestions.stock">
        <span class="navigation__checkbox-title">Акции</span>
      </CheckBox>

      <CheckBox v-model="checkboxesValue.suggestions.novelty">
        <span class="navigation__checkbox-title">Новинки</span>
      </CheckBox>

      <CheckBox v-model="checkboxesValue.suggestions.topSales">
        <span class="navigation__checkbox-title">Топ продаж</span>
      </CheckBox>
    </section>
    <section class="navigation__filter">
      <div
        @click="activeFilter"
        class="navigation__filter-header price-control"
      >
        <h1 class="navigation__filter-name">Цена</h1>
        <SvgIcon class="navigation__arrow" :icon="icons['arrow-down']" />
      </div>
        <div class="navigation__filter-body price-control">
            <FilterPriceControl />
        </div>
    </section>
    <section class="navigation__filter">
      <div @click="activeFilter" class="navigation__filter-header">
        <h1 class="navigation__filter-name">Мощность VA/W</h1>
        <SvgIcon class="navigation__arrow" :icon="icons['arrow-down']" />
      </div>
      <div ref="filterPower" class="navigation__filter-body">
        <CheckBox
          class="navigation__filter-item"
          v-model="checkboxesValue.power.item1"
        >
          <span class="navigation__checkbox-title">1000/900 (43)</span>
        </CheckBox>

        <CheckBox
          class="navigation__filter-item"
          v-model="checkboxesValue.power.item2"
        >
          <span class="navigation__checkbox-title">1000/900 (43)</span>
        </CheckBox>

        <CheckBox
          class="navigation__filter-item"
          v-model="checkboxesValue.power.item3"
        >
          <span class="navigation__checkbox-title">1000/900 (43)</span>
        </CheckBox>

        <CheckBox
          class="navigation__filter-item"
          v-model="checkboxesValue.power.item4"
        >
          <span class="navigation__checkbox-title">1000/900 (43)</span>
        </CheckBox>

        <CheckBox
          class="navigation__filter-item"
          v-model="checkboxesValue.power.item5"
        >
          <span class="navigation__checkbox-title">1000/900 (43)</span>
        </CheckBox>

        <ShowAll @click.native="showAll" />
      </div>
    </section>
    <section class="navigation__filter">
      <div @click="activeFilter" class="navigation__filter-header">
        <h1 class="navigation__filter-name">Тип подключения к сети</h1>
        <SvgIcon class="navigation__arrow" :icon="icons['arrow-down']" />
      </div>
      <div class="navigation__filter-body">
        <CheckBox
          class="navigation__filter-item"
          v-model="checkboxesValue.networkConnection.item1"
        >
          <span class="navigation__checkbox-title">Евровилка (43)</span>
        </CheckBox>

        <CheckBox
          class="navigation__filter-item"
          v-model="checkboxesValue.networkConnection.item2"
        >
          <span class="navigation__checkbox-title">Клеммы (43)</span>
        </CheckBox>
      </div>
    </section>
    <section class="navigation__filter">
      <div @click="activeFilter" class="navigation__filter-header">
        <h1 class="navigation__filter-name">Тип подключения нагрузки к ИБП</h1>
        <SvgIcon class="navigation__arrow" :icon="icons['arrow-down']" />
      </div>
      <div class="navigation__filter-body">
        <CheckBox
          class="navigation__filter-item"
          v-model="checkboxesValue.upsConnection.item1"
        >
          <span class="navigation__checkbox-title">IEC320 C13 (43)</span>
        </CheckBox>
        <CheckBox
          class="navigation__filter-item"
          v-model="checkboxesValue.upsConnection.item1"
        >
          <span class="navigation__checkbox-title">Клеммы (43)</span>
        </CheckBox>
      </div>
    </section>
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";
import FilterPriceControl from "../UI/FilterPriceControl.vue";
import ShowAll from "../UI/ShowAll.vue";
import CheckBox from "@components/common/buttons/CheckBox.vue";

@Component({
  components: {
    FilterPriceControl,
    ShowAll,
    CheckBox,
    SvgIcon
  },
})
export default class NavigationBarComponent extends Vue {
  @Prop({ required: false }) activeFilters: boolean;

  $refs: {
    filterPower: HTMLElement;
  };

  checkboxesValue: any = {
    suggestions: {
      stock: false,
      novelty: false,
      topSales: false,
    },
    power: {
      item1: false,
      item2: false,
      item3: false,
      item4: false,
      item5: false,
    },
    networkConnection: {
      item1: false,
      item2: false,
    },
    upsConnection: {
      item1: false,
      item2: false,
    }
  };

  initialHeight: number = 0;

  getInitialHeight() {
    this.initialHeight = this.$refs.filterPower.scrollHeight;
  }

  activeFilter(event) {
    const bodySection = event.currentTarget.nextElementSibling;

    event.currentTarget.classList.toggle("active");

    if (event.currentTarget.classList.contains("active")) {
      window.getComputedStyle(bodySection).getPropertyValue("--height");
      bodySection.style.setProperty("--height", bodySection.scrollHeight + "px");
    } else {
      window.getComputedStyle(bodySection).getPropertyValue("--height");
      bodySection.style.setProperty("--height", 0 + "px");
    }
  }

  showAll() {
    this.$refs.filterPower.classList.toggle("active");

    if (this.$refs.filterPower.classList.contains("active")) {
      window.getComputedStyle(this.$refs.filterPower).getPropertyValue("--height");
      this.$refs.filterPower.style.setProperty("--height", this.$refs.filterPower.scrollHeight + "px");
    } else {
      window.getComputedStyle(this.$refs.filterPower).getPropertyValue("--height");
      this.$refs.filterPower.style.setProperty("--height", this.initialHeight + "px");
    }
  }

  mounted() {
    this.getInitialHeight();
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  flex: 1 0 256px;

  background-color: white;

  border: 1px solid #e9e9e9;
  border-radius: 8px;

  padding: 16px 0;

  @include bigMobile {
    width: 100%;

    height: 0;

    flex: auto;

    border: none;

    padding: 0;

    overflow: hidden;
    visibility: hidden;

    &.active {
      height: auto;

      border: 1px solid #e9e9e9;

      padding: 16px 0;

      visibility: visible;
    }
  }

  .navigation__checkbox-title {
    @include flex-container(row, flex-start);

    letter-spacing: 0.02em;

    gap: 16px;
    padding: 8px 0;

    &::before {
      width: 16px;
      height: 16px;

      @include bigMobile { 
        width: 24px;
        height: 24px;
      }
    }
  }

  &__status {
    border-bottom: 1px solid #d1d1d1;

    padding: 0 16px 16px 16px;
  }

  &__filter {
    border-bottom: 1px solid #d1d1d1;

    padding: 16px 8px;

    &:last-child {
      border: none;

      padding-bottom: 0;
    }
  }

  &__filter-header {
    @include flex-container(row, space-between, center);

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    cursor: pointer;

    transition: margin-bottom 0.2s ease-in-out;

    &.active {
      margin-bottom: 8px;
    }
    &.active .navigation__arrow {
      transform: rotateZ(180deg);
    }
    &.price-control.active {
      margin-bottom: 16px;
    }
  }

  &__filter-name {
    @include fontUnify(16, 22, 400);
    color: #2b2b2b;
    letter-spacing: 0.02em;
  }

  &__arrow {
    width: 24px;
    height: 24px;

    flex: 0 0 auto;

    transition: transform 0.2s ease-in-out;
  }

  &__filter-body {
    --height: 0;
    height: var(--height);

    padding: 0 8px;

    transition: height 0.2s ease-in-out;

    overflow: hidden;

    &.price-control {
      padding: 0;
    }

    &.active {
      .navigation__filter-item:nth-child(n + 3) {
        display: block;
      }
    }
    .navigation__filter-item {
      &:nth-child(n + 3) {
        display: none;
      }
    }
  }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
    transition: all .3s ease;
}
.slide-fade-enter{
   height: 100%;
}

.slide-fade-leave-to{
    height: 0;
}


</style>
          