<!-- @format -->

# Qwik City App ⚡️

- [Qwik Docs](https://qwik.builder.io/)
- [Discord](https://qwik.builder.io/chat)
- [Qwik GitHub](https://github.com/BuilderIO/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)

---

## Project Structure

This project is using Qwik with [QwikCity](https://qwik.builder.io/qwikcity/overview/). QwikCity is just a extra set of tools on top of Qwik to make it easier to build a full site, including directory-based routing, layouts, and more.

Inside your project, you'll see the following directory structure:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Provides the directory based routing, which can include a hierarchy of `layout.tsx` layout files, and an `index.tsx` file as the page. Additionally, `index.ts` files are endpoints. Please see the [routing docs](https://qwik.builder.io/qwikcity/routing/overview/) for more info.

- `src/components`: Recommended directory for components.

- `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.

## Add Integrations and deployment

Use the `npm run qwik add` command to add additional integrations. Some examples of integrations include: Cloudflare, Netlify or Express server, and the [Static Site Generator (SSG)](https://qwik.builder.io/qwikcity/guides/static-site-generation/).

```shell
npm run qwik add # or `yarn qwik add`
```

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). During development, the `dev` command will server-side render (SSR) the output.

```shell
npm start # or `yarn start`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to locally preview a production build, and it should not be used as a production server.

```shell
npm run preview # or `yarn preview`
```

## Production

The production build will generate client and server modules by running both client and server build commands. Additionally, the build command will use Typescript to run a type check on the source code.

```shell
npm run build # or `yarn build`
```

---

## Components$

### root.tsx

```tsx
export const MyComponent = () => {
	// Traditional component, like in React.
	return <>Traditional component</>;
};

export const MagicComponent = component$(() => {
	// Qwik component, like in Next.
	return <>Qwik Component</>;
});

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
```

### layout.tsx

```tsx
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
```

## For cycle

### layout.tsx

```tsx
export default component$(() => {
	return (
		<>
			<SideBar items={[{ name: 'Trending', route: '/trending' }]} />
		</>
	);
});
```

### sidebar.tsx

```tsx
interface Props {
	items: { route: string; name: string }[];
}

export const SideBar = component$(({ items }: Props) => {
	return (
		<nav>
			<ul>
				{items.map((item) => (
					<li>{item.name}</li>
				))}
			</ul>
		</nav>
	);
});
```
