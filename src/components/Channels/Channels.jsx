import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

class Channels extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			channels: []
		}
	}

	check_time(time) {
		if (new Date().getHours() > Number(time.split(":")[0])) {
	        return false
	    } else {
	        return true
	    }
	}

	display_channels() {
		this.setState({
			channels: [
				this.props.channel.list.map(channel => (<div key={"channels_page-channel_id_" + channel.id} className="channel">
					<div className="channel-logo">
						<img src={channel.img} alt={channel.name}/>
					</div>
					<div className="channel-info">
						<h5 className="channel-title-name">{channel.name}</h5>
						<Scrollbars
							autoHide
			                autoHideTimeout={1000}
			                autoHideDuration={200}
							className="channel-stream">
							{
								channel.stream.map(item => (<li className={this.check_time(item.time) ? "current_streaming" : null} key={"channels_page-channel_id_" + channel.id + "-stream_id_" + item.id}>
									<span>{item.time}</span>
									<span>{item.name}</span>
								</li>))
							}
						</Scrollbars>
					</div>
				</div>))
			]
		})
	}

	componentDidMount() {
		this.display_channels()
	}

	render () {
		return <div className="Channels">
			{ this.state.channels }
		</div>
	}
}

export default Channels
