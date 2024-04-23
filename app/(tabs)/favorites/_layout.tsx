import { StackScreenWithSearchBar } from '@/constants/layout'
import { Stack } from 'expo-router'
import React from 'react'

const SongsScreenLayout = () => {
	return (
		<Stack>
			<Stack.Screen
				name='index'
				options={{ headerTitle: 'Songs', ...StackScreenWithSearchBar }}
			/>
		</Stack>
	)
}

export default SongsScreenLayout
