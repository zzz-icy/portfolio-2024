import "./App.css"
import About from "./components/About/About.tsx"
import Employers from "./components/Employers/Employers.tsx"
import Footer from "./components/Footer/Footer.tsx"
import Github from "./components/Github/Github.tsx"
import Header from "./components/Header/Header.tsx"
import Projects from "./components/Projects/Projects.tsx"
import Recommendations from "./components/Recommendations/Recommendations.tsx"

function App() {
	return (
		<div>
			<Header />
			<About />
			<Projects />
			<Employers />
			<Recommendations />
			<Github />
			<Footer />
		</div>
	)
}

export default App
