import { create } from "zustand";

const usersStore = create((set)=>({
    users: JSON.parse(localStorage.getItem('users')) || [],

    registerUser: (user)=>{
        set((state)=>{
            const updateUser = [...state.users , user]
            localStorage.setItem("users", JSON.stringify(updateUser))
            return {users: updateUser}
        })
    }



}))

export default usersStore