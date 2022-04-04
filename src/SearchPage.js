import { TuneOutlined } from '@mui/icons-material';
import React from 'react';
import ChannelRow from './ChannelRow';
import './SearchPage.css';
import VideoRow from './VideoRow';
function SearchPage() {
	return (
		<div className='searchPage'>
			<div className='searchPage__filter'>
				<TuneOutlined />
				<h2>FILTER</h2>
			</div>

			<hr />
			<ChannelRow
				image='https://avatars.githubusercontent.com/u/77814463?s=400&u=032d919a2585916d8f4c78448464dd4b20a4013f&v=4'
				channel='Pokémon'
				verified
				subs='732K'
				noOfVideos={382}
				description='The starter Pokemon rebel against humanity and decide to evolve themselves.'
			/>
			<hr />
			<VideoRow
				views=' 1.4M '
				subs=' 659K '
				description='Pokemon Journeys has the entire Pokemon fandom excited and with good reason! Here are all the best moments from Ash’s incredible journey from the original Pokemon to Pokemon Journeys! '
				timestamp='1 month ago '
				channel='Pokémon '
				title='Pokémon: Ash’s Ketchum Adventure from Season 1 to Journeys '
				image='https://i.ytimg.com/vi/8SJSS_CB6jE/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDpRbv3J85WzJaZ5yVGMDvH7u3NEA'
			/>

			<VideoRow
				views=' 1.1M '
				subs=' 3.66M '
				description='Check out the final episode of Pokémon: Twilight Wings, a seven-episode limited anime series set in the Galar region! '
				timestamp='59 seconds ago '
				channel='Pokémon '
				title='Pokémon: Twilight Wings | Episode 7 | Sky '
				image='https://i.ytimg.com/vi/3-144RjSRWI/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA-Tr4JRh-NZGOGx8Eaxfu4S0v1zA'
			/>

			<VideoRow
				views=' 5.8M '
				subs=' 3.66M '
				description='Dreams, realities, and challenges collide in Pokémon: Twilight Wings, a seven-episode limited anime series set in the vibrant Galar region! http://bit.ly/3a8VDMm '
				timestamp='Jan 15, 2020 '
				channel='Pokémon '
				title='Pokémon: Twilight Wings | Episode 1 | Letter '
				image='https://i.ytimg.com/vi/rYDmL5VH-uk/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBOfFRfeiOwrH7g0pJz7bvFcJJ_cA'
			/>

			<VideoRow
				views=' 4.1M '
				subs=' 3.66M '
				description='After losing to Galar’s Champion, Leon, Fighting-type Gym Leader Bea sets out with her Pokémon to elevate their training. Will she find her inner resolve and grow stronger…or will she succumb to the pressure of defeat?
  Dreams, realities, and challenges collide in Pokémon: Twilight Wings, a seven-episode limited anime series set in the vibrant Galar region! '
				timestamp='Feb 20, 2020 '
				channel='Pokémon '
				title='Pokémon: Twilight Wings | Episode 2 | Training '
				image='https://i.ytimg.com/vi/ZOSoQxSHKKE/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAGUPnq8Au1tn7JByRlatFlxEi46w'
			/>
		</div>
	);
}

export default SearchPage;
