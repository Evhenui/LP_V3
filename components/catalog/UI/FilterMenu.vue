<template>
    <div class="filter-menu">
        <h1 class="filter-menu__title">
            <slot></slot>
        </h1>
        <SvgIcon class="filter-menu__close" :icon="icons['cancel']" />
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
export default class FilterMenuComponent extends Vue {
}
</script>

<style lang="scss" scoped>
.filter-menu {
    @include flex-container(row, space-between, center);

    border-radius: 8px;

    background-color: #F3F3F3;

    padding: 8px;

    &__title {
        @include fontUnify(20, 30, 600);
        letter-spacing: 0.02em;
        color: #2B2B2B;
    }

    &__close {
        width: 32px;
        height: 32px;
    }
}
</style>
          