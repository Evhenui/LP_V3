<template>
  <div class="price" :class="[{ active: !price.discount }, {inactive: inactive}]">
    <h2 class="price__discount" v-if="price.discount">
      {{ price.discount }}
    </h2>
    <h1 class="price__total">{{ price.total }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class PriceComponent extends Vue {
  @Prop({ required: true }) price: any;
  @Prop({ required: true }) inactive: boolean;
}
</script>

<style lang="scss" scoped>
.price {
  @include flex-container(column, flex-start);

  gap: 4px;

  &.active {
    .price__discount {
      display: none;
    }

    .price__total {
      color: #f36c21;
    }
  }

  &.inactive {
    .price__discount {
      color: #8A8A8A;
    }

    .price__total {
      color: #8A8A8A;
    }
  }

  &__discount {
    @include fontUnify(12, 16, 400);
    color: #2b2b2b;
    letter-spacing: 0.02em;
    text-decoration-line: line-through;
  }

  &__total {
    @include fontUnify(28, 39, 600);
    letter-spacing: 0.02em;
    color: #fb2424;

    @include bigMobile {
      @include fontUnify(16, 22, 500);
    }
  }
}
</style>
