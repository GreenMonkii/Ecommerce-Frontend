import { useReducer } from "react";
import { addToCart, removeFromCart } from "../data/client";

const actions = Object.freeze({
    ADD: "ADD_TO_CART",
    REMOVE: "REMOVE_FROM_CART",
});

/**
 * Reducer function for managing the cart state.
 * @param {Array} state - The current cart state.
 * @param {Object} action - The action object.
 * @returns {Array} - The updated cart state.
 */
const cartReducer = (state, action) => {
    switch (action.type) {
        case actions.ADD:
            try {
                addToCart(action.payload);
                return [...state, action.payload];
            } catch (error) {
                // Handle error
                console.error("Failed to add item to cart:", error);
                return state;
            }
        case actions.REMOVE:
            try {
                removeFromCart(action.payload);
                return state.filter((item) => item.id !== action.payload.id);
            } catch (error) {
                // Handle error
                console.error("Failed to remove item from cart:", error);
                return state;
            }
        default:
            return state;
    }
};

/**
 * Custom hook for managing the cart state.
 * @returns {Object} - The cart state and dispatch function.
 */
const useCart = () => {
    const [cart, dispatch] = useReducer(cartReducer, []);
    return { cart, dispatch };
};

export default useCart;
