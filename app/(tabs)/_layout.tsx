import { colors, fontSize } from '@/constants/tokens'
import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: colors.primary,
				tabBarLabelStyle: {
					fontSize: fontSize.xs,
					fontWeight: '500'
				},
				headerShown: false
			}}
		>
			<Tabs.Screen name='favorites' options={{ title: 'Favorites' }} />
			<Tabs.Screen name='playlists' options={{ title: 'Playlists' }} />
			<Tabs.Screen name='(songs)' options={{ title: 'Songs' }} />
			<Tabs.Screen name='artists' options={{ title: 'Artists' }} />
		</Tabs>
	)
}

export default TabsLayout
