/** @format */
import { component$, useStyles$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';

import { RouterHead } from './components/router-head/router-head';
import globalStyles from './global.css?inline';

export default component$(() => {
	useStyles$(globalStyles); // To use styles globally.
	useStylesScoped$(globalStyles); // To use styles only in this component.

	return (
		<QwikCityProvider>
			{/* head and body are required */}
			<head>
				<meta charSet='utf-8' />
				<link rel='manifest' href='/manifest.json' />
				<RouterHead />
			</head>
			<body lang='en'>
				{/* RouterOutlet is needed for the router */}
				<RouterOutlet />
				<ServiceWorkerRegister />
			</body>
		</QwikCityProvider>
	);
});
