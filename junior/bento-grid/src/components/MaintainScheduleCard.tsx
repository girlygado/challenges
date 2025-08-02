import React from 'react';
import { Check, SquareDashed} from 'lucide-react';
const MaintainScheduleCard: React.FC = () => {
	return (
		<section className="maintain bg-yellow-500 p-5 rounded-xl">
			<p className='text-black font-medium text-3xl/6'>
					Maintain a consistent posting schedule.
				</p>

				{/* Calendar Card */}
				<div className="w-3xs mt-5 md:mx-auto">
					<div className="bg-purple-500 rounded-t-lg px-3 py-2">
						<div className="flex justify-between text-white ">
							<span>August 2024</span>
							<span>Week 1</span>
						</div>
					</div>

					<div className="bg-white rounded-b lg-px-3 py-2 grid grid-cols-4 grid-rows-3 gap-2">
						<div className="flex justify-center p-1">
							<div className="rounded-full bg-purple-500 flex justify-center p-1">
								<Check width={18} height={18} color='white'/>
							</div>
						</div>
						<div className="flex justify-center p-1">
							<div className="rounded-full bg-purple-500 flex justify-center p-1">
								<Check width={18} height={18} color='white'/>
							</div>
						</div>
						<div className="flex justify-center p-1">
							<div className="rounded-full bg-purple-500 flex justify-center p-1">
								<Check width={18} height={18} color='white'/>
							</div>
						</div>
						<div className="flex justify-center p-1">
							<div className="rounded-full bg-purple-500 flex justify-center p-1">
								<Check width={18} height={18} color='white'/>
							</div>
						</div>

						<div className="flex justify-center p-1">
							<div className="rounded-sm bg-yellow-100 flex justify-center p-1">
								<SquareDashed width={18} height={18} color='inherit'/>
							</div>
						</div>
						<div className="flex justify-center p-1">
							<div className="rounded-sm bg-yellow-100 flex justify-center p-1">
								<SquareDashed width={18} height={18} color='inherit'/>
							</div>
						</div>
						<div className="flex justify-center p-1">
							<div className="rounded-sm bg-yellow-100 flex justify-center p-1">
								<SquareDashed width={18} height={18} color='inherit'/>
							</div>
						</div>
						<div className="flex justify-center p-1">
							<div className="rounded-sm bg-yellow-100 flex justify-center p-1">
								<SquareDashed width={18} height={18} color='inherit'/>
							</div>
						</div>

						<div className="flex justify-center p-1">
							<div className="rounded-sm bg-yellow-100 flex justify-center p-1">
								<SquareDashed width={18} height={18} color='inherit'/>
							</div>
						</div>
						<div className="flex justify-center p-1">
							<div className="rounded-sm bg-yellow-100 flex justify-center p-1">
								<SquareDashed width={18} height={18} color='inherit'/>
							</div>
						</div>
						<div className="flex justify-center p-1">
							<div className="rounded-sm bg-yellow-100 flex justify-center p-1">
								<SquareDashed width={18} height={18} color='inherit'/>
							</div>
						</div>
						<div className="flex justify-center p-1">
							<div className="rounded-sm bg-yellow-100 flex justify-center p-1">
								<SquareDashed width={18} height={18} color='inherit'/>
							</div>
						</div>
					</div>
				</div>
		</section>
	)
};

export default MaintainScheduleCard;
