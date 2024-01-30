import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home, Reviews } from './components/pages'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/reviews" element={<Reviews />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
