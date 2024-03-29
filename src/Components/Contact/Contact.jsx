import React from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Contact.module.css';

const Contact = () => {
	const { newTheme } = React.useContext(ThemeContext);
	return (
		<footer
			className={styles.footer}
			id='contact'
			// style={{ background: `${newTheme.highlightBackground}` }}
		>
			<div className={styles.container}>
				<h1 style={{ color: `${newTheme.title}` }}>Get in Touch</h1>
				<br/>
				<br/>
				<p
					style={{ color: `${newTheme.para}` }}
					className={styles.paragraph}
				>
					I'm actively looking for any new opportunities, in
					full-stack web development.
				</p>
				<br/>
				<br/>

				<h3  style={{ color: `${newTheme.para}` }}
					className={styles.paragraph}>Call me : +91 7557881346</h3>
				<h3  style={{ color: `${newTheme.para}` }}
					className={styles.paragraph}>Email me :  &nbsp; singh80020@gmail.com </h3>
				<div
					style={{ color: `${newTheme.title}` }}
					className={styles.contactOptions}
				>
				
			
					<a
						href="https://twitter.com/the_abhi_singh"
						aria-label='Twitter'
						target='_blank'
						rel='noreferrer'
					>
						<i className='fab fa-twitter'></i>
					</a>
					<a
						href='https://github.com/Abhisingh755/'
						aria-label='GitHub'
						rel='noreferrer'
						target='_blank'
					>
						<i className='fab fa-github' />
					</a>

					<a
						href='https://www.linkedin.com/in/abhishek-singh-4b0999b9/'
						aria-label='Linkedin'
						target='_blank'
						rel='noreferrer'
					>
						<i className='fab fa-linkedin-in' />
					</a>
				</div>
			</div>
			<div
				style={{ background: `${newTheme.line}` }}
				className={styles.line}
			/>
		
		</footer>
	);
};

export default Contact;
