import { FlatList, FlatListProps } from 'react-native'
import data from '../assets/data/library.json'
import TrackListItem from './track-list-item'

export type TracksListProps = Partial<FlatListProps<unknown>>

const TrackList = ({ ...flatlistProps }: TracksListProps) => {
	return (
		<FlatList
			data={data as ITrack[]}
			renderItem={({ item: track }) => (
				<TrackListItem track={track as ITrack} />
			)}
			{...flatlistProps}
		/>
	)
}

export default TrackList
