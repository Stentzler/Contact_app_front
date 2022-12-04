function Footer() {
	const footerYear: number = new Date().getFullYear();

	return (
		<div className='footer-container'>
			<p className='footer'>
				<>Copyright &copy; {footerYear} All rights reserved </>
			</p>
		</div>
	);
}

export default Footer;
