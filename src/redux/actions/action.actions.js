import {
	OPEN_AUTH,
	CLOSE_AUTH,
	OPEN_WINDOW,
	CLOSE_WINDOW,
	ENABLE_TAB,
	DISABLE_TAB,
	MAKE_COMMENT,
	MAKING_COMMENT_SUCCESS,
	MAKING_COMMENT_ERROR,
	START_SEEKING,
	SEEKING_SUCCESS,
	SEEKING_FAILED
} from '../types/actions'

import {
	SET_COMMENT
} from "../types/auth"

import { successAlert, infoAlert, errorAlert } from "./alert.actions.js"

import API from "../../api/Actions"

export const sendMessage = (data) => dispatch => {
	console.log(data);
}

export const openAuth = () => async dispatch => {
	await dispatch({
		type: DISABLE_TAB
	})
	await dispatch({
		type: OPEN_AUTH
	})
}

export const closeAuth = () => async dispatch => {
	await dispatch({
		type: ENABLE_TAB
	})
	await dispatch({
		type: CLOSE_AUTH
	})
}

export const openWindow = () => dispatch => {
	dispatch({
		type: OPEN_WINDOW
	})
}

export const seek_for_video = (name) => (dispatch, getState) => {
	dispatch({
		type: START_SEEKING
	})

	let films = getState().film.list,
		film = films.filter(film => film.name === name)

	if (film.length !== 0) {
		dispatch({
			type: SEEKING_SUCCESS,
			founded_film: film[0].id
		})
	} else {
		dispatch(errorAlert("Фильм не найден!", "SEEKING_FAILED"))
		dispatch({
			type: SEEKING_FAILED
		})
	}

}

export const remove_founded = () => dispatch => {
	dispatch({
		type: SEEKING_FAILED
	})
}

export const closeWindow = () => dispatch => {
	dispatch({
		type: CLOSE_WINDOW
	})
}

export const makeComment = data => async (dispatch, getState) => {
	await dispatch({
		type: MAKE_COMMENT
	})
	if (getState().user.is_auth) {
		API.make_comment({comment: data.comment, user_id: getState().user.user_data.id, id: data.id, post_date: (new Date()).getTime()})
		let users = JSON.parse(localStorage.getItem("users"))
		dispatch({
			type: SET_COMMENT,
			comments: [ ...((users.filter(user => getState().user.user_data.id === user.id) || {}).comments || []) ]
		})

	} else {
		dispatch(errorAlert("Пожалуйста пройдите авторизацию", "MAKING_COMMENT_ERROR"))
	}
}

export const delete_comment = (user_id, id) => (dispatch, getState) => {
	dispatch({
		type: MAKE_COMMENT
	})
	if (getState().user.is_auth) {
		API.delete_comment(user_id, id)
	}
}
