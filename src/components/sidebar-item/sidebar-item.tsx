/** @format */
import { $, component$, useStylesScoped$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

interface Props {
	name?: string;
	icon?: string;
	route?: string;
}

export const SidebarItem = component$(({ name, icon, route }: Props) => {
	useStylesScoped$(SideBarItemStyle);
	const navigation: any = useNavigate();

	const moveToPage = $(() => {
		if (route) navigation.path = route;
	});

	return (
		<div onClick$={moveToPage} class={'qwik-sidebar-item-component '}>
			<span>
				<i class={'uil ' + icon}></i>
			</span>
			<span class={'text-sm'}>
				<>{name}</>
			</span>
		</div>
	);
});

const SideBarItemStyle = `
          div:hover{
              opacity:1;
              transform: translateX(20px);
          }
      `;
