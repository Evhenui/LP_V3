<template>
    <section 
        class="main"
        :class="{active: activeFilters}"
    >
        <NavigationBar :activeFilters="activeFilters"/>
        <CatalogList class="main__catalog-list" :changeView="changeView"/>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";
import NavigationBar from "./NavigationBar.vue";
import CatalogList from "./CatalogList.vue";
import SelectedFilter from "./SelectedFilter.vue";

@Component({
    components: {
        NavigationBar,
        CatalogList,
        SelectedFilter
    },
})
export default class CatalogMainComponent extends Vue {
    @Prop({required: false}) changeView: boolean;
    @Prop({required: false}) activeFilters: boolean;
}
</script>

<style lang="scss" scoped>
.main {
    @include flex-container(row, flex-start, flex-start);

    gap: 8px;

    @include bigMobile { 
        @include flex-container(column, flex-start, flex-start);

        gap: 0;
        
        &.active {
            gap: 8px;

            .main__catalog-list {
                display: none;
            }
        }
    }

    &__selected {
        display: none;

        @include bigMobile { 
            width: 100%;

            display: flex;
        }
    }
}
</style>
            