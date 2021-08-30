// TYPES IMPORT
  import {
    IS_SEND_LOADING,
    IS_SEND_FAILED_LOADING,
    IS_SEND_LOADED,
    OPEN_AUTH,
    CLOSE_AUTH,
    OPEN_WINDOW,
    CLOSE_WINDOW,
	ENABLE_TAB,
	DISABLE_TAB,
	START_SEEKING,
	SEEKING_SUCCESS,
	SEEKING_FAILED
  } from "../types/actions.js"

// Images Imports
  import semf_ucuk_webp from "../../assets/images/photos/semf_ucuk.webp"
  import dik_adalin_webp from "../../assets/images/photos/dik_adalin.webp"
  import jeng_kol_webp from "../../assets/images/photos/jeng_kol.webp"
  import pet_romak_webp from "../../assets/images/photos/pet_romak.webp"

  import work1 from "../../assets/images/works/work1.webp"
  import work2 from "../../assets/images/works/work2.webp"
  import work3 from "../../assets/images/works/work3.webp"
  import work4 from "../../assets/images/works/work4.webp"
  import work5 from "../../assets/images/works/work5.webp"
  import work6 from "../../assets/images/works/work6.webp"
  import work7 from "../../assets/images/works/work7.webp"
  import work8 from "../../assets/images/works/work8.webp"
  import work9 from "../../assets/images/works/work9.webp"
  import work10 from "../../assets/images/works/work10.webp"
  import work11 from "../../assets/images/works/work11.webp"
  import work12 from "../../assets/images/works/work12.webp"

  import face_1_webp from "../../assets/images/photos/face-1.webp"
  import face_2_webp from "../../assets/images/photos/face-2.webp"
  import face_3_webp from "../../assets/images/photos/face-3.webp"
  import face_4_webp from "../../assets/images/photos/face-4.webp"
  import face_5_webp from "../../assets/images/photos/face-5.webp"

// Default Data, If I don't add it, I'll take an error
let initialState = {
  data: null,
  loadings: {
    is_send_loading: false,
    is_open_video_winodw: false,
	is_seeking: false
  },
  founded_film: null,
  content_tab_available: true,
  windows: {
	  auth: {
		  is_open: false
	  }
  }
}

// All Action Project Requires here
const actionsReducer = (state = initialState, action) => {

  switch (action.type) {
    case IS_SEND_LOADING:
      return {
        ...state,
        loadings: {
          ...state.loadings,
          is_send_loading: true
        }
      }
    case IS_SEND_FAILED_LOADING:
      return {
        ...state,
        loadings: {
          ...state.loadings,
          is_send_loading: false
        }
      }
    case IS_SEND_LOADED:
      return {
        ...state,
        data: action.data,
        loadings: {
          ...state.loadings,
          is_send_loading: false
        }
      }
    case OPEN_AUTH:
      return {
        ...state,
        windows: {
			...state.windows,
			auth: {
				...state.windows.auth,
				is_open: true
			}
		}
      }
    case CLOSE_AUTH:
      return {
        ...state,
		windows: {
			...state.windows,
			auth: {
				...state.windows.auth,
				is_open: false
			}
		}
      }
	case DISABLE_TAB:
		return {
			...state,
			content_tab_available: false
		}
	case ENABLE_TAB:
		return {
			...state,
			content_tab_available: true
		}
	case START_SEEKING:
		return {
			...state,
			loadings: {
				...state.loadings,
				is_seeking: true
			}
		}
	case SEEKING_SUCCESS:
		return {
			...state,
			loadings: {
				...state.loadings,
				is_seeking: false
			},
			founded_film: action.founded_film
		}
	case SEEKING_FAILED:
		return {
			...state,
			loadings: {
				...state.loadings,
				is_seeking: false
			},
			founded_film: null
		}
    default:
      return state
  }
}

export default actionsReducer
