import TrackList from '@/components/track-list'
import { defaultStyles } from '@/styles'
import React from 'react'
import { ScrollView, View } from 'react-native'

const SongsPage = () => {
	return (
		<View
			style={[
				defaultStyles.container,
				{ backgroundColor: '#000', paddingTop: 120 }
			]}
		>
			<ScrollView>
				<TrackList scrollEnabled={false} />
			</ScrollView>
		</View>
	)
}

export default SongsPage
