import { ref } from 'vue'

const localStorageFavorites = JSON.parse(localStorage.getItem('recipes'))

export const favorites = ref(localStorageFavorites || [])

const saveRecipes = () => {
  localStorage.setItem('recipes', JSON.stringify(favorites.value))
}

const saveFavorites = () => {
  localStorage.setItem('recipes', JSON.stringify(favorites.value))
}

export const addToFavorites = (recipe) => {
  favorites.value = [...favorites.value, recipe]
}

export const removeFavorite = (id) => {
  favorites.value = favorites.value.filter((r) => r.recipeId !== id)
}
