<template>
    <header class="card-header">
        <div class="card-header__wrapper">
            <div class="card-header__suggestions">
                <Suggestions 
                    v-if="!inactive"
                    :status="typeAvailability.novelty"
                />
            </div>
            <HeaderButtons />
        </div>
    </header>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";
import HeaderButtons from "./HeaderButtons.vue";
import Suggestions from "../UI/Suggestions.vue";

@Component({
components: {
    HeaderButtons,
    Suggestions
},
})
export default class HeaderNavComponent extends Vue {
    @Prop({ required: false }) inactive: boolean;

    typeAvailability = {
        novelty: 'novelty',
        stock: 'stock',
        sales: 'top-sales'
    }
}
</script>

<style lang="scss" scoped>
.card-header {

    &__wrapper {
        @include flex-container(row, space-between, flex-start);

        padding: 0 16px;

        @include bigMobile { 
            padding: 0 8px;
        }
    }

    &__suggestions {
        @include flex-container(column, flex-start, start);

        gap: 4px;
    }
}
</style>
    