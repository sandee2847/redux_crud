// actions
import { Inc, Dec, Inc_By_Value, Dec_By_Value, Add_Users, Create_User, Get_User, Delete_User, Update_User, Replace_User } from "./action";

// initial state
const initialState = {
    users: [],
    counter: 0,
    deleteId: null,
    updateId: null,
    replaceId: null,
}
const userData = (state = initialState, action) => {
    switch (action.type) {
        case Add_Users:
            return { users: state.users = action.payload }
        case Create_User:
            return { users: [...state.users, action.payload] }
        case Get_User:
            return state
        case Delete_User:
            const deleteUser = state.users.filter((item) => item.id !== action.payload);
            const findUser=state.users.find((item)=>item.id===action.payload);
            if(findUser){
                return { users: state.users = deleteUser };
            }
            else{
                alert("User ID Not Found, Enter Valid User ID!");
            }
            return state;
        case Update_User:
            const updatedUserIndex = state.users.findIndex((item) => item.id === action.payload.id)
            state.users[updatedUserIndex].name = action.payload.name;
            return state;
        case Replace_User:
            const replaceUser = state.users.findIndex((item) => item.id === action.payload.id)
            state.users[replaceUser] = action.payload.replacedData;
            return state
        default:
            return state;
    }

}
const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case Inc:
            return { counter: state.counter + 1 }
        case Dec:
            return { counter: state.counter - 1 }
        case Inc_By_Value:
            return { counter: state.counter + action.payload }
        case Dec_By_Value:
            return { counter: state.counter - action.payload }
        default: return state;
    }
}
export { userData, countReducer };