import { Modules } from "../class/Modules";

const login=new Modules();
login.namespaced=true;
login.state={
   token:"Selçuk DEMİRCİOĞLU",
   role:null
}

login.actions={
   addlogin:({ state, commit }, login)=>{ 
       commit('setToken',login.token);
       commit('setRole',login.role);
   }
}

login.mutations={
   setToken:(state,token)=>{state.token=token },
   setRole:(state,role)=>{state.role=role}
}

login.getters={
   getToken:(state, getters, rootState)=>{
       return state.token;
   },
   getRole:(state, getters, rootState)=>{
       return state.role;
   }, 
}

export default login;