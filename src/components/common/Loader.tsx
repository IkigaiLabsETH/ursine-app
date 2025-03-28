import { FC } from 'react';

export const Loader: FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[200px]">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-berry"></div>
    </div>
  );
}; 