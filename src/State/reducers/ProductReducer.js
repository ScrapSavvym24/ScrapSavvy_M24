
const ProductReducer = (state = {}, action) => {
    switch (action.type) {
        case "product":
            return {state: action.payload};
        default:
            return state;
    }
}

export default ProductReducer;