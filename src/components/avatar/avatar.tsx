/** @format */
import { component$ } from '@builder.io/qwik';

interface Props {
	src: string;
	alt?: string;
}

export const Avatar = component$(({ src, alt }: Props) => {
	return (
		<div class={'w-[40px] h-[40px]'}>
			<img class={'qwik-avatar'} src={src} alt={alt} />
		</div>
	);
});
