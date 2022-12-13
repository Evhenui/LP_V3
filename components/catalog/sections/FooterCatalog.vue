<template>
    <section class="about-selected ui-rich-text">
    </section>
</template>

<script lang="ts">
import {Component, Vue} from "~/tools/version-types";

@Component({})
export default class FooterCatalogComponent extends Vue {}
</script>
  
<style lang="scss" scoped>
.about-selected {
    border-radius: 12px;

    background-color: white;
    box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);

    padding: 32px;
}
</style>