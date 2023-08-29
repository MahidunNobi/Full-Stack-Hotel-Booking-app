const SearchReducer = (state, action) =>{
    switch (action.type) {
        case "All-Ok":
            return {
                ...state,
                destination: action.payload
            };
        case "Set-Date-Range-State":
            return {
                ...state,
                DateRangeState: action.payload
            };
            case "Set-Options":
                const name = action.name;
                const WtoDo = action.WtoDO
                return {
                    ...state,
                    options: {
                        ...state.options,
                        [name]: WtoDo === "i"? state.options[name] +1 : state.options[name]-1
                    }
                };
            case "Load_Data":

                return {
                    ...state,
                    data: action.payload
                };
            case "Set_Min_Price":

                return {
                    ...state,
                    minimumPrice: action.payload
                };

            case "Set_Max_Price":

                return {
                    ...state,
                    maximumPrice: action.payload
                };
    
        default:
            return state;
    }
    
}

export default SearchReducer