<script setup>
import FavoriteRecipes from './components/FavoriteRecipes.vue'
import RecipeSearchForm from './components/RecipeSearchForm.vue'
</script>

<template>
  <div>
    <h1 class="text-center text-primary">Favorite Recipes</h1>
    <div class="app-container mx-auto">
      <main class="grid">
        <div class="col-12 md:col-6">
          <RecipeSearchForm />
        </div>
        <div class="col-12 md:col-6">
          <FavoriteRecipes />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  max-width: 100rem;
}
</style>
