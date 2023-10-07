<script setup></script>

<template>
  <header class="bg-orange-100 shadow-md relative h-16">
    <div class="container mx-auto p-4">
      <div class="flex justify-between items-center">
        <router-link to="/">
          <h1 class="text-2xl font-bold text-rose-600">
            Admin Dashboard
          </h1></router-link
        >
      </div>
    </div>
  </header>

  <div class="flex flex-col h-screen">
    <div class="flex flex-row">
      <!-- Sidebar -->
      <div class="bg-zinc-700 w-44 h-full overflow-y-auto shadow-lg">
        <ul class="space-y-2 font-bold text-white mt-4 text-center text-xl">
          <li class="block py-2 px-4 hover:bg-gray-200 hover:text-gray-900">
            <router-link to="/">Home</router-link>
          </li>
          <li class="block py-2 px-4 hover:bg-gray-200 hover:text-gray-900">
            <router-link to="/">Data Table</router-link>
          </li>
          <li class="block py-2 px-4 hover:bg-gray-200 hover:text-gray-900">
            <router-link to="/">Product Info</router-link>
          </li>
        </ul>
      </div>
      <!-- Main Content -->
      <div class="flex-grow">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
