// TYPES IMPORT
import {
	LOGOUT,
	AUTH,
	AUTH_ERROR,
	AUTH_SUCCESS,
	SAVE_NAME,
	SAVE_NAME_SUCCESS,
	SAVE_NAME_ERROR,
	RENAME,
	SET_COMMENT
} from '../types/auth'

// Default Data, If I don't add it, I'll take an error
const initialState = {
	is_auth: false,
	user_data: {
		name: null,
	},
	is_loading: false
}

const actionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH:
			return {
				...state,
				is_loading: true
			}
		case AUTH_SUCCESS:
			return {
				...state,
				user_data: { ...action.payload },
				is_auth: true,
				is_loading: false
			}
		case AUTH_ERROR:
			return {
				...state,
				user_data: null,
				is_auth: false,
				is_loading: false
			}
		case SAVE_NAME:
			return {
				...state,
				is_renaming: true
			}
		case SAVE_NAME_SUCCESS:
			return {
				...state,
				user_data: {
					...state.user_data,
					name: action.payload
				},
				is_renaming: false
			}
		case SAVE_NAME_ERROR:
			return {
				...state,
				user_data: null,
				is_renaming: false
			}
		case RENAME:
			return {
				rename_data: action.data
			}
		case LOGOUT:
			return {
				...state,
				user_data: null,
				is_auth: false,
				is_loading: false
			}
		case SET_COMMENT:
			return {
				...state,
				user_data: {
					...state.user_data,
					comments: [...action.comments]
				}
			}
		default:
			return state
	}
}

export default actionsReducer
