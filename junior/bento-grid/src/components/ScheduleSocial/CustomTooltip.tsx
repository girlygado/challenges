import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip: React.FC<any> = ({
	active,
	payload,
	label,
}) => {
	if (active && payload && payload.length) {
		const isMostActive = payload[0]?.payload.mostActive;
		return (
			<div className="bg-white p-2 rounded shadow">
			{isMostActive && <p className="text-red-500 font-bold">Most Active!</p>}
				<p className="font-semibold">{label}</p>
				Value: <span className="font-mono">{payload[0].value}</span>
			</div>
		);
	}
	return null;
};

export default CustomTooltip;
