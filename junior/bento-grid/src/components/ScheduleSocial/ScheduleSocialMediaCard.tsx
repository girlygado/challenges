import React, { useState } from 'react';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	Cell,
} from 'recharts';
import CustomTooltip from './CustomTooltip';
import CustomXAxisTick from './CustomXAxisTick';
import { Days, ScheduleData } from './BarData';

type Day = keyof typeof ScheduleData;

const ScheduleSocialMediaCard: React.FC = () => {
	const [activeDay, setActiveDay] = useState<Day>('Mon');

	const data = ScheduleData[activeDay] || [];

	return (
		<section className='schedule bg-purple-100 p-5 rounded-xl'>
			<p className='text-black font-medium text-3xl/6'>
				Schedule to social media.
			</p>

			<div className='bg-white rounded-lg p-5 my-5 w-73 md:mx-auto'>
				<div className='border-b-1 border-gray-200 pb-2'>
					<p className='text-md font-medium'>Best time to Post</p>
				</div>

				<div className='flex justify-between items-center gap-1 mt-3'>
					{Days.map((day: string) => (
						<button
							key={day}
							className={`cursor-pointer text-sm text-gray-500 px-1 rounded-full ${
								activeDay === day &&
								'bg-red-100 text-red-500 font-bold'
							}`}
							onClick={() => setActiveDay(day as Day)}
						>
							{day}
						</button>
					))}
				</div>

				<ResponsiveContainer className='100%' height={200}>
					<BarChart data={data}>
						<XAxis
							dataKey='time'
							tick={<CustomXAxisTick />}
							axisLine={false}
							tickLine={false}
						/>
						<YAxis hide />
						<Tooltip content={<CustomTooltip />} cursor={false} />
						<Bar
							dataKey='value'
							radius={[20, 20, 20, 20]}
							fill='var(--color-purple-500)'
							isAnimationActive={true}
							barSize={18}
						>
							{data.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={
										entry?.mostActive
											? 'var(--color-yellow-500)'
											: 'var(--color-purple-500)'
									}
								/>
							))}
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</div>

			<p className='text-center text-black text-xl/5'>
				Optimize post timings to publish content at the perfect time for
				your audience.
			</p>
		</section>
	);
};

export default ScheduleSocialMediaCard;
