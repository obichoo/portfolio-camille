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
    <section class="mb-5 px-5 lg:px-[70px]">
        {#if project}
            <Link to="/projects">
                <div class="hidden lg:flex lg:items-center lg:pt-10">
                    <img class="lg:h-5" src={ChevronBack} alt="">

                    <Title className="capitalize lg:text-sm lg:font-avenir lg:ml-2">
                        Retour
                    </Title>
                </div>
            </Link>
            <div class="flex lg:hidden">
                <Link to="/projects">
                    <img src={ChevronBack} alt="">
                </Link>
                <Title className="capitalize">
                    {project.name}
                </Title>
            </div>

            <div class="hidden lg:block text-white leading-none capitalize font-rufina text-center mt-[180px] text-[64px]">
                {project.name}
            </div>

            <div class="hidden lg:block text-[#3221DF] text-2xl text-center mt-6">
                {project.date}
            </div>

            <div class="pt-8 lg:pt-6 lg:mb-[180px]">
                <Text className="text-white lg:text-center">
                    {project.content}
                </Text>
            </div>

            {#if project.extra}
                <hr class="my-8 lg:hidden">
                <div class="text-white lg:hidden">
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
                    <img class="w-full rounded-xl mt-5 lg:mb-16 lg:mb-0" src={'/images/' + project.name + '/' + image} alt="">
                {/each}
                <img src="" alt="">
            </div>

            {#if project.video}
                <video class="w-full rounded-xl mt-5" controls src={project.video}></video>
            {/if}
        {:else}
            <Link to="/projects">
                <div class="flex lg:items-center lg:pt-10">
                    <img class="lg:h-5" src={ChevronBack} alt="">
                    <Title className="capitalize lg:text-sm lg:font-avenir lg:ml-2">
                        Retour
                    </Title>
                </div>
            </Link>
            <div>
                <Text className="text-white text-center mt-8 lg:text-2xl lg:mt-40">Ce projet n'existe pas.</Text>
            </div>
        {/if}
    </section>
</main>