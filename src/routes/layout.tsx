/** @format */
import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
	// layout is like the main component, or index, where the app is mounted.
	return <Slot />;
});
