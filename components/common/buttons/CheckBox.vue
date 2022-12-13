<template>
    <label class="checkbox" @click="checked = !checked">
      <input type="checkbox" />
      <slot class="checkbox__caption"></slot>
    </label>
  </template>
  
  <script lang="ts">
  import { VModel, Watch } from "vue-property-decorator";
  import { Options, Vue } from "~/tools/version-types";
  
  @Options({
    name: "CheckBoxComponent",
  })
  export default class CheckBoxComponent extends Vue {
 /*    @VModel()
    checked: boolean = false;
  
    @Watch("checked")
    checkedChange() {
      this.$emit("change", this.checked);
    } */
  }
  </script>
  
  <style lang="scss" scoped>
  .checkbox {
    position: relative;
  
    & input {
      width: 0;
      height: 0;
      position: absolute;
      left: 0;
      top: 50%;
      z-index: -1;
      opacity: 0;
    }
  
    & span {
      @include flex-container(row, space-between, center);
      gap: 24px;
  
      user-select: none;
    }
  
    & span::before {
      content: "";
      display: inline-block;
      width: 24px;
      height: 24px;
      border: 1px solid $color-border-grey-light;
      border-radius: 4px;
      background-repeat: no-repeat;
      background-position: center;
      transition: 0.2s ease;
    }
  
    & input:not(:checked) + span:hover::before {
      border-color: $color-main;
    }
  
    & input:checked + span::before {
      border-color: $color-main;
      background-color: $color-main;
      background-image: url("@/assets/icons/check-icon.svg");
    }
  
    &__caption {
      @include fontUnify;
  
      @include mobile {
        @include fontUnify(12, 16);
      }
    }
  }
  </style>