<script>
    import { page } from '$app/stores';
    import {default as projects} from "$lib/assets/data/projects.json";
    import {theme} from "$lib/stores/theme.ts";
    import Title from "$lib/components/Title.svelte";
    import ChevronBack from "$lib/images/back-chevron.svg";
    import {Link} from "svelte-routing";
    import Text from "$lib/components/Text.svelte";

    theme.set('black');

    const project = projects.find(project => project.name === $page.params.slug);
</script>

<main class="mt-8">
    <section class="mb-5 px-5">
        {#if project}
            <div class="flex">
                <Link to="/projects">
                    <img src={ChevronBack} alt="">
                </Link>
                <Title className="capitalize">
                    {$page.params.slug}
                </Title>
            </div>
        {:else}
            <div class="flex">
                <Link to="/projects">
                    <img src={ChevronBack} alt="">
                </Link>
                <Title className="capitalize">
                    Retour
                </Title>
            </div>
            <div>
                <Text className="text-white text-center mt-8">Ce projet n'existe pas.</Text>
            </div>
        {/if}
    </section>
</main>