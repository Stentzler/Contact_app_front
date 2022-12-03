import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import GlobalStyle from './styles/global';
import {AnimatePresence} from 'framer-motion';
import {MotionOpacity} from './components/Motion';
import Footer from './components/Footer';
import Agenda from './pages/Agenda';
import {UserProvider} from './context/UserContext';

function App() {
	return (
		<Router>
			<UserProvider>
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
			</UserProvider>
		</Router>
	);
}

export default App;
