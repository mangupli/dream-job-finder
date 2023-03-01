import { useState, useEffect, useCallback, useMemo, useRef, MouseEvent, KeyboardEvent} from "react"

import Footer from "./components/Footer"
import Header from "./components/Header"
import Activities from "./components/Activities"
import ProgressBar from "./components/ProgressBar"
import Calendar from "./components/Calendar"
import InpirationQuote from "./components/InpirationQuote"
import CompletedList from "./components/CompletedList"

function App() {

	return (
		<>
			<Header />
			<main className="main">
				<Activities />
				<CompletedList />
				<ProgressBar />
				<Calendar />
			</main>
			<InpirationQuote />			
			<Footer />

		</>

	)
}

export default App;
