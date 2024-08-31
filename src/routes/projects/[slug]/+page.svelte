<script lang="ts">
    import {default as projects} from "$lib/assets/data/projects.json";
    import {theme} from "$lib/stores/theme.ts";
    import Title from "$lib/components/Title.svelte";
    import ChevronBack from "$lib/images/back-chevron.svg";
    import {Link} from "svelte-routing";
    import Text from "$lib/components/Text.svelte";
    import {onDestroy, onMount} from "svelte";

    theme.set('black');

    export let project

    onMount(() => {
        setTimeout(() => {
            const projectName = location.href.split('/').pop()
            project = projects.find(project => project.name === projectName)
        });
    });

    onDestroy(() => {
        project = null;
    });
</script>

<main class="mt-8">
    <section class="mb-5 px-5">
        {#if project}
            <div class="flex">
                <Link to="/projects">
                    <img src={ChevronBack} alt="">
                </Link>
                <Title className="capitalize">
                    {project.name}
                </Title>
            </div>

            <div class="pt-8">
                <Text className="text-white">
                    {project.content}
                </Text>
            </div>

            {#if project.extra}
                <hr class="my-8">
                <div class="text-white">
                    <p class="font-bold text-center mb-8">{project.extra.title}</p>
                    <ul class="mx-4">
                        {#each project.extra.items as item}
                            <li class="list-disc text-sm">{item}</li>
                        {/each}
                    </ul>
                </div>
            {/if}

            <div>
                {#each project.images as image}
                    <img class="w-full rounded-xl mt-5" src={'/images/' + project.name + '/' + image} alt="">
                {/each}
                <img src="" alt="">
            </div>

            {#if project.video}
                <video class="w-full rounded-xl mt-5" controls src={project.video}></video>
            {/if}
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