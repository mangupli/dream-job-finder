import { useState, useEffect, useCallback, useMemo, useRef, MouseEvent, KeyboardEvent} from "react"

import Footer from "./components/Footer"
import Header from "./components/Header"
import Activities from "./components/Activities"
import ProgressBar from "./components/ProgressBar"
import Calendar from "./components/Calendar"
import InpirationQuote from "./components/InpirationQuote"

function App() {

	return (
		<div className="App">
			<Header />
			<main className="main">
				<Activities />
				<ProgressBar />
				<Calendar />
			</main>
			<InpirationQuote />			
			<Footer />

		</div>

	)
}

export default App;
