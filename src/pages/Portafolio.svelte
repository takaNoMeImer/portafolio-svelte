<script>
    import Blog from "../lib/Blog.svelte";
    import Card from "../lib/Card.svelte";
    import MyItem from "../lib/MyItem.svelte";
    import { datos } from '../store.js';
</script>
<div class="grid-items">
    {#each $datos as dato}
        <!-- <Card dato={dato}/> -->
        <!-- <Blog item={dato}/> -->
        <MyItem item={dato}/>
    {/each}
</div>

<style>
    .grid-items {
        padding: 1rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
</style>