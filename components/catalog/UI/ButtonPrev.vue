<template>
    <button class="button-prev">
        <SvgIcon class="button-prev__image" :icon="icons['nav-arrow-left']" />
    </button>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";

@Component({
    components: {
        SvgIcon
    }
})
export default class ButtonPrevComponent extends Vue {}
</script>

<style lang="scss" scoped>
.button-prev {
    width: 48px;
    height: 48px;

    @include flex-container(column, center, center);

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 50px;

    background-color: white;

    &__image {
        width: 24px;
        height: 24px;

        color: #2B2B2B;
    }
}
</style>
      