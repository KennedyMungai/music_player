import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const SongsScreenLayout = () => {
	return (
		<Stack>
			<Stack.Screen name='index' options={{ headerTitle: 'Songs' }} />
		</Stack>
	)
}

export default SongsScreenLayout
