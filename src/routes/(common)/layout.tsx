/** @format */
import { component$, Slot } from '@builder.io/qwik';
import Header from '~/components/header/header';
import { SideBar } from '~/components/sidebar/sidebar';

const MOCK_PROPS = {
	items: [
		{ name: 'Home', route: '/home' },
		{ name: 'Trending', route: '/trending' },
		{ name: 'History', route: '/history' },
	],
	logo: '',
};

export default component$(() => {
	return (
		<>
			<Header />
			<SideBar items={MOCK_PROPS.items} />
			<Slot />
		</>
	);
});
