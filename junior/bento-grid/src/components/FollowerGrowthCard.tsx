import React from 'react'
import followerCard from  '../assets/images/illustration-grow-followers.webp';

const FollowerGrowthCard: React.FC = () => {
	return (
		<section className='follower bg-purple-500 p-5 rounded-xl lg:flex'>
			<figure className="flex justify-center">
				<img src={followerCard} className='w-70' />
			</figure>
			
			<p className="text-4xl/7 text-center text-white w-70 lg:w-90 mx-auto font-bold mt-10 lg:flex items-center ">
				Grow followers with non-stop content.
			</p>
		</section>
	)
}

export default FollowerGrowthCard
