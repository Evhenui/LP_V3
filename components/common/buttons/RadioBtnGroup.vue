<template>
  <div class="radio-label__w">
    <label
      class="radio-label"
      :for="input.value"
      v-for="input of inputList"
      :key="input.value"
    >
      <input
        type="radio"
        :id="input.value"
        :value="input.value"
        :name="name"
        :checked="isChecked"
        @input="$emit('input', $event.target.value)"
      />
      <span class="radio-label__checkmark"></span>
      <span class="radio-label__option">{{ input.title }}</span>
    </label>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";

@Options({
  name: "RadioBtnGroupComponent",
})
export default class RadioBtnGroupComponent extends Vue {
  @Prop({ required: true }) inputList: any[];
  @Prop({ required: true }) name: string;
  @Prop({ required: false }) isChecked: boolean;
}
</script>

<style lang="scss" scoped>
.radio-label {
  position: relative;

  @include fontUnify(16, 24);

  padding-left: 40px;
  cursor: pointer;

  &:hover {
    & .radio-label__checkmark {
      border-color: $color-main;
    }
  }

  & input {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked {
      & + .radio-label__checkmark {
        background-color: $color-main;
        border: none;

        &::before {
          display: block;
        }
      }
    }
  }

  &__checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;

    border-radius: 50%;
    background-color: white;
    border: 1px solid $color-border-grey-light;

    transition: 0.2s ease;

    &::before {
      content: "";
      position: absolute;
      display: none;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
    }
  }

  &__option {
  }

  &__w {
    @include flex-container;
    gap: 16px;

    @include bigMobile {
      flex-direction: column;
    }
  }
}
</style>
