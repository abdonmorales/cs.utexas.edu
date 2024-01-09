// src/components/Footer.tsx
import React from 'react';
import './Footer.css'

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="footerStyle">
			<p>&copy; {currentYear} Abdon Morales. All Rights Reserved.</p>
		</footer>
	);
};

export default Footer;