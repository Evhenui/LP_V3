<template>
    <button class="button-page">
        <span class="button-page__number">
            <slot></slot>
        </span>
    </button>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";

@Component({
    components: {}
})
export default class ButtonPageComponent extends Vue {}
</script>

<style lang="scss" scoped>
.button-page {
    width: 47px;
    height: 47px;
    
    @include flex-container(column, center, center);

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    background-color: white;

    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 50px;

    &.active &__number {
        color: #F36C21;
    }

    &__number {
        @include fontUnify(20, 30, 600);
        text-transform: uppercase;
        color: #2B2B2B;
    }
}
</style>
      