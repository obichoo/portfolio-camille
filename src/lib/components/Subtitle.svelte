<script lang="ts">
    import {theme} from "$lib/stores/theme.js";
    import {onDestroy} from "svelte";

    let className = '';
    let currentTheme: 'white' | 'black' = 'white';

    const unsubscribe = theme.subscribe((value) => {
        currentTheme = value;
    });

    onDestroy(() => {
        unsubscribe();
    });

    export { className as class };
</script>
<h2
    class:text-black={currentTheme === 'white'}
    class:text-white={currentTheme === 'black'}
    class={className + " font-avenir font-medium text-sm tracking-wide"}
>
    <slot />
</h2>