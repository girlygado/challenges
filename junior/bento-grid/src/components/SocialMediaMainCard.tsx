import React from 'react';
import starRatingImg from '../assets/images/illustration-five-stars.webp';

const SocialMediaMainCard: React.FC = () => {
	return (
		<section className='social bg-purple-500 text-center p-10 rounded-xl'>
			<h1 className='text-[2.5rem]/10 font-medium text-white'>
				Social Media <span className='text-yellow-500'>10x</span>{' '}
				<span className='italic'>Faster</span> with AI
			</h1>
			<figure className='flex justify-center mt-5 mb-2'>
				<img src={starRatingImg} alt='5 star rating' className='w-48' />
			</figure>
			<p className='text-yellow-100'>Over 4,000 5-star reviews</p>
		</section>
	);
};

export default SocialMediaMainCard;
