import { combineReducers } from 'redux';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'

// Import custom components
import productReducer from './products';
import cartReducer from './cart';
import filtersReducer from './filters';
import wishlistReducer from './wishlist';
import compareReducer from './compare';
import userReducer from './user';


const rootReducer = combineReducers({
    data: productReducer,
    cartList: cartReducer,
    filters: filtersReducer,
    wishlist: wishlistReducer,
    compare: compareReducer,
    user: userReducer,
    Intl
});

export default rootReducer;