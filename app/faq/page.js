'use client';
import $ from 'jquery';
import { useEffect } from 'react';
import Navbar from '@/app/components/Shared/Navbar/Navbar';
import Footer from '@/app/components/Shared/Footer/Footer';
import FAQBanner from '@/app/components/FAQPage/FAQBanner';
import FAQFristCompo from '@/app/components/FAQPage/FAQFristCompo';

const FAQ = () => {
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
			<FAQBanner />
			<FAQFristCompo />
			<Footer />
		</div>
	);
};

export default FAQ;
