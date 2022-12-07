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
        width: 90%;
        margin: 0 auto;
        padding: 1rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 30em;
        gap: 2rem;
        justify-items: center;
    }
</style>