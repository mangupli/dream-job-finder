const Footer = () => {

	const year = new Date().getFullYear()

	const pageContent = <p>Dream Job Finder &copy; {year}</p>

	const content = (
		<footer className="footer">
			{pageContent}
		</footer>
	)

	return content
}

export default Footer