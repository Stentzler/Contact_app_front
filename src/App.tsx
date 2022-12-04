import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import GlobalStyle from './styles/global';
import {AnimatePresence} from 'framer-motion';
import {MotionOpacity} from './components/Motion';
import Footer from './components/Footer';
import Agenda from './pages/Agenda';
import {UserProvider} from './context/UserContext';
import {ContactProvider} from './context/ContactContext';

function App() {
	return (
		<Router>
			<ContactProvider>
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
			</ContactProvider>
		</Router>
	);
}

export default App;
