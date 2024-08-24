<script lang="ts">
    let imgPreviewSrc = "";

    export {imgPreviewSrc};
</script>

<div class="bg-[#141414] shadow-lg rounded-lg overflow-hidden">
    {#if imgPreviewSrc}
        <img class="h-[155px] object-cover w-full object-top" src={imgPreviewSrc} alt="">
    {/if}
    <div class="p-5">
        <p class="mb-1 text-base font-bold text-white">
            <slot name="title"></slot>
        </p>
        <p class="mb-0 text-[#B6B6B6] text-[15px]">
            <slot name="content"></slot>
        </p>
    </div>
</div>