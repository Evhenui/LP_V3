<template>
  <div class="price-control">
    <div class="price-control__counters">
      <label class="price-control__min-price">
        <input type="text" maxlength="6" name="min-price" value="132654" class="price-control__number" />
      </label>
      <span class="price-control__line"></span>
      <label class="price-control__max-price">
        <input type="text" maxlength="6" name="max-price" value="132654" class="price-control__number" />
      </label>
      <ButtonOk>OK</ButtonOk>
    </div>
    <div class="price-control__range-control">
      <div class="price-control__scale">
        <div class="price-control__bar"></div>
      </div>
      <div class="price-control__range-toggle range-toggle-min"></div>
      <div class="price-control__range-toggle range-toggle-max"></div>
    </div>
  </div>
</template>
    
<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import ButtonOk from "../UI/ButtonOk.vue";

@Component({
  components: {
    ButtonOk,
  },
})
export default class FilterPriceControlComponent extends Vue {}
</script>
    
<style lang="scss" scoped>
.price-control {
    @include flex-container(column, flex-start);

    gap: 16px;

    &__counters {
        @include flex-container(row, flex-start, center);

        gap: 8px;
    }

    &__min-price, &__max-price {
        width: max-content;

        border: 1px solid #8A8A8A;
        border-radius: 4px;

        padding: 6px 8px;
    }

    &__number {
        width: 45px;

        @include fontUnify(12, 18, 400);
        letter-spacing: 0.02em;
        color: #2B2B2B;
    }

    &__line {
        width: 12px;
        height: 1px;

        background-color: #2B2B2B;
    }

    &__range-control {
      height: 11px;
      position: relative;
    }

    &__scale {
        height: 3px;
        
        background-color: $color-main;
    }

    &__bar {
        width: 98%;
        height: 3px;

        background-color: $color-main;
        border-radius: 2px;
    }

    &__range-toggle {
        width: 16px;
        height: 16px;

        position: absolute;
        top: -7px;
        background-color: $color-main;
       
        border-radius: 50%;
        cursor: pointer;

        &.range-toggle-min {
            left: 0px;
        }

        &.range-toggle-max {
            right: 0px;
        }
    }
}
</style>
            