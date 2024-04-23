import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/styles'

const ArtistsPage = () => {
	return (
		<View
			style={[
				defaultStyles.container,
				{ backgroundColor: '#000', paddingTop: 120 }
			]}
		>
			<Text style={defaultStyles.text}>SongsPage</Text>
		</View>
	)
}

export default ArtistsPage

const styles = StyleSheet.create({})
