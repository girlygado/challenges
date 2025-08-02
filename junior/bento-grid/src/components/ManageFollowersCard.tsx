import React from 'react';
import IconX from '../assets/icons/icon-x.svg?react';
import IconInstagram from '../assets/icons/icon-instagram.svg?react';

interface SocialCardProps {
	accountName: string;
	followerCount: string;
	IconComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	className?: string;
}

const SocialCard: React.FC<SocialCardProps> = ({
	accountName,
	followerCount,
	IconComponent,
	className = '',
}) => {
	return (
		<div
			className={`flex items-center bg-white rounded-full gap-x-2 px-3 py-2 flex-1 ${className}`}
		>
			<div className='rounded-full bg-yellow-500 p-2'>
				<IconComponent width={18} className='text-purple-500' />
			</div>
			<div className=''>
				<p className='text-md font-bold leading-nones text-base'>
					@{accountName}
				</p>
				<p className='text-xs text-gray-400 leading-none'>
					{followerCount} Followers
				</p>
			</div>
		</div>
	);
};

const ManageFollowersCard: React.FC = () => {
	return (
		<section className='manage rounded-xl p-5 bg-stone-50'>
			<div className='flex justify-space-between items-center gap-2'>
				<SocialCard
					accountName='Yourco'
					followerCount='12k'
					IconComponent={IconInstagram}
				/>
				<SocialCard
					accountName='Yourco'
					followerCount='8k'
					IconComponent={IconX}
				/>
			</div>

			<div className='mt-5'>
				<p className='text-black font-medium text-3xl/6'>
					Manage multiple accounts and platforms.
				</p>
			</div>
		</section>
	);
};

export default ManageFollowersCard;
