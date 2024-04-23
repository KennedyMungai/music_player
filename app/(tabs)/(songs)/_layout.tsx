import { Stack } from 'expo-router'
import React from 'react'
import { StackSCreenWithSearchBar } from '../../../constants/layout'

const SongsScreenLayout = () => {
	return (
		<Stack>
			<Stack.Screen
				name='index'
				options={{ headerTitle: 'Songs', ...StackSCreenWithSearchBar }}
			/>
		</Stack>
	)
}

export default SongsScreenLayout
