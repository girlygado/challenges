import React from 'react';
import { ClipLoader } from 'react-spinners';

interface PageLoaderProps {
	isLoading: boolean,
	size?: number,
	color?: string
}

const PageLoader: React.FC<PageLoaderProps> = ({ isLoading, size, color }) => {
  return (
    <div className="container__loader">
      <ClipLoader
        color={color}
        loading={isLoading}
        size={size}
      />
    </div>
  );
};

export default PageLoader;
