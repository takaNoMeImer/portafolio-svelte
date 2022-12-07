<script></script>

<div class="home-container">
    <img src="/home_icon.png" alt="" />
    <div class="home_description">
        <p>Hola, soy Imer. Programador y Desarrollador Web</p>
    </div>
</div>

<style>
    .home-container {
        width: 85%;
        height: 100%;
        margin: 0 auto;
        text-align: center;
    }
    .home-container img {
        margin-top: 1rem;
        width: 30%;
        margin-bottom: 8rem;
    }
    .home_description {
        color: white;
        font-size: 2rem;
        font-weight: 600;
    }

    @media (min-width: 500px) {
        .home-container img {
            width: 25%;
        }
    }
    @media (min-width: 768px) {
        .home-container {
            width: 60%;
        }
        .home-container img {
            width: 25%;
            margin-bottom: 7rem;
        }
        .home_description {
            font-size: 3rem;
        }
    }
    @media (max-width: 250px) {
        .home-container img {
            width: 40%;
        }
    }
</style>
