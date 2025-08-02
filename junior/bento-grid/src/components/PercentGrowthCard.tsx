import React from 'react'
import audienceGrowth from '../assets/images/illustration-audience-growth.webp';

const PercentGrowthCard: React.FC = () => {
	return (
		<section className='percent bg-stone-50 p-5 rounded-xl'>
			<p className="text-6xl font-bold">
				{'>56%'}
			</p>
			<p className="text-xl">
				faster audience growth
			</p>

			<figure className='w-50 mt-5'>
				<img src={audienceGrowth} alt="Avatar icons"/>
			</figure>
		</section>
	)
}

export default PercentGrowthCard
