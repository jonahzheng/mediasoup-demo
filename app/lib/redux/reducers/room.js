const initialState =
{
	url   : null,
	state : 'new' // new/connecting/connected/disconnected/closed
};

const room = (state = initialState, action) =>
{
	switch (action.type)
	{
		case 'SET_ROOM_URL':
		{
			const { url } = action.payload;

			return { ...state, url };
		}

		case 'SET_ROOM_STATE':
		{
			const roomState = action.payload.state;

			return { ...state, state: roomState };
		}

		case 'SET_ROOM_ACTIVE_SPEAKER':
		{
			const { peerName } = action.payload;

			return { ...state, activeSpeakerName: peerName };
		}

		default:
			return state;
	}
};

export default room;
