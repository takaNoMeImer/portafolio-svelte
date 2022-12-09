<script>
    import MyItem from "../lib/MyItem.svelte";
    import { datos } from '../store.js';
</script>
<div class="grid-items">
    {#each $datos as dato}
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
    @media (max-width: 800px) {
        .grid-items {
            width: 98%;
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (max-width: 550px) {
        .grid-items {
            width: 95%;
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>