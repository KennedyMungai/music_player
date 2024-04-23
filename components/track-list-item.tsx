import { unknownTrackImageUri } from '@/constants/images'
import React from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'
import FastImage from 'react-native-fast-image'

type Props = {
	track: ITrack
}

const TrackListItem = ({ track }: Props) => {
	const isActiveTrack = false

	return (
		<TouchableHighlight>
			<View>
				<FastImage
					source={{
						uri: track.artwork ?? unknownTrackImageUri,
						priority: FastImage.priority.normal
					}}
					style={[
						styles.trackArtworkImage,
						{ opacity: isActiveTrack ? 0.6 : 1 }
					]}
				/>
			</View>
		</TouchableHighlight>
	)
}

export default TrackListItem

const styles = StyleSheet.create({
	trackArtworkImage: {
		borderRadius: 8,
		width: 50,
		height: 50
	}
})
