import { Stack } from 'expo-router'
import React from 'react'
import { StackScreenWithSearchBar } from '../../../constants/layout'

const SongsScreenLayout = () => {
	return (
		<Stack>
			<Stack.Screen
				name='index'
				options={{
					headerTitle: 'Songs',
					...StackScreenWithSearchBar
				}}
			/>
		</Stack>
	)
}

export default SongsScreenLayout
