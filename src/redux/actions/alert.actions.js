import {
  SUCCESS_ALERT, INFO_ALERT, ERROR_ALERT, CLEAR_ALERT
} from '../types/alerts'

export const clearAlert = () => dispatch => dispatch({ type: CLEAR_ALERT })

export const successAlert = (msg, additionalInfo) => dispatch => {dispatch({ type: SUCCESS_ALERT, msg, additionalInfo })}

export const infoAlert = (msg, additionalInfo) => dispatch => dispatch({ type: INFO_ALERT, msg, additionalInfo })

export const errorAlert = (msg, additionalInfo) => dispatch => dispatch({ type: ERROR_ALERT, msg, additionalInfo })
