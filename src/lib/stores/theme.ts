import {type Writable, writable} from 'svelte/store';

export const theme: Writable<'black' | 'white'> = writable('white');