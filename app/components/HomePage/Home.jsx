'use client';
import { useEffect } from 'react';
import $ from 'jquery';
import Banner from './Banner';
import FiveCompo from './AboutMetaverse';
import NftPackages from './NftPackages';
import MetaverseStats from './MetaverseStats';
import SevenCompo from './Partners';
import Customers from './Customers';
import AccessFuture from './AccessFuture';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import MetaverseSystem from './MetaverseSystem';

const Home = () => {
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
		<div>
			<div className='fixed top-0 right-0 left-0 z-[1000] w-full header'>
				<Navbar />
			</div>
			<div className='custom__BG'>
				<Banner />
				<MetaverseSystem />
				<MetaverseStats />
				<AccessFuture />
				<NftPackages />
				<FiveCompo />
				<Customers />
				<SevenCompo />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
