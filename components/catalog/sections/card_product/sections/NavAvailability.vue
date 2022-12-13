<template>
    <nav class="availability">
        <ButtonStatus 
            :status="status.buttonStatus.inStock" 
            :changeView="changeView"
            :inactive="inactive"
        />
        <div class="availability__suggestions">
            <Delivery :inactive="inactive" />
            <Credit :inactive="inactive" />
        </div>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";
import Credit from "../UI/Credit.vue";
import Delivery from "../UI/Delivery.vue";
import ButtonStatus from "../UI/ButtonStatus.vue";

@Component({
components: {
    ButtonStatus,
    Credit,
    Delivery
},
})
export default class NavAvailabilityComponent extends Vue {
    @Prop({ required: true }) status: any;
    @Prop({ required: false }) changeView: boolean;
    @Prop({ required: true }) inactive: boolean;
    
}
</script>

<style lang="scss" scoped>
.availability {
    @include flex-container(row, center, center);

    gap: 28px;

    @include bigMobile { 
        @include flex-container(row, space-between, center);

        gap: 0;
    }

    &__suggestions {
        @include flex-container(row, center, center);

        gap: 16px;

        @include bigMobile { 
            gap: 8px;
        }
    }
}
</style>
    