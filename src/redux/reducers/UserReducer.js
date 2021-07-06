import { getUsers, getUser, saveUser, updateUser, deleteUser, loading, error } from "../types/userType";
const initialState = {
    users: [],
    user: '',
    save: '',
    update: '',
    delete: '',
    loading: false,
    error: ''
}

export default ( state =  initialState, action) => {
    switch (action.type) {
        case getUsers:
            return { ...state, users: action.users, loading: action.loading }
        break;

        case getUser:
            return { ...state, user: action.user, loading: action.loading }
        break

        case saveUser:
            return { ...state, save: action.message, loading: action.loading }
        break

        case updateUser:
            return { ...state, update: action.message, loading: action.loading }
        break

        case deleteUser:
            return { ...state, delete: action.message, loading: action.loading }
        break

        case loading:
            return { ...state, loading: true }
        break;

        case error:
            return { ...state, error: action.error, cargando: action.cargando };
        break;
    
        default:
            return initialState
    }
}