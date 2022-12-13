<template>
    <button class="button-more">
        <SvgIcon class="button-more__image" :icon="icons['refresh']" />
        <span class="button-more__title">Показать ещё</span>
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
export default class ButtonShowMoreComponent extends Vue {}
</script>

<style lang="scss" scoped>
.button-more {
    width: max-content;

    @include flex-container(row, center, center);

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
    border-radius: 36px;

    padding: 8px 16px;
    gap: 32px;

    &__image {
        width: 24px;
        height: 24px;
    }

    &__title {
        @include fontUnify(20, 28, 400);
        letter-spacing: 0.02em;
        color: #2B2B2B;
    }
}
</style>
      