'use client';
import { useEffect } from 'react';
import Navbar from '@/app/components/Shared/Navbar/Navbar';
import AboutBanner from '@/app/components/AboutPage/AboutBanner';
import AboutCompoOne from '@/app/components/AboutPage/AboutCompoOne';
import Footer from '@/app/components/Shared/Footer/Footer';
import HomeFiveCompo from '@/app/components/HomePage/AboutMetaverse';
import HomeSixCompo from '@/app/components/HomePage/Customers';
import $ from 'jquery';
import MetaverseSystem from '@/app/components/HomePage/MetaverseSystem';

const AboutPage = () => {
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
			<AboutBanner></AboutBanner>
			<AboutCompoOne></AboutCompoOne>
			<MetaverseSystem />
			<HomeFiveCompo />
			<HomeSixCompo />
			<Footer></Footer>
		</div>
	);
};

export default AboutPage;
