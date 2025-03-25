import { create } from "zustand";
import api from "../lib/api";

export const useAuthStore=create((set)=>({
    authUser:null,
    isSigningUp:false,
    isLoggingIng:false,
    isUpdatingProfile:false,

    isCheckingAuth:true,

    checkAuth:async ()=>{
        try {
            const res=await api.get("auth/check");
            set({authUser:res.data})
        } catch (error) {
            console.log("error in checkAuth:",error);
            set({authUser:null})
        }finally{
            set({isCheckingAuth:false})
        }
    }
}))