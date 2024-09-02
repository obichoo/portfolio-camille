<script lang="ts">
    import {theme} from "$lib/stores/theme.ts";
    import Title from "$lib/components/Title.svelte";
    import Text from "$lib/components/Text.svelte";
    import ProjectPreviewCard from "$lib/components/ProjectPreviewCard.svelte";
    import {default as projects} from "$lib/assets/data/projects.json";
    import {Link} from "svelte-routing";

    theme.set('black');
</script>

<main class="mt-8">
    <section class="mb-5 px-5 lg:px-[70px]">
        <Title className="mb-8 lg:mt-80 lg:text-center lg:leading-normal">Mes projets</Title>
        <Text className="text-white lg:hidden">
            Bienvenue sur la page de mes projets !
            Vous trouverez ici une sélection de mes travaux récents,
            mettant en avant mes compétences en UX/UI design.
        </Text>
        <Text className="text-white mb-8 lg:hidden">
            Chaque projet reflète mon engagement envers la qualité,
            l’innovation et la satisfaction utilisateur.
        </Text>

        <Text className="text-white text-center hidden lg:block lg:mb-80">
            Bienvenue sur la page de mes projets !
            Vous trouverez ici une sélection de mes travaux récents,
            mettant en avant mes compétences en UX/UI design.
            Chaque projet reflète mon engagement envers la qualité,
            l’innovation et la satisfaction utilisateur.
        </Text>

        {#each projects as project, i}
            <div class="mb-8 lg:mb-16">
                <Link to={`/projects/${project.name}`}>
                    <div class="hidden lg:block">
                        <ProjectPreviewCard imgSide={i % 2 === 1 ? 'left' : 'right'} imgPreviewSrc={project.preview}>
                            <span slot="title">{project.title}</span>
                            <span slot="content">{project.content}</span>
                        </ProjectPreviewCard>
                    </div>

                    <div class="lg:hidden block">
                        <ProjectPreviewCard imgPreviewSrc={project.preview}>
                            <span slot="title">{project.title}</span>
                        </ProjectPreviewCard>
                    </div>
                </Link>
            </div>
        {/each}
    </section>
</main>