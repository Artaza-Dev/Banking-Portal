import { create } from "zustand";

const usersStore = create((set)=>({
    users: JSON.parse(localStorage.getItem('users')) || [],
    currentUser: JSON.parse(localStorage.getItem('CurrentUser')) || null,

    registerUser: (user)=>{
        set((state)=>{
            const updateUser = [...state.users , user]
            localStorage.setItem("users", JSON.stringify(updateUser))
            return {users: updateUser}
        })
    },
    fetchUser: (email)=>{
        set((state)=>{
            const loginUser = state.users.find((val)=> val.email === email) || null
            localStorage.setItem("CurrentUser", JSON.stringify(loginUser))
            return {currentUser: loginUser || null }
        })
    },
    addAmount: (amount, email) => {
    set((state) => {

        const loginUser = state.users.find((val) => val.email === email);
        if (loginUser) {
           
            const updatedUser = {
                ...loginUser,
                balance: Number(amount) + Number(loginUser.balance),
            };
          
            const updatedUsers = state.users.map((user) =>
                user.email === email ? updatedUser : user
            );
            
            localStorage.setItem("users", JSON.stringify(updatedUsers));
            
            return {
                users: updatedUsers,
                currentUser: updatedUser,
            };
        }

        return state; 
    });
},
    withDrawAmount: (amount, email) => {
    set((state) => {

        const loginUser = state.users.find((val) => val.email === email);
        if (loginUser) {
           
            const updatedUser = {
                ...loginUser,
                balance: Number(loginUser.balance) - Number(amount) ,
            };
          
            const updatedUsers = state.users.map((user) =>
                user.email === email ? updatedUser : user
            );
            
            localStorage.setItem("users", JSON.stringify(updatedUsers));
            return {
                users: updatedUsers,
                currentUser: updatedUser,
            };
        }

        return state; 
    });
},




}))

export default usersStore


