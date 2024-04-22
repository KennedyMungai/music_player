import { Stack } from 'expo-router'
import React from 'react'

const MainAppLayout = () => {
	return (
		<Stack>
			<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
		</Stack>
	)
}

export default MainAppLayout
