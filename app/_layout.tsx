import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const MainAppLayout = () => {
	return (
		<Stack>
			<Stack.Screen name='App.tsx' />
		</Stack>
	)
}

export default MainAppLayout
