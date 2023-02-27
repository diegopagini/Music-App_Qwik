/** @format */
import { component$ } from '@builder.io/qwik';

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
