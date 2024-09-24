"use client"
import { useEffect, useState } from "react"
import "./App.css"
import About from "./components/About/About.tsx"
import Employers from "./components/Employers/Employers.tsx"
import Footer from "./components/Footer/Footer.tsx"
import Github from "./components/Github/Github.tsx"
import Header from "./components/Header/Header.tsx"
import Projects from "./components/Projects/Projects.tsx"
import Recommendations from "./components/Recommendations/Recommendations.tsx"
import Keyboard from "./assets/images/keyboard.jpg"
function App() {
	const [scrollY, setScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY)
		}
		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])
	return (
		<div>
			<div className='parallax-container'>
				<div
					className='parallax-bg'
					style={{
						backgroundImage: `url(${Keyboard})`,
						transform: `translateY(${scrollY * 0.5}px)`,
					}}
				/>
				<header>
					{/* <section className='parallax-content'> */}
					<Header />
					<About />
					{/* </section> */}
				</header>
			</div>
			<Projects />
			<Employers />
			<Recommendations />
			<Github />
			<Footer />
		</div>
	)
}

export default App
