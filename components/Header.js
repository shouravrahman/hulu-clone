import React from 'react';
import Image from 'next/image';
import {
	HomeIcon,
	BadgeCheckIcon,
	CollectionIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from '@heroicons/react/outline';
import HeaderItem from './HeaderItem';
const Header = () => {
	return (
		<header className='text-base flex flex-col sm:flex-row mx-4 mt-3 justify-between items-center h-auto'>
			<div className='flex flex-grow max-w-2xl justify-evenly pt-2'>
				<HeaderItem title='HOME' Icon={HomeIcon} />
				<HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
				<HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
				<HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
				<HeaderItem title='SEARCH' Icon={SearchIcon} />
				<HeaderItem title='ACCOUNT' Icon={UserIcon} />
			</div>
			<Image
				className='object-contain'
				src='https://links.papareact.com/ua6'
				width={130}
				height={70}
			/>
		</header>
	);
};

export default Header;
