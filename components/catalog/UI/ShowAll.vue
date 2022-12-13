<template>
    <button 
        @click="active = !active"
        class="button-show"
        :class="{active: active}"
    >
        <span class="button-show__titile show-all">Посмотреть все</span>
        <span class="button-show__titile hidden">Скрыть</span>
        <div class="button-show__arrow">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="#4490BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </button>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";

@Component({
    components: {
    },
})
export default class ShowAllComponent extends Vue {
    active: boolean = false;
}
</script>

<style lang="scss" scoped>
.button-show {
    width: 100%;

    @include flex-container(row, center, center);

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    gap: 16px;
    padding: 8px;

    &.active {
        .button-show__titile.hidden {
            display: block
        }

        .button-show__titile.show-all {
            display: none
        }

        .button-show__arrow {
            transform: rotateZ(180deg);
        }
    }

    &__titile {
        @include fontUnify(14, 20, 400);
        color: #4490BB;
        letter-spacing: 0.02em;

        &.hidden {
            display: none;
        }
    }

    &__arrow {
        font-size: 0;

        transform: rotateZ(0deg);

        transition: transform .3s ease-in-out;
    }
}
</style>
          