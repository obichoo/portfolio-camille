<script>
    import Title from '$lib/components/Title.svelte';
    import Subtitle from '$lib/components/Subtitle.svelte';
    import Image from "$lib/components/Image.svelte";
    import Button from "$lib/components/Button.svelte";
    import Photo from "$lib/images/camille.jpg"
    import {theme} from "$lib/stores/theme.ts";
    import ProjectCard from "$lib/components/ProjectPreviewCard.svelte";
    import {default as projects} from "$lib/assets/data/projects-preview.json";
    import ProjectPreviewCard from "$lib/components/ProjectPreviewCard.svelte";

    theme.set('white');
</script>

<main>
    <section class="mb-5 px-5">
        <hr class="my-8">
        <Image src={Photo} class="w-full h-80 mb-8"></Image>
        <Title class="mb-3">Hello, je suis <span class="text-c-blue">Camille</span> </Title>
        <Subtitle class="mb-8">Une UX/UI designer, créative et pleine d'énergie, avec une petite touche parisienne.</Subtitle>
        <Button>
            À propos de moi
        </Button>
    </section>
    <section class="bg-black px-5 pt-8">
        <h1 class="text-2xl mb-8 text-white">Quelques projets</h1>

        {#each projects as project}
            <div class="mb-8">
                <ProjectPreviewCard imgPreviewSrc={project.image}>
                    <span slot="title">{project.title}</span>
                    <span slot="content">{project.content}</span>
                </ProjectPreviewCard>
            </div>
        {/each}
    </section>
</main>

<style>

</style>
