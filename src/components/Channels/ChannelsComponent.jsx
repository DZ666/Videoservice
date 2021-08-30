import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import Channels from "./Channels"

class ChannelsComponent extends React.Component {
	render () {
		return <Scrollbars
				autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
				className="Channels-wrapper">
			<Channels {...this.props} />
		</Scrollbars>
	}
}

export default ChannelsComponent
