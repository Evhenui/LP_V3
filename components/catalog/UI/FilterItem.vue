<template>
  <div class="filter-item">
    <span class="filter-item__filter-name">
      <slot></slot>
    </span>
    <SvgIcon class="filter-item__close" :icon="icons['close']" />
  </div>
</template>
    
<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";

@Component({
  components: {
    SvgIcon
  },
})
export default class FilterItemComponent extends Vue {}
</script>
    
<style lang="scss" scoped>
.filter-item {
  @include flex-container(row, flex-start, center);

  border: 1px solid $color-main;
  border-radius: 8px;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  padding: 4px 8px;
  gap: 8px;

  cursor: pointer;

  @include bigMobile { 
    padding: 10px 12px;
  }

  &__filter-name {
    @include fontUnify(16, 22, 400);
    letter-spacing: 0.02em;
    color: $color-main;

    @include bigMobile { 
      @include fontUnify(14, 16, 500);
    }
  }

  &__close {
    width: 24px;
    height: 24px;

    color: #F36C21;

    @include bigMobile { 
      width: 16px;
      height: 16px;
    }
  }
}
</style>
          