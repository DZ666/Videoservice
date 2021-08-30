// TYPES IMPORT
  import { SUCCESS_ALERT, INFO_ALERT, ERROR_ALERT, CLEAR_ALERT } from '../types/alerts'

// Default Data, If I don't add it, I'll take an error
const initialState = {
  msg: null,
  type: null,
  isShow: false,
  additionalInfo: null,
}

const actionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_ALERT:
      return {
        ...state,
        msg: action.msg,
        type: 'SUCCESS',
        isShow: true,
        additionalInfo: action.additionalInfo,
      }
    case INFO_ALERT:
      return {
        ...state,
        msg: action.msg,
        type: 'INFO',
        isShow: true,
        additionalInfo: action.additionalInfo,
      }
    case ERROR_ALERT:
      return {
        ...state,
        msg: action.msg,
        type: 'ERROR',
        isShow: true,
        additionalInfo: action.additionalInfo,
      }
    case CLEAR_ALERT:
      return {
        msg: null,
        type: null,
        isShow: false,
        additionalInfo: null,
      }
    default:
      return state
  }
}

export default actionsReducer
