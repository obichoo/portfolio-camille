<script>
    import Title from '$lib/components/Title.svelte';
    import Subtitle from '$lib/components/Subtitle.svelte';
    import Image from "$lib/components/Image.svelte";
    import Button from "$lib/components/Button.svelte";
    import Photo from "$lib/images/camille.jpg"
    import {theme} from "$lib/stores/theme.ts";
    import {default as projects} from "$lib/assets/data/projects-preview.json";
    import ProjectPreviewCard from "$lib/components/ProjectPreviewCard.svelte";
    import Text from "$lib/components/Text.svelte";
    import Mail from "$lib/images/mail.svg";
    import LinkedIn from "$lib/images/linkedin.svg";

    theme.set('white');
</script>

<main>
    <section class="mb-5 px-5">
        <hr class="my-8">
        <Image src={Photo} class="w-full h-80 mb-8"></Image>
        <Title className="mb-3">Hello, je suis <span class="text-c-blue">Camille</span> </Title>
        <Subtitle class="mb-8">Une UX/UI designer, créative et pleine d'énergie, avec une petite touche parisienne.</Subtitle>
        <Button>
            À propos de moi
        </Button>
    </section>
    <section class="bg-black px-5 pt-8 pb-1">
        <h1 class="text-2xl mb-8 text-white">Quelques projets</h1>

        {#each projects as project}
            <div class="mb-8">
                <ProjectPreviewCard>
                    <span slot="title">{project.title}</span>
                    <span slot="content">{project.content}</span>
                </ProjectPreviewCard>
            </div>
        {/each}
    </section>
    <section class="px-5 pt-8 pb-1">
        <h1 class="text-2xl mb-6">Contact</h1>

        <Text>
            Pour toute question, demande de collaboration ou pour discuter de projets potentiels,
            je suis à votre disposition. Vous pouvez me joindre facilement via les moyens suivants :
        </Text>

        <div class="text-center py-4 mt-8">
            <img class="block mx-auto mb-3" width="48" height="34"  src={Mail} alt="mail icon" />
            <p class="font-bold mb-0">Adresse e-mail</p>
            <a class="underline" href="mailto:camilleaudoux.pro@gmail.com">camilleaudoux.pro@gmail.com</a>
        </div>

        <div class="text-center mt-8">
            <img class="block mx-auto mb-3" width="48" height="34"  src={LinkedIn} alt="linkedin icon" />
            <p class="font-bold mb-0">LinkedIn</p>
            <a class="underline" href="https://fr.linkedin.com/in/camille-audoux-19236226a">Camille Audoux</a>
        </div>
    </section>
</main>

<style>

</style>
