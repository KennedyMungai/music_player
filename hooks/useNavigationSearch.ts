import { colors } from '@/constants/tokens'
import { useNavigation } from 'expo-router'
import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SearchBarProps } from 'react-native-screens'

const defaultSearchOptions: SearchBarProps = {
	tintColor: colors.primary,
	hideWhenScrolling: false
}

type Props = {
	searchBarOptions?: SearchBarProps
}

const useNavigationSearch = ({ searchBarOptions }: Props) => {
	const [search, setSearch] = useState('')

	const navigation = useNavigation()

	const handleOnChangeText: SearchBarProps['onChangeText'] = ({
		nativeEvent: { text }
	}) => {
		setSearch(text)
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerSearchBarOptions: {
				...defaultSearchOptions,
				...searchBarOptions,
				onChangeText: handleOnChangeText
			}
		})
	}, [navigation, handleOnChangeText, searchBarOptions])

	return search
}

export default useNavigationSearch

const styles = StyleSheet.create({})
