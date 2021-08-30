import {
	LOGOUT,
	AUTH,
	AUTH_ERROR,
	AUTH_SUCCESS,
	SAVE_NAME,
	SAVE_NAME_SUCCESS,
	SAVE_NAME_ERROR,
	RENAME
} from '../types/auth'

import API from "../../api/Auth"

import { successAlert, infoAlert, errorAlert } from "./alert.actions.js"

export const auth = (data) => async dispatch => {
	await dispatch({
		type: AUTH
	})
	let res = API.auth(data)
	if (data.remember === true) {
		localStorage.setItem("remembered", JSON.stringify({...res.data, deathTime: (new Date()).getTime() + (1000 * 60 * 60 * 24 * 31)}))
	}
	if (res.status === 201) {
		dispatch(successAlert(res.response, "AUTH"))
		dispatch({
			type: AUTH_SUCCESS,
			payload: res.data
		})
	} else if (res.status === 401) {
		console.log("error");
		dispatch(errorAlert(res.response, "AUTH_ERROR"))
		dispatch({
			type: AUTH_ERROR
		})
	}
}

export const auto_auth = () => async dispatch => {
	API.setDef()
	let data = JSON.parse(localStorage.getItem("remembered"))
	if (data) {
		if (data.deathTime <= ((new Date()).getTime())) {
			localStorage.removeItem("remembered")
		}
		await dispatch({
			type: AUTH
		})
		let res = API.auth(data)
		if (res.status === 201) {
			dispatch({
				type: AUTH_SUCCESS,
				payload: res.data
			})
		} else if (res.status === 401) {
			console.log("error");
			dispatch({
				type: AUTH_ERROR
			})
		}
	}
}

export const logout = (data) => async dispatch => {
	localStorage.removeItem("remembered")
	await dispatch({
		type: LOGOUT
	})
}

export const save_user_name = ({ name, id }) => async dispatch => {
	await dispatch({
		type: SAVE_NAME
	})
	let res = API.save_user_name({ name, id })
	if (res.status === 201) {
		dispatch(successAlert(res.response, "SAVE_NAME_SUCCESS"))
		dispatch({
			type: SAVE_NAME_SUCCESS,
			payload: res.data.name
		})
	} else if (res.status === 401) {
		dispatch(errorAlert(res.response, "SAVE_NAME_ERROR"))
		dispatch({
			type: SAVE_NAME_ERROR
		})
	}
}

export const rename = data => ({ type: RENAME, data })
