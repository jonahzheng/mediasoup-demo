const initialState =
{
	url                  : null,
	state                : 'new', // new/connecting/connected/disconnected/closed
	audioOnly            : false,
	audioOnlyInProgress  : false,
	restartIceInProgress : false
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

		case 'SET_AUDIO_ONLY_STATE':
		{
			const { enabled } = action.payload;

			return { ...state, audioOnly: enabled };
		}

		case 'SET_AUDIO_ONLY_IN_PROGRESS':
		{
			const { flag } = action.payload;

			return { ...state, audioOnlyInProgress: flag };
		}

		case 'SET_RESTART_ICE_IN_PROGRESS':
		{
			const { flag } = action.payload;

			return { ...state, restartIceInProgress: flag };
		}

		default:
			return state;
	}
};

export default room;
