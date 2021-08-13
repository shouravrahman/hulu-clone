import React from 'react';

const HeaderItem = ({ title, Icon }) => {
	return (
		<div className='flex flex-col items-center cursor-pointer group w-12 h-auto sm:w-20 hover:text-white sm:pt-2'>
			<Icon className='h-8 mb-1 group-hover:animate-bounce ' />
			<p className='opacity-0 group-hover:opacity-100 tracking-widest'>
				{title}
			</p>
		</div>
	);
};

export default HeaderItem;
