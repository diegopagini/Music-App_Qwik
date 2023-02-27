/** @format */
import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
	return (
		<section>
			<div>
				Esto solo es visible en <b>las rutas /auth</b>
			</div>
			<Slot />
		</section>
	);
});
