<template>
    <button 
        class="button-buy"
        :class="[state, {disabled: inactive}]"
    >
        <div class="button-buy__images">
            <SvgIcon class="button-buy__image buy" :icon="icons['card-buy']" />
            <SvgIcon class="button-buy__image report" :icon="icons['card-report']" />
            <SvgIcon class="button-buy__image pre-order" :icon="icons['card-pre-order']" />
        </div>
        <div class="button-buy__titles">
            <span class="button-buy__title buy">Купить</span>
            <span class="button-buy__title report">Сообщить</span>
            <span class="button-buy__title pre-order">Предзаказ</span>
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
export default class ButtonBuyComponent extends Vue {
    @Prop({ required: true }) state: string;
    @Prop({ required: true }) inactive: boolean;
}
</script>

<style lang="scss" scoped>
.button-buy {
    width: 100%;

    @include flex-container(row, center, center);

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    border-radius: 6px;

    padding: 8px;
    gap: 8px;

    &.buy {
        background-color: #F36C21;

        .button-buy__image.buy {
            display: block;
        }

        .button-buy__title.buy {
            display: block;
        }
    }

    &.report {
        background-color: #8A8A8A;

        .button-buy__image.report {
            display: block;
        }

        .button-buy__title.report {
            display: block;
        }
    }

    &.pre-order {
        background-color: #4490BB;

        .button-buy__image.pre-order {
            display: block;
        }

        .button-buy__title.pre-order {
            display: block;
        }
    }

    &.disabled {
        background-color: #8A8A8A;

        .button-buy__image.report {
            display: block;
        }

        .button-buy__title.report {
            display: block;
        }

        .button-buy__image.buy, 
        .button-buy__image.pre-order {
            display: none;
        }

        .button-buy__title.buy, 
        .button-buy__title.pre-order {
            display: none;
        }
    }

    &__image {
        width: 24px;
        height: 24px;
        
        display: none;

        color: white;

        @include bigMobile { 
            width: 16px;
            height: 16px;
        }
    }

    &__title {
        display: none;

        @include fontUnify(18, 24, 400);
        letter-spacing: 0.02em;
        color: white;

        @include bigMobile { 
            @include fontUnify(12, 16, 400);
        }
    }
}
</style>
    