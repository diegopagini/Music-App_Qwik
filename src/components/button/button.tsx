/** @format */
import { component$ } from '@builder.io/qwik';

interface Props {
	color: 'primary' | 'default';
	label?: string;
	icon?: string;
}

export const Button = component$(({ color, label, icon }: Props) => {
	return (
		<button
			class={{
				'qwik-button-primary text-xs': color === 'primary',
				'qwik-button-default': color !== 'primary',
			}}>
			{icon ? <i class={'uil ' + icon}></i> : null}
			{label}
		</button>
	);
});
