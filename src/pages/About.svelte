<script>
    import 'boxicons';
</script>
<div class="about-grid">
    <div class="card">
        <div class="card__img">
            <img src="/vite.svg" alt="">
        </div>

        <div class="card__title">
            <h1>Imer Gonzalez</h1>
        </div>

        <div class="card__link">
            <a href="https://www.facebook.com/goland.goja/"><box-icon type="logo" name="facebook" color="white" size="40px"></box-icon></a>
            <a href="https://www.instagram.com/bartdimhz/"><box-icon type="logo" name="instagram" color="white" size="40px"></box-icon></a>
            <a href="https://github.com/takaNoMeImer"><box-icon type='logo' name='github' color="white" size="40px"></box-icon></a>
            <a href="https://www.linkedin.com/in/imer-gonzalez-21ab66239/"><box-icon type="logo" name="linkedin" color="white" size="40px"></box-icon></a>
        </div>
    </div> <!-- .card -->

    <div class="description">
        <div class="description__title">
            <p>Sobre mi</p>
        </div>
        <div class="description__info">
            Mi nombre es Imer Gonzalez, tengo 20 años. Soy un Programador, Desarrollador Web. Mi experiencia va desde el uso de distintos lenguajes de programacion, gestores de bases de datos SQL y NoSQL, Frameworks Javascript.
        </div>
    </div>
</div>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

    .about-grid {
        width: 90%;
        margin: 3rem auto;
        padding: 5px;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
 
    .card {
        padding: 1.5rem;
        border-radius: 10px;
        width: 60%;
        /* background-color: rgb(25, 28, 46); */
        background-color: rgb(34, 34, 34);
        justify-self: end;
        box-shadow: 0 0 8px .1px white;
    }
    .card__img {
        text-align: center;
    }
    .card__img img {
        width: 65%;
        border: 2px solid white;
        border-radius: 50%;
        outline: 5px solid rgb(5, 194, 163);
    }
    .card__title {
        margin-top: 2rem;
        color: white;
        text-align: center;
        text-transform: uppercase;
        font-family: 'Rubik', sans-serif;
    }
    .card__link {
        margin-top: 2rem;
        display: flex;
        justify-content: space-around;
    }

    .description {
        width: 70%;
        padding: 1.4rem;
        border-radius: 10px;
        background-color: rgb(34, 34, 34);
        box-shadow: 0 0 8px .1px white;
    }
    .description__title, .description__info {
        font-family: 'Rubik', sans-serif;
        text-transform: uppercase;
    }
    .description__title {
        text-align: center;
        font-size: 2.8rem;
        color: white;
        margin-bottom: 2rem;
    } 
    .description__info {
        text-align: justify;
        font-size: 1.3rem;
        color: white;
    }
    @media (max-width: 550px) {
        .about-grid {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>