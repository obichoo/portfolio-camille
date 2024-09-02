<script lang="ts">
    let imgPreviewSrc = "";
    let imgSide = "left";

    export {imgPreviewSrc, imgSide};
</script>

<div class={"bg-[#141414] shadow-lg rounded-lg overflow-hidden lg:flex " + (imgSide === "right" ? 'flex-row-reverse' : '')}>
    {#if imgPreviewSrc}
        <img class="h-[155px] object-cover w-full object-top lg:h-[322px] lg:w-3/5 lg:min-w-[60%]" src={imgPreviewSrc} alt="">
    {/if}
    <div class="p-5 lg:px-11 lg:flex lg:flex-col lg:justify-center lg:items-start">
        <p class="mb-1 text-base font-bold text-white lg:text-2xl">
            <slot name="title"></slot>
        </p>
        <p class="mb-0 text-[#B6B6B6] text-[15px] lg:text-xl">
            <slot name="content"></slot>
        </p>
    </div>
</div>
