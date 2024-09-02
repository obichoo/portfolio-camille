<script>
    import {theme} from "$lib/stores/theme.ts";
    import {onDestroy} from "svelte";

    let className = '';
    let onClick = () => {};
    let currentTheme = 'black';

    const unsubscribe = theme.subscribe((value) => {
        currentTheme = value;
    });

    onDestroy(() => {
        unsubscribe();
    });

    export { className as class, onClick };
</script>

<button
    type="button"
    on:click={() => onClick()}
    class={'p-4 text-sm bg-black text-white rounded-[5px] lg:text-xl ' + className}
    class:border-white={currentTheme === 'black'}
    class:border={currentTheme === 'black'}
>
    <slot></slot>
</button>