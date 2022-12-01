import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import GlobalStyle from './styles/global';
import {AnimatePresence} from 'framer-motion';
import {MotionOpacity} from './components/Motion';
import Footer from './components/Footer';
import Agenda from './pages/Agenda';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<AnimatePresence>
				<MotionOpacity>
					<>
						<Routes>
							<Route path='/' element={<LandingPage />} />
							<Route path='/agenda' element={<Agenda />} />
						</Routes>
						<Footer />
					</>
				</MotionOpacity>
			</AnimatePresence>
		</Router>
	);
}

export default App;
