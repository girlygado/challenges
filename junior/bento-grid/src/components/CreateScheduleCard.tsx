import React from 'react'
import createPost from '../assets/images/illustration-create-post.webp';

const CreateScheduleCard: React.FC = () => {
	return (
		<section className='create bg-yellow-100 p-5 rounded-xl'>
			<p className="text-4xl/8 font-medium">
				Create and schedule content <span className="text-purple-500 italic">quicker.</span>
			</p>

			<figure className='w-50 mt-5'>
					<img src={createPost} alt="Create Post Image Button"/>
			</figure>
		</section>
	)
}

export default CreateScheduleCard
