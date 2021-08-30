import {
	GETTING_FILM_LIST,
	GOT_FILM_LIST,
	GETTING_FILM_LIST_FAILED,
	GETTING_GENRES_LIST,
	GOT_GENRES_LIST,
	GETTING_GENRES_LIST_FAILED,
} from '../types/auth'

import API from "../../api/Film"

export const getNewCreated = () => async dispatch => {
	dispatch({
		type: GETTING_FILM_LIST
	})
	let data = await API.getNewCreated()
	if (!data.error) {
		dispatch({
			type: GOT_FILM_LIST,
			payload: data
		})
	} else {
		dispatch({
			type: GETTING_FILM_LIST_FAILED
		})
	}
}

export const getGenres = () => async dispatch => {
	API.getGenres()
	dispatch({
		type: GETTING_GENRES_LIST
	})
	let data = await API.getNewCreated()
	if (!data.error) {
		dispatch({
			type: GOT_GENRES_LIST,
			payload: data
		})
	} else {
		dispatch({
			type: GETTING_GENRES_LIST_FAILED
		})
	}
}
