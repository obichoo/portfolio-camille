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
    <section class="mb-5 px-5">
        <Title className="mb-8">Mes projets</Title>
        <Text className="text-white">
            Bienvenue sur la page de mes projets !
            Vous trouverez ici une sélection de mes travaux récents,
            mettant en avant mes compétences en UX/UI design.
        </Text>
        <Text className="text-white mb-8">
            Chaque projet reflète mon engagement envers la qualité,
            l’innovation et la satisfaction utilisateur.
        </Text>

        {#each projects as project}
            <div class="mb-8">
                <Link to={`/projects/${project.name}`}>
                    <ProjectPreviewCard imgPreviewSrc={project.preview}>
                        <span slot="title">{project.title}</span>
                    </ProjectPreviewCard>
                </Link>
            </div>
        {/each}
    </section>
</main>