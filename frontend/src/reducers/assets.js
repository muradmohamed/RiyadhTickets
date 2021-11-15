const initialState ={
   showLogin: false,
   showSignup: false,
};


const assetsReducer =(state= initialState, {type,payload})=>{
    switch (type) {
        case "SHOW_LOGIN":
            return {...state, showLogin: !state.showLogin}

        case "SHOW_SIGNUP":
            return {...state,  showSignup: !state.showSignup}
 
     default:
       return state;
 }
    
}

export default assetsReducer;


//actions
export const showLogin = () => {
    return {
      type: "SHOW_LOGIN",
      payload: 1,
    };
  };

  export const showSignup = () => {
    return {
      type: "SHOW_SIGNUP",
      payload: 1,
    };
  };