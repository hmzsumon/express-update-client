'use client';
import { useEffect } from 'react';
import $ from 'jquery';
import Navbar from '@/app/components/Shared/Navbar/Navbar';
import Footer from '@/app/components/Shared/Footer/Footer';
import Packages from '@/app/components/HomePage/NftPackages';
import PackageBanner from '@/app/components/PackagePage/PackageBanner';

const Package = () => {
	useEffect(() => {
		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 50) {
				$('.header').addClass('header__bg');
			} else {
				$('.header').removeClass('header__bg');
			}
		});
	}, []);
	return (
		<div className='custom__BG'>
			<div className='fixed top-0 right-0 left-0 z-[1000] w-full header'>
				<Navbar />
			</div>
			<PackageBanner />
			<Packages />
			<Footer />
		</div>
	);
};

export default Package;
