<script lang="ts">
    import {theme as appTheme} from "$lib/stores/theme.js";
    import {onDestroy} from "svelte";

    let className = '';
    let currentTheme: 'white' | 'black' = 'white';

    const unsubscribe = appTheme.subscribe((value) => {
        currentTheme = value;
    });

    onDestroy(() => {
        unsubscribe();
    });

    export { className };
</script>
<h1
    class:text-black={currentTheme === 'white'}
    class:text-white={currentTheme === 'black'}
    class={className + " font-rufina font-bold font text-left text-3xl tracking-wide"}
>
    <slot />
</h1>