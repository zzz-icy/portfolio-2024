import React from "react"
import "./Github.css"
import GithubCommits from "../../assets/images/github-commits.png"

const Github = () => {
	return (
		<section className='github'>
			<h2 style={{ fontSize: "20px", color: "#777" }}>
				My Github Contributions
			</h2>
			<img
				src={GithubCommits}
				className='github'
				alt='GithubCommits'
			/>
		</section>
	)
}

export default Github
