<script>
    let src = '';
    let className = '';
    let imgClass = '';

    export { src, className as class, imgClass };
</script>
<div class={className + " rounded-3xl overflow-hidden"}>
    <img class={"w-full h-full object-cover " + imgClass} src={src} alt="">
</div>