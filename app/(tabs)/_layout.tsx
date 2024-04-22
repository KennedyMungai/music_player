import { colors, fontSize } from '@/constants/tokens'
import { BlurView } from 'expo-blur'
import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const TabsLayout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: colors.primary,
				tabBarLabelStyle: {
					fontSize: fontSize.xs,
					fontWeight: '500'
				},
				headerShown: false,
				tabBarStyle: {
					position: 'absolute',
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
					borderTopWidth: 0,
					paddingTop: 8
				},
				tabBarBackground: () => (
					<BlurView
						intensity={90}
						style={{
							...StyleSheet.absoluteFillObject,
							overflow: 'hidden',
							borderTopLeftRadius: 20,
							borderTopRightRadius: 20
						}}
					/>
				)
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
