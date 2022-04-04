import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage';
function App() {
	return (
		// BEM naming convention
		<div className='app'>
			<Router>
				<Header />
				<Switch>
					<Route path='/' exact>
						<div className='app__page'>
							<Sidebar />
							<RecommendedVideos />
						</div>
					</Route>
					<Route path='/search/:searchTerm'>
						<div className='app__page'>
							<Sidebar />
							<SearchPage />
						</div>
					</Route>
				</Switch>
			</Router>

			{/* Header --> <Header /> */}
			{/* Sidebar --> <Sidebar /> */}
			{/* Recommended Videos --> <RecommendedVideos /> */}
		</div>
	);
}

export default App;
