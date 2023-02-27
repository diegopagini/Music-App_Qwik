/** @format */
import { component$, Slot } from '@builder.io/qwik';

/**
 * This is the file to add
 * "Header",
 * "Footer" and
 * all the components that will be always present.
 */
export default component$(() => {
	// layout is like the main component, or index, where the app is mounted.
	return <Slot />;
});
