import { FlatList } from 'react-native'
import data from '../assets/data/library.json'

const TrackList = () => {
	return <FlatList data={data} renderItem={() => null} />
}

export default TrackList
