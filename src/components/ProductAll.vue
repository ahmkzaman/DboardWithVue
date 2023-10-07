<script setup>
import { ref, onBeforeMount } from "vue";

const products = ref([]);

onBeforeMount(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      products.value = data;
    });
});

const Header = [
  { text: "TITLE", value: "title" },
  { text: "PRICE ($)", value: "price" },
  { text: "NUMBER OF ITEMS", value: "rating.count" },
  { text: "DETAILS", value: "id" },
];
</script>
<!--  -->
<template>
  <div>
    <EasyDataTable
      buttons-pagination
      :rows-per-page="10"
      :headers="Header"
      :items="products"
      theme-color="#1d90ff"
      table-class-name="customize-table"
      header-text-direction="center"
      body-text-direction="center"
    >
      <template #item-id="{ id }">
        <button
          class="bg-rose-500 hover:bg-sky-500 text-white hover:text-gray-900 rounded-full px-3 py-2 my-2 text-sm font-semibold transition duration-300 ease-in-out transform hover:scale-105"
          @click="() => $router.push({ name: 'product', params: { id } })"
        >
          View Details
        </button>
      </template>
    </EasyDataTable>
  </div>
</template>

<style>
.customize-table {
  --easy-table-border: 1px solid #445269;
  --easy-table-row-border: 1px solid #445269;

  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 50px;
  --easy-table-header-font-color: #201f2b;
  --easy-table-header-background-color: #a1c1ed;

  --easy-table-header-item-padding: 10px 15px;

  --easy-table-body-even-row-font-color: #fff;
  --easy-table-body-even-row-background-color: #8692a6;

  --easy-table-body-row-height: 12px;
  --easy-table-body-row-font-size: 12px bold;

  --easy-table-body-row-hover-font-color: #2d3a4f;
  --easy-table-body-row-hover-background-color: #f4f0ec;

  --easy-table-body-item-padding: 5px 5px;

  --easy-table-footer-background-color: #2d3a4f;
  --easy-table-footer-font-color: #c0c7d2;
  --easy-table-footer-font-size: 14px;
  --easy-table-footer-padding: 0px 10px;
  --easy-table-footer-height: 50px;

  --easy-table-rows-per-page-selector-width: 70px;
  --easy-table-rows-per-page-selector-option-padding: 10px;
  --easy-table-rows-per-page-selector-z-index: 1;

  --easy-table-scrollbar-track-color: #2d3a4f;
  --easy-table-scrollbar-color: #2d3a4f;
  --easy-table-scrollbar-thumb-color: #4c5d7a;
  --easy-table-scrollbar-corner-color: #2d3a4f;

  --easy-table-loading-mask-background-color: #2d3a4f;
}
</style>
