import React from "react"

export const AlertTemplate = ({ style, options, message, close }) => {
  style = {
    fontSize: '14px',
    padding: '16px',
    position: 'relative',
    width: 'fit-content',
	background: 'rgba(255,255,255,1)',
    borderBottomLeftRadius: '25px',
	borderBottomRightRadius: '25px',
    borderTop: '3px solid #fff',
    boxShadow: '0px 0px 12px rgba(0, 0, 0, .1)',
    color: "#333",
    zIndex: '100',
    marginBottom: '25px'
  }
  switch (options.type) {
    case 'info':
      style = {
        ...style,
      }
      break
    case 'success':
      style = {
        ...style,

        borderTop: '2px solid #20A464',
      }
      break
    case 'error':
      style = {
        ...style,
        borderTop: '2px solid #E13737',

      }
      break
    default:
      break;
  }
  return (
    <div style={style}>
      {message}
    </div>
  )
}
