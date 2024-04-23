import TrackList from '@/components/track-list'
import { screenPadding } from '@/constants/tokens'
import useNavigationSearch from '@/hooks/useNavigationSearch'
import { defaultStyles } from '@/styles'
import React from 'react'
import { ScrollView, View } from 'react-native'

const SongsPage = () => {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in songs'
		}
	})

	return (
		<View
			style={[
				defaultStyles.container,
				{ backgroundColor: '#000', paddingTop: 120 }
			]}
		>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentInsetAdjustmentBehavior='automatic'
				style={{ paddingHorizontal: screenPadding.horizontal }}
			>
				<TrackList scrollEnabled={false} />
			</ScrollView>
		</View>
	)
}

export default SongsPage
