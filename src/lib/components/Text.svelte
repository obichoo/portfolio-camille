<script lang="ts">
    let className = '';

    export {className}
</script>

<p class={className + " font-avenir text-sm lg:text-xl font-medium leading-5 tracking-wide"}>
    <slot />
</p>