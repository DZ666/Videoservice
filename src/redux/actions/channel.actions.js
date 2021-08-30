import {
	GETTING_CHANNEL_LIST,
	GOT_CHANNEL_LIST,
	GETTING_CHANNEL_LIST_FAILED,
} from '../types/channels'

import API from "../../api/Channel"

export const getNewCreated = () => async dispatch => {
	dispatch({
		type: GETTING_CHANNEL_LIST
	})
	let data = await API.getNewCreated()
	if (!data.error) {
		dispatch({
			type: GOT_CHANNEL_LIST,
			payload: data
		})
	} else {
		dispatch({
			type: GETTING_CHANNEL_LIST_FAILED
		})
	}
}
