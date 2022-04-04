import {
	ExpandMoreOutlined,
	History,
	Home,
	OndemandVideo,
	Subscriptions,
	ThumbUpAltOutlined,
	VideoLibrary,
	WatchLater,
	Whatshot,
} from '@mui/icons-material';
import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
function Sidebar() {
	return (
		<div className='sidebar'>
			<SidebarRow selected Icon={Home} title='Home' />
			<SidebarRow Icon={Whatshot} title='Trending' />
			<SidebarRow Icon={Subscriptions} title='Subscripiton' />
			<hr />
			<SidebarRow Icon={VideoLibrary} title='Library' />
			<SidebarRow Icon={History} title='History' />
			<SidebarRow Icon={OndemandVideo} title='Your Videos' />
			<SidebarRow Icon={WatchLater} title='Watch Later' />
			<SidebarRow Icon={ThumbUpAltOutlined} title='Liked Videos' />
			<SidebarRow Icon={ExpandMoreOutlined} title='Show More' />
			<hr />
		</div>
	);
}

export default Sidebar;
