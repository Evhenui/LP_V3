<template>
    <nav class="nav-buttons">
        <div 
            class="nav-buttons__like"
            :class="{active: activeLike}"
            @click="(activeLike = !activeLike)"
        >
            <svg class="nav-buttons__like-image" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="nav-buttons__like-state" d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z" stroke="#8A8A8A" stroke-width="1.5" stroke-linejoin="round"/>
            </svg>
        </div>
        <div 
            class="nav-buttons__comparison"
            :class="{active: activeComparison}"
            @click="(activeComparison = !activeComparison)"
        >
            <svg class="nav-buttons__comparison-image" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="nav-buttons__comparison-state" d="M9.46158 15.7672L5.23079 6.4043L1 15.7672C1 16.8959 1.44574 17.9784 2.23917 18.7765C3.0326 19.5747 4.10871 20.023 5.23079 20.023C6.35287 20.023 7.42898 19.5747 8.22241 18.7765C9.01584 17.9784 9.46158 16.8959 9.46158 15.7672Z" stroke="#8A8A8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path class="nav-buttons__comparison-state" d="M23.0006 15.7672L18.7699 6.4043L14.5391 15.7672C14.5391 16.8959 14.9848 17.9784 15.7782 18.7765C16.5717 19.5747 17.6478 20.023 18.7699 20.023C19.8919 20.023 20.968 19.5747 21.7615 18.7765C22.5549 17.9784 23.0006 16.8959 23.0006 15.7672Z" stroke="#8A8A8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path class="nav-buttons__comparison-state" d="M2.6875 6.4043H21.303" stroke="#8A8A8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path class="nav-buttons__comparison-state" d="M12.0039 6.40469V3" stroke="#8A8A8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <line class="nav-buttons__comparison-state" x1="23" y1="16.5" x2="15" y2="16.5" stroke="#8A8A8A"/>
                <line class="nav-buttons__comparison-state" x1="23" y1="17.5" x2="15" y2="17.5"/>
                <line class="nav-buttons__comparison-state" x1="22" y1="18.5" x2="16" y2="18.5"/>
                <line class="nav-buttons__comparison-state" x1="21" y1="19.5" x2="17" y2="19.5"/>
                <line class="nav-buttons__comparison-state" x1="9" y1="16.5" x2="1" y2="16.5" stroke="#8A8A8A"/>
                <line class="nav-buttons__comparison-state" x1="9" y1="17.5" x2="1" y2="17.5"/>
                <line class="nav-buttons__comparison-state" x1="8" y1="18.5" x2="2" y2="18.5"/>
                <line class="nav-buttons__comparison-state" x1="7" y1="19.5" x2="3" y2="19.5"/>
            </svg>

            <svg class="nav-buttons__comparison-added" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.46158 15.7672L5.23079 6.4043L1 15.7672C1 16.8959 1.44574 17.9784 2.23917 18.7765C3.0326 19.5747 4.10871 20.023 5.23079 20.023C6.35287 20.023 7.42898 19.5747 8.22241 18.7765C9.01584 17.9784 9.46158 16.8959 9.46158 15.7672Z" stroke="#F6A500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23.0006 15.7672L18.7699 6.4043L14.5391 15.7672C14.5391 16.8959 14.9848 17.9784 15.7782 18.7765C16.5717 19.5747 17.6478 20.023 18.7699 20.023C19.8919 20.023 20.968 19.5747 21.7615 18.7765C22.5549 17.9784 23.0006 16.8959 23.0006 15.7672Z" stroke="#F6A500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.6875 6.4043H21.303" stroke="#F6A500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.0039 6.40469V3" stroke="#F6A500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <g clip-path="url(#clip0_5003_59936)">
                <rect x="14" width="10" height="10" rx="5" fill="#159822"/>
                <path d="M16.918 5.20801L18.168 6.45801L21.0846 3.54134" stroke="white" stroke-width="0.625" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.9987 9.16634C21.2999 9.16634 23.1654 7.30086 23.1654 4.99967C23.1654 2.69849 21.2999 0.833008 18.9987 0.833008C16.6975 0.833008 14.832 2.69849 14.832 4.99967C14.832 7.30086 16.6975 9.16634 18.9987 9.16634Z" stroke="white" stroke-width="0.625" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <line x1="23" y1="16.5" x2="15" y2="16.5" stroke="#F6A500"/>
                <line x1="9" y1="16.5" x2="1" y2="16.5" stroke="#F6A500"/>
                <line x1="23" y1="17.5" x2="15" y2="17.5" stroke="#F6A500"/>
                <line x1="9" y1="17.5" x2="1" y2="17.5" stroke="#F6A500"/>
                <line x1="22" y1="18.5" x2="16" y2="18.5" stroke="#F6A500"/>
                <line x1="8" y1="18.5" x2="2" y2="18.5" stroke="#F6A500"/>
                <line x1="21" y1="19.5" x2="17" y2="19.5" stroke="#F6A500"/>
                <line x1="7" y1="19.5" x2="3" y2="19.5" stroke="#F6A500"/>
                <defs>
                <clipPath id="clip0_5003_59936">
                <rect x="14" width="10" height="10" rx="5" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";

@Component({
components: {},
})
export default class HeaderButtonsComponent extends Vue {
    activeLike: boolean = false;
    activeComparison: boolean = false;
}
</script>

<style lang="scss" scoped>
.nav-buttons {
    @include flex-container(row, flex-start, center);

    gap: 16px;

    @include bigMobile {
        gap: 8px;
    }

    &__like, &__comparison {
        font-size: 0;

        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

        cursor: pointer;
    }

    &__like:hover &__like-state {
        stroke: #E14141;
    }

    &__like.active &__like-state {
        stroke: #E14141;
        fill: #E14141;
    }

    &__comparison:hover &__comparison-state {
        stroke: #F6A500;
    }

    &__comparison.active {
        .nav-buttons__comparison-image {
            display: none;
        }

        .nav-buttons__comparison-added {
            display: block;
        }
    }

    &__comparison-added {
        display: none;
    }

    &__like-image, &__comparison-image, &__comparison-added {
        @include bigMobile {
            width: 16px;
            height: 16px;
        }
    }
}
</style>
    