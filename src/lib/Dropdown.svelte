<script>
    import { Link } from "svelte-routing";
</script>
<div class="dropdown">
    <div class="links-dropdown">
        <Link to="/"><p>Inicio</p></Link>
        <Link to="about"><p>Sobre mi</p></Link>
        <Link to="portafolio"><p>Portafolio</p></Link>
        <Link to="contact"><p>Contacto</p></Link>
    </div>
</div>
<style>
    .dropdown {
        position: absolute;
        left: 0;
        top: 0;
        height: 200px;
        width: 200px;
        background-color: #fff;
    }
    .links-dropdown {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        transition: all 6s ease;
    }
    .links-dropdown p {
        font-size: 1.5rem;
        border: 1px solid black;
        padding: 10px;
    }
    .links-dropdown p:hover {
        background-color: black;
    }
</style>