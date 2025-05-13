import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// حالت اولیه  
const initialState = {
    products: [],
    filteredProducts: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'  
    error: null,
    searchTerm: '',
    selectedCategory: '',
    categories: [],
    selectedArea: '',
    areas: [],
};

// Async Thunk برای دریافت محصولات  
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        return response.data.meals.map(meal => ({
            ...meal,
            price: Math.floor(Math.random() * 50000) + 100000
        }));
    }
);

// Async Thunk برای دریافت محصول بر اساس ID  
export const fetchProductById = createAsyncThunk(
    'products/fetchProductById',
    async (productId) => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productId}`);
        return response.data;
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // Reducerهای سنکرون (در صورت نیاز)  
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload.toLowerCase();
            state.filteredProducts = state.products.filter(product => product.strMeal.toLowerCase().includes(state.searchTerm) &&
                (state.selectedCategory ? product.strCategory === state.selectedCategory : true))
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload.toLowerCase();
            state.filteredProducts = state.products.filter(product => product.strMeal.toLowerCase().includes(state.searchTerm.toLowerCase()) &&
                (action.payload ? product.strCategory === action.payload : true))
        },
        setSelectedArea: (state, action) => {
            state.selectedArea = action.payload.toLowerCase();
            state.filteredProducts = state.products.filter(product => product.strArea.toLowerCase().includes(state.searchTerm.toLowerCase()) &&
                (action.payload ? product.strArea === action.payload : true))

        }
    },
    extraReducers(builder) {
        builder
            // حالت دریافت همه محصولات  
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
                state.filteredProducts = action.payload;
                state.error = null;
                state.categories = [...new Set(action.payload.map(p => p.strCategory))];
                state.areas = [...new Set(action.payload.map(p => p.strArea))]
                


            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            // حالت دریافت محصول بر اساس ID  
            .addCase(fetchProductById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // اگر محصول قبلاً در لیست نیست، آن را اضافه کنید  
                const existingProduct = state.products.find(p => p.id === action.payload.id);
                if (!existingProduct) {
                    state.products.push(action.payload);
                }
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

// Selectorها  
export const selectAllProducts = (state) => state.products.products;
export const selectFilteredProducts = (state) => state.products.filteredProducts;
export const selectProductById = (state, productId) =>
    state.products.products.find(product => product.idMeal === productId);
export const selectProductsStatus = (state) => state.products.status;
export const selectProductsError = (state) => state.products.error;
export const selectCategories = (state) => state.products.categories;
export const selectAreas = (state) => state.products.areas;

export const { setSearchTerm, setSelectedCategory, setSelectedArea } = productsSlice.actions;
export default productsSlice.reducer;
