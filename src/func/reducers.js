export function postsreducer (state,action){
    switch(action.type){
      case "POST_REQUEST":
        return {
          ...state,
          loading:true,
          error:null
        }
      case "POST_SUCCESS":
        return {
          ...state,
          loading:false,
          error:null,
          posts:action.payload
        }
      case "POST_ERROR":
        return {
          ...state,
          loading:false,
          error:action.payload
        }
    }
  
  }
export function profilereducer (state,action){
    switch(action.type){
      case "PROFILE_REQUEST":
        return {
          ...state,
          loading:true,
          error:null
        }
      case "PROFILE_SUCCESS":
        return {
          ...state,
          loading:false,
          error:null,
          profile:action.payload
        }
        case "PROFILE_POSTS":
          return {
            loading:false,
            error:null,
            profile:{...state.profile,posts:action.payload}
          }
      case "PROFILE_ERROR":
        return {
          ...state,
          loading:false,
          error:action.payload
        }
    }
  
  }
  export function photosreducer (state,action){
    switch(action.type){
      case "PHOTOS_REQUEST":
        return {
          ...state,
          loading:true,
          error:null
        }
      case "PHOTOS_SUCCESS":
        return {
          ...state,
          loading:false,
          error:null,
          photos:action.payload
        }
      case "PHOTOS_ERROR":
        return {
          ...state,
          loading:false,
          error:action.payload
        }
    }
  
  }
  export function friendspage(state, action) {
    switch (action.type) {
      case "FRIENDS_REQUEST":
        return { ...state, loading: true, error: "" };
      case "FRIENDS_SUCCESS":
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: "",
        };
      case "FRIENDS_ERROR":
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  }