<template>
  <footer class="card-footer">
    <Price 
        :price="price"
        :inactive="inactive"
    /> 
    <ButtonBuy 
        :state="status.buttonState.buy"
        :inactive="inactive"
    />
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "~/tools/version-types";
import { Prop } from "vue-property-decorator";
import ButtonBuy from "../UI/ButtonBuy.vue";
import Price from "../UI/Price.vue";

@Component({
  components: {
    ButtonBuy,
    Price,
  },
})
export default class CardFooterComponent extends Vue {
  @Prop({ required: true }) status: any;
  @Prop({ required: true }) price: any;
  @Prop({ required: true }) inactive: boolean;
}
</script>

<style lang="scss" scoped>
.card-footer {
  @include flex-container(column, center);

  gap: 8px;

  &__price {
    @include fontUnify(28, 39, 600);
    letter-spacing: 0.02em;
    color: #f36c21;

    @include bigMobile {
      @include fontUnify(16, 22, 500);
    }
  }
}
</style>
