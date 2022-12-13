<template>
    <button 
        class="button-status"
        :class="[
            status,
            {filter: changeView},
            {inactive: inactive}
        ]"
        :disabled="inactive"
    >
        <div class="button-status__images">
            <SvgIcon class="button-status__image in-stock" :icon="icons['in-stock']" />
            <SvgIcon class="button-status__image not-available" :icon="icons['not-available']" />
            <SvgIcon class="button-status__image ends" :icon="icons['ends']" />
            <SvgIcon class="button-status__image pre-order" :icon="icons['pre-order']" />
        </div>
        <div class="button-status__titles">
            <span class="button-status__title in-stock">В наличии</span>
            <span class="button-status__title not-available">Нет в наличии</span>
            <span class="button-status__title ends">Заканчивается</span>
            <span class="button-status__title pre-order">Предзаказ</span>
        </div>
    </button>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";
import SvgIcon from "@shared/components/svg/SvgIcon.vue";

@Component({
components: {
    SvgIcon 
},
})
export default class ButtonStatusComponent extends Vue {
    @Prop({ required: true }) status: string;
    @Prop({ required: false }) changeView: boolean;
    @Prop({ required: true }) inactive: boolean;
}
</script>

<style lang="scss" scoped>
.button-status {
    max-width: 152px;
    width: 100%;
    min-height: 28px;

    @include flex-container(row, center, center);

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    border: 1px solid;
    border-radius: 4px;

    padding: 4px;
    gap: 8px;

    &:disabled {
        cursor: auto;
    }

    &.filter &__title{
        @include fontUnify(12, 16, 400); 
    }

    @include bigMobile { 
        width: max-content;

        padding: 0;
    }

    &.in-stock {
        border-color: #159822;

        @include bigMobile { 
            border: none;
        }

        .button-status__image.in-stock {
            display: block;
        }

        .button-status__title.in-stock {
            display: block;
        }
    }

    &.ends {
        border-color: #E25750;

        @include bigMobile { 
            border: none;
        }

        .button-status__image.ends {
            display: block;
        }

        .button-status__title.ends {
            display: block;
        }
    }

    &.not-available {
        border-color: #393D38;

        @include bigMobile { 
            border: none;
        }

        cursor: auto;

        .button-status__image.not-available {
            display: block;
        }

        .button-status__title.not-available {
            display: block;
        }
    }

    &.pre-order {
        border-color: #4490BB;

        @include bigMobile { 
            border: none;
        }

        .button-status__image.pre-order {
            display: block;
        }

        .button-status__title.pre-order {
            display: block;
        }
    }

    &.inactive {
        border-color: #393D38;

        @include bigMobile { 
            border: none;
        }

        cursor: auto;

        .button-status__image.not-available {
            display: block;
        }

        .button-status__image.in-stock {
            display: none;
        }

        .button-status__image.ends {
            display: none;
        }

        .button-status__image.pre-order {
            display: none;
        }

        .button-status__title.not-available {
            display: block;
        }

        .button-status__title.in-stock {
            display: none;
        }

        .button-status__title.ends {
            display: none;
        }

        .button-status__title.pre-order {
            display: none;
        }
    }

    &__images {
        @include bigMobile { 
            display: none;
        }
    }

    &__image {
        display: none;

        &.in-stock {
            color: #159822;
        }

        &.ends {
            color: #E25750;
        }

        &.not-available {
            color: #393D38;
        }

        &.pre-order {
            color: #4490BB;
        }
    }

    &__title {
        display: none;

        @include fontUnify(12, 16, 400);
        letter-spacing: 0.02em;

        @include bigMobile {  
            @include fontUnify(10, 13, 400);  
        }

        &.in-stock {
            color: #159822;
        }

        &.ends {
            color: #E25750;
        }

        &.not-available {
            color: #393D38;
        }

        &.pre-order {
            color: #4490BB;
        }
    }
}

</style>
          