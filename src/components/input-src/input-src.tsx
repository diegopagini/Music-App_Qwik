/** @format */
import { $, component$, QwikMouseEvent, useSignal } from '@builder.io/qwik';

import { InputList } from '../input-list/input-list';

export const InputSrc = component$(() => {
	/**
	 * "useSignal" for primitive values.
	 * "useStore" for objects.
	 */
	const state = useSignal(false);

	const handleDropList = $((event: QwikMouseEvent<HTMLDivElement>) => {
		const id = (event.target as HTMLDivElement).id;
		if (id !== 'input-src-qwik') state.value = false;
	});

	return (
		<div window:onClick$={handleDropList} class={{ 'drop-shadow-lg': state.value }}>
			<div class={{ 'qwik-input-src ': true }}>
				<input
					onClick$={() => (state.value = true)}
					class={'bg-transparent w-full'}
					id={'input-src-qwik'}
					placeholder='Search tracks, artists, styles or sound effects'
					type='text'
				/>
				<div class={'flex justify-center content-center items-center '}>
					<button class={'bg-slate-800 rounded-lg w-6 h-6'}>
						<i class='text-white uil uil-search'></i>
					</button>
				</div>
			</div>
			{state.value ? <InputList /> : null}
		</div>
	);
});
