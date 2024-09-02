<script>
    import Title from '$lib/components/Title.svelte';
    import Subtitle from '$lib/components/Subtitle.svelte';
    import Image from "$lib/components/Image.svelte";
    import Button from "$lib/components/Button.svelte";
    import Photo from "$lib/images/camille.png"
    import {theme} from "$lib/stores/theme.ts";
    import {default as projects} from "$lib/assets/data/projects-preview.json";
    import ProjectPreviewCard from "$lib/components/ProjectPreviewCard.svelte";
    import Text from "$lib/components/Text.svelte";
    import Mail from "$lib/images/mail.svg";
    import LinkedIn from "$lib/images/linkedin.svg";
    import {onMount} from "svelte";
    import {Link} from "svelte-routing";

    theme.set('white');

    function scrollToContact() {
        document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
    }

    onMount(() => {
        setTimeout(() => {
            if (window.location.href.includes('#contact')) {
                scrollToContact();
            }
        }, 300)
    });

</script>

<main>
    <section class="mb-5 lg:mb-[135px] px-5 lg:px-[70px]">
        <hr class="my-8 lg:mb-[135px]">
        <div class="lg:flex items-center flex-row-reverse">
            <div class="mb-8 lg:mb-0 lg:w-[480px] lg:h-[480px]">
                <Image imgClass="object-[50%_33%] grayscale" class="w-full h-[370px] lg:w-[480px] lg:h-[480px]" src={Photo}></Image>
            </div>
            <div class="lg:mr-16">
                <Title className="mb-3 lg:mb-6 lg:leading-normal">Hello, je suis <span class="text-c-blue">Camille</span> </Title>
                <Subtitle class="mb-8 lg:mb-16">Une UX/UI designer, créative et pleine d'énergie, avec une petite touche parisienne.</Subtitle>
                <Link to="/about">
                    <Button>
                        À propos de moi
                    </Button>
                </Link>
            </div>
        </div>
    </section>
    <section class="bg-black px-5 pt-8 lg:pt-16 pb-1 lg:px-[70px]">
        <h1 class="text-2xl lg:text-[40px] mb-8 lg:mb-16 text-white">Quelques projets</h1>

        {#each projects as project, i}
            <div class="mb-8 lg:mb-16">
                <Link to={"/projects/" + project.title.toLowerCase()}>
                    <div class="hidden lg:block">
                        <ProjectPreviewCard imgSide={i % 2 === 1 ? 'left' : 'right'} imgPreviewSrc={project.image}>
                            <span slot="title">{project.title}</span>
                            <span slot="content">{project.content}</span>
                        </ProjectPreviewCard>
                    </div>

                    <div class="lg:hidden block">
                        <ProjectPreviewCard>
                            <span slot="title">{project.title}</span>
                            <span slot="content">{project.content}</span>
                        </ProjectPreviewCard>
                    </div>
                </Link>
            </div>
        {/each}
    </section>

    <section id="contact" class="px-5 pt-8 lg:pt-16 pb-10 lg:px-[70px] text-black">
        <h1 class="text-2xl lg:text-[40px] mb-8 lg:mb-16">Contact</h1>

        <Text>
            Pour toute question, demande de collaboration ou pour discuter de projets potentiels,
            je suis à votre disposition. Vous pouvez me joindre facilement via les moyens suivants :
        </Text>

        <div class="lg:flex justify-around items-center">
            <div class="text-center py-4 mt-8 lg:mt-16">
                <img class="block mx-auto mb-3 h-[34px] lg:h-[68px]" src={Mail} alt="mail icon" />
                <p class="font-bold mb-0 lg:text-2xl">Adresse e-mail</p>
                <a class="underline lg:text-xl" href="mailto:camilleaudoux.pro@gmail.com">camilleaudoux.pro@gmail.com</a>
            </div>

            <div class="text-center mt-8 lg:mt-16">
                <img class="block mx-auto mb-3 h-[34px] lg:h-[68px]" src={LinkedIn} alt="linkedin icon" />
                <p class="font-bold mb-0 lg:text-2xl">LinkedIn</p>
                <a class="underline lg:text-xl" href="https://fr.linkedin.com/in/camille-audoux-19236226a">Camille Audoux</a>
            </div>
        </div>
    </section>
</main>
