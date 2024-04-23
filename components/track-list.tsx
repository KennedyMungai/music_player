import { FlatList } from 'react-native'
import data from '../assets/data/library.json'
import TrackListItem from './track-list-item'

const TrackList = () => {
	return (
		<FlatList
			data={data as ITrack[]}
			renderItem={({ item: track }) => <TrackListItem track={track} />}
		/>
	)
}

export default TrackList
