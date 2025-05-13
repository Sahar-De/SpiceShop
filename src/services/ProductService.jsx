import axios from "axios"
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';


const ProductService = {
    searchMealsByName: async (query) => {
        const response = await axios.get(`${BASE_URL}/search.php?s=${query}`);
        return response.data.meals || [];

    },

    listMealsByLetter: async (letter) => {
        const response = await axios.get(`${BASE_URL}/search.php?f=${letter}`);
        return response.data.meals || [];
        
    },

    getMealById: async (id) => {
        const response = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
        return response.data.meals || [];
    },

    getRandomMeal: async () => {
        const response = await axios.get(`${BASE_URL}/random.php`);
        return response.data.meals || [0];
    },

    categoriesList: async () => {
        const response = await axios.get(`${BASE_URL}/categories.php`);
        return response.data.categories;
    },
    
    
}