<script>
    export let item;
</script>

<div class="item">
    <div class="item__image">
        <img src={`/${item.poster}.png`} alt="Imagen" />
    </div>

    <div class="item__title">
        <p>{item.name}</p>
    </div>

    <div class="item__info">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>

    <div class="item__actions">
        <div class="link">
            <a href="">
                <box-icon name="show-alt" size="25px"/>
                Test
            </a>
        </div>
        <div class="link">
            <a href={item.github} target="__blank">
                <box-icon type="logo" name="github" size="25px" />
                Codigo
            </a>
        </div>
    </div>
</div>

<style>
    .item {
        padding: 5px;
        border-radius: 5px;
        width: 98%;
        height: 100%;
        border: 1px solid white;
        background-color: #fff;
    }
    .item__title {
        text-align: center;
        font-size: 1.4rem;
        margin-top: 1rem;
    }
    .item__info {
        margin-top: 1rem;
        text-align: center;
        width: 90%;
    }
    .item__image {
        margin-top: 1rem;
        width: 100%;
        text-align: center;
    }
    .item__image img {
        width: 90%;
        height: 18em;
        object-fit: cover;
    }
    .item__actions {
        margin-top: 1rem;
        text-align: center;
        display: flex;
        justify-content: space-evenly;
        column-gap: 3px;
    }
    .item__actions .link {
        margin-top: .5rem;
        width: 45%;
        border-radius: 4px;
        padding: 6px;
        background-color: rgba(134, 173, 233, 0.459);
    }
    .item__actions .link a {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: .6rem;
        font-size: 1.3rem;
        text-decoration: none;
        color: rgb(16, 110, 252);
    }
    /* .item__actions button {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        border: none;
        border-radius: 4px;
        width: 40%;
        padding: 6px 15px;
        font-size: 1.3rem;
        font-family: "Fira Code";
        color: rgb(16, 110, 252);
        background-color: rgba(134, 173, 233, 0.459);
    } */
    @media (max-width: 800px) {
        .item {
            width: 95%;
        }
    }
    @media (max-width: 550px) {
        .item {
            width: 100%;
        }
    } 
</style>
