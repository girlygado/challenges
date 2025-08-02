import React from 'react'
import aiContent from '../assets/images/illustration-ai-content.webp';

const WriteContentCard: React.FC = () => {
	return (
		<section className='write bg-yellow-500 p-5 rounded-xl'>
			<p className="text-4xl/8 font-medium">
				Write your content using AI.
			</p>

			<figure className='w-60 mt-5'>
					<img src={aiContent} alt="AI Chat Content"/>
			</figure>
		</section>
	)
}

export default WriteContentCard
