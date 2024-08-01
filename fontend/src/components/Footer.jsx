import GithubIcon from '../assets/icons/github.svg'
import MeIcon from '../assets/icons/me.svg'
import movieIcon from '../assets/icons/cinema.svg'
import LinkedinIcon from '../assets/icons/linkedin.svg'
import LicenseIcon from '../assets/icons/license.svg'

export function Footer() {
	const year = new Date().getFullYear()
	return (
		<footer className='w-full bg-gray-100 dark:bg-gray-900'>
			<div className='max-w-screen-xl mx-auto p-4 md:py-8'>
				<div className='sm:flex sm:items-center sm:justify-between'>
					<a
						href='#'
						className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'
					>
						<img src={movieIcon} className='h-8' alt='Flowbite Logo' />
						<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
							Movie Bunker
						</span>
					</a>
					<ul className='flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400'>
						<li className='mr-4 md:mr-6'>
							<a
								href='https://portfolio-gaston-ojeda.netlify.app/'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline flex items-center space-x-1'
							>
								<span>Portfolio</span>
								<img src={MeIcon} alt='Me Icon' className='size-7' />
							</a>
						</li>
						<li className='mr-4 md:mr-6'>
							<a
								href='https://github.com/gastonojedaa/MovieSearcher'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline flex items-center space-x-1'
							>
								<span>Repository</span>
								<img src={GithubIcon} alt='Github Icon' className='size-7' />
							</a>
						</li>
						<li className='mr-4 md:mr-6'>
							<a
								href='https://gist.github.com/azizshamim/660282'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline flex items-center space-x-1'
							>
								<span>Licensing</span>
								<img src={LicenseIcon} alt='License Icon' className='size-7' />
							</a>
						</li>
						<li>
							<a
								href='https://ar.linkedin.com/in/gaston-ojeda-261278219'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline flex items-center space-x-1'
							>
								<span>Contact</span>
								<img
									src={LinkedinIcon}
									alt='Linkedin Icon'
									className='size-7'
								/>
							</a>
						</li>
					</ul>
				</div>
				<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
				<span className='block text-sm text-gray-500 text-center dark:text-gray-400'>
					© {year}{' '}
					<a
						href='https://ar.linkedin.com/in/gaston-ojeda-261278219'
                        target='_blank'
                        rel='noopener noreferrer'
						className='hover:underline'
					>
						Gaston Ojeda
					</a>
					. All Rights Reserved.
				</span>
			</div>
		</footer>
	)
}
