/** @format */
import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import { Avatar } from '../avatar/avatar';
import { Button } from '../button/button';
import { InputSrc } from '../input-src/input-src';

export const Header = component$(() => {
	return (
		<header class={'h-[76px] p-5 pt-4 flex'}>
			<div class={'w-full flex'}>
				<InputSrc />
			</div>
			<div class={'flex gap-2'}>
				<div class={'flex gap-2'}>
					<Button label='Pricing' color='default' />
					<Button label='Go Premiun' icon='uil-star' color='primary' />
				</div>
				<div class={'flex gap-2'}>
					<Link href={'/auth/login'}>
						<Avatar src={'https://cdn-icons-png.flaticon.com/512/149/149071.png'} />
					</Link>
				</div>
			</div>
		</header>
	);
});
