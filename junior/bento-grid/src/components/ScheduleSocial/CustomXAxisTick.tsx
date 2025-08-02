import React from 'react'

interface CustomTickProps {
	x?: number;
	y?: number;
	payload?: {
		value: string | number;
	};
}

const CustomXAxisTick: React.FC<CustomTickProps> = ({
	x = 0,
	y = 0,
	payload,
}) => (
	<text
		x={x}
		y={y}
		dy={16}
		textAnchor='middle'
		fill='var(--color-gray-400)'
		fontSize={14}
	>
		{payload?.value}
	</text>
);

export default CustomXAxisTick
