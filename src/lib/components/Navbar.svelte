<script lang="ts">
    import {Bars3, ChevronRight, Icon, XMark} from "svelte-hero-icons";
    import Title from "$lib/components/Title.svelte";
    import {theme} from "$lib/stores/theme.ts";
    import { onDestroy } from 'svelte';
    import {Router, Link} from "svelte-routing";
    import { default as routes} from "$lib/assets/data/routes.json";
    import {goto} from "$app/navigation";

    let showMenu = false;
    let currentTheme: 'white' | 'black' = 'white';

    $: iconClasses = `h-6 w-6 ${currentTheme === 'white' ? 'text-black' : 'text-white'}`;

    const unsubscribe = theme.subscribe((value) => {
        currentTheme = value;
    });
    onDestroy(() => {
        unsubscribe();
    });

    function toggleMenu() {
        showMenu = !showMenu;
    }
</script>

<div class="mt-6">
    <nav
        class="fixed top-0 pt-11 px-5 pb-5 w-screen"
        class:bg-white={currentTheme === 'white'}
        class:bg-black={currentTheme === 'black'}
    >
        <div class="flex justify-between">
            <Link to="/">
                <p
                    class="text-base font-bold text-left text-black tracking-tighter"
                    class:text-white={currentTheme === 'black'}
                >
                    UI/UX DESIGNER
                </p>
            </Link>
            {#if showMenu}
                <div on:click={toggleMenu}>
                    <Icon
                        class={iconClasses}
                        src={XMark}
                    ></Icon>
                </div>
            {:else}
                <div on:click={toggleMenu}>
                    <Icon
                        mini="{true}"
                        class={iconClasses}
                        src={Bars3}
                    ></Icon>
                </div>
            {/if}
        </div>
    </nav>

    <Router>
        <div class={[
            currentTheme === 'white' ? "bg-white" : "bg-black",
            showMenu ? "left-0" : "left-full",
            "top-16 transition-all duration-500 fixed w-full h-full z-10 pt-14 px-5"
            ].join(' ')}
        >
            {#each routes as route, i}
                <Link
                    on:click={toggleMenu}
                    to={route.link}
                    class="flex justify-between hover:decoration-black"
                >
                    <Title>
                        {route.title}
                    </Title>
                    <Icon class="w-8 text-gray-300" src={ChevronRight}></Icon>
                </Link>
                {#if i !== routes.length - 1}
                    <hr class="my-9 border-gray-300" />
                {/if}
            {/each}
        </div>
    </Router>
</div>
