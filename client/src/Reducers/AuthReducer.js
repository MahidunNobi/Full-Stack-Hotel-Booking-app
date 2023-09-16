const AuthReducer = (state, action) =>{
    switch (action.type) {
        case "Login-Start":
            return {
                ...state,
                loading:true
            };
        case "Register-Start":
            return {
                ...state,
                loading:true
            };
            case "Login-Success":
                return {
                    ...state,
                loading: false,
                err: null,
                user: action.payload
            };
            case "Register-Success":
                return {
                    ...state,
                    loading:false,
                    err: null
                };
        case "Login-Failure":
            return{                
                user: null,
                loading:false,
                err: action.payload
            };
        case "Logout":
            return{
                user: null,
                loading: false,
                err: null
            };
        case "Set-Last-Navigated-Link":
            return{
                ...state,
                lastLink: action.payload
            };
        case "Clear-Last-Link":
            return{
                ...state,
                lastLink: null,
            };
            
        default:
            return {...state}
    }
}
export default AuthReducer