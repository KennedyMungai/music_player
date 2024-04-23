import TrackList from '@/components/track-list'
import { defaultStyles } from '@/styles'
import React from 'react'
import { View } from 'react-native'

const SongsPage = () => {
	return (
		<View style={defaultStyles.container}>
			<TrackList />
		</View>
	)
}

export default SongsPage
