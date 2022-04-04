import {
	Apps,
	Menu,
	Notifications,
	Search,
	VideoCall,
} from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
function Header() {
	const [inputSearch, setInputSearch] = useState('');

	return (
		<div className='header'>
			<div className='header__left'>
				<Menu />
				<Link to='/'>
					<img
						className='header__logo'
						src='https://upload.wikimedia.org/wikipedia/commons/9/9e/YouTube_Logo_%282013-2017%29.svg'
						alt='youtube'></img>
				</Link>
			</div>

			<div className='header__input'>
				<input
					type='text'
					placeholder='Search'
					value={inputSearch}
					onChange={(e) => setInputSearch(e.target.value)}></input>

				<Link to={`/search/${inputSearch}`}>
					<Search className='header__inputButton' />
				</Link>
			</div>

			<div className='header__icons'>
				<VideoCall className='header__icon' />
				<Apps className='header__icon' />

				<Notifications className='header__icon' />

				<Avatar
					alt='myaccount'
					src='https://avatars.githubusercontent.com/u/77814463?s=400&u=032d919a2585916d8f4c78448464dd4b20a4013f&v=4 '
				/>
			</div>
		</div>
	);
}

export default Header;
