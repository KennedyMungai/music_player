import { utilStyles } from '@/styles'
import { FlatList, FlatListProps, View } from 'react-native'
import data from '../assets/data/library.json'
import TrackListItem from './track-list-item'

export type TracksListProps = Partial<FlatListProps<unknown>>

const ItemDivider = () => (
	<View
		style={{
			...utilStyles.itemSeparator,
			marginVertical: 9,
			marginLeft: 16
		}}
	/>
)

const TrackList = ({ ...flatlistProps }: TracksListProps) => {
	return (
		<FlatList
			data={data as ITrack[]}
			ItemSeparatorComponent={() => <ItemDivider />}
			renderItem={({ item: track }) => (
				<TrackListItem track={track as ITrack} />
			)}
			{...flatlistProps}
		/>
	)
}

export default TrackList
