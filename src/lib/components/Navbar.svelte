<script lang="ts">
    import {Bars3, ChevronRight, Icon, XMark} from "svelte-hero-icons";
    import Title from "$lib/components/Title.svelte";
    import {theme} from "$lib/stores/theme.ts";
    import {onDestroy, onMount} from 'svelte';
    import {Router, Link} from "svelte-routing";
    import { default as routes} from "$lib/assets/data/routes.json";

    let showMenu = false;
    let currentTheme: 'white' | 'black' = 'white';

    $: iconClasses = `h-6 w-6 ${currentTheme === 'white' ? 'text-black' : 'text-white'}`;

    const unsubscribe = theme.subscribe((value) => {
        currentTheme = value;
    });

    let currentLocation;

    function getCurrentLocation() {
        if (window.location.pathname === '/home' && window.location.hash === '#contact') {
            return '/home#contact';
        }

        return window.location.pathname;
    }

    function changeCurrentLocation() {
        setTimeout(() => {
            currentLocation = getCurrentLocation();
        }, 100);
    }

    onMount(() => {
        currentLocation = getCurrentLocation();
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
        class="fixed z-10 top-0 pt-11 px-5 pb-5 w-screen lg:px-[70px] lg:bg-white"
        class:bg-white={currentTheme === 'white'}
        class:bg-black={currentTheme === 'black'}
    >
        <div class="flex justify-between lg:justify-start">
            <Link class="flex items-center" to="/">
                <p
                    class="text-base font-bold text-left text-black tracking-tighter lg:text-[28px] lg:mr-6 lg:text-black"
                    class:text-white={currentTheme === 'black'}
                >
                    UI/UX DESIGNER
                </p>
            </Link>
            <div class="hidden lg:flex gap-8 items-center">
                {#each routes as route}
                    <Link
                        to={route.link}
                        on:click={changeCurrentLocation}
                        class="hover:decoration-black font-avenir font-bold text-xl"
                    >
                        {#if currentLocation === route.link}
                            <span class="text-[#3221DF]">
                                {route.title}
                            </span>
                        {:else}
                            <span class="text-black">
                                {route.title}
                            </span>
                        {/if}
                    </Link>
                {/each}
            </div>
            {#if showMenu}
                <div class="lg:hidden" on:click={toggleMenu}>
                    <Icon
                        class={iconClasses}
                        src={XMark}
                    ></Icon>
                </div>
            {:else}
                <div class="lg:hidden" on:click={toggleMenu}>
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
            "top-16 transition-all duration-500 fixed w-full h-full z-10 pt-14 px-5 lg:hidden"
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
