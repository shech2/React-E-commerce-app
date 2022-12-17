import { createContext, useReducer } from "react";
import logger from 'use-reducer-logger';

export const Store = createContext();

const initialState = {
    cart: {
        cartItems: [],
        total: 0,
    },
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: {
                    cartItems: [...state.cart.cartItems, action.payload.product],
                    total: state.cart.total + action.payload.price,
                },
            };
        case "DELETE_CART":
            return {
                ...state,
                cart: {
                    cartItems: [],
                    total: 0,
                },
            };

        case "ADD_TO_CART_ERROR":
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default function StoreProvider(props) {
    const [state, dispatch] = useReducer(logger(reducer), initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{props.children}</Store.Provider>;
};

