<!-- svelte-ignore a11y-click-events-have-key-events -->
<script lang="ts">
    import { Link } from 'svelte-routing'
    import Dropdown from './Dropdown.svelte';
    let stateDropdown : boolean = false
</script>
<div class="navbar">
    <div class="container">
        {#if stateDropdown}
            <Dropdown />
        {/if}

        <div class="icon-box">
            <img src="/icon.png" alt="">
            <p class="title">Portafolio</p>
        </div>

        <div class="menu-burger">
            <img on:click={ () => stateDropdown = !stateDropdown } src={ !stateDropdown ? "/menu_white.svg" : "/close_white.svg" } alt="">
        </div>
        <div class="links">
            <Link to="/"><p>Inicio</p></Link>
            <Link to="about"><p>Sobre mi</p></Link>
            <Link to="portafolio"><p>Portafolio</p></Link>
            <Link to="contact"><p>Contacto</p></Link>
        </div>
    </div>
</div>
<style>
    .menu-burger {
        display: none;
    }
    .navbar {
        background-color: rgb(31,41,55);
        padding: 5px;
    }
    .container {
        width: 90%;
        margin: 0 auto;
        padding: 5px;

        display: flex;
        justify-content: space-between;
        column-gap: 10px;
        align-items: center;
    }
    .icon-box {
        display: flex;
        align-items: center;
        column-gap: 10px;
        cursor: pointer;
    }
    .title {
        color: white;
        font-size: 2.4rem;
        font-family: 'Nerko One', cursive;
    }
    .icon-box img {
        width: 40px;
    }
    .links {
        display: flex;
        column-gap: 1.4rem;
    }
    .links p {
        padding: 5px 10px;
        border-radius: 5px;
        color: white;
        font-size: 1.6rem;
    }
    .links p:hover {
        cursor: pointer;
        background-color: rgb(69, 79, 94);
    }
    @media (max-width: 767px) {
        .container {
            width: 98%;
            padding: 2px;
        }
        .icon-box img {
            width: 30px;
        }
        .icon-box .title {
            font-size: 2rem;
        }
        .links {
            display: none;
        }
        .menu-burger {
            display: block;
        }
        .menu-burger img {
            width: 40px;
            cursor: pointer;
        }
    }
</style>
