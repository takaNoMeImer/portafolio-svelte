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
        <button>
            <box-icon name='show-alt'></box-icon>
            Demo
        </button>
        <button>
            <box-icon type='logo' name='github' size='25px'></box-icon>
            Codigo
        </button>
    </div>
</div>
<style>
    .item {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: 2fr 1fr 1fr 1fr;

        padding: 5px;
        border-radius: 5px;
        width: 90%;
        height: 100%;
        border: 1px solid white;
        background-color: #fff;
    }
    .item__title {
        text-align: center;
        font-size: 1.4rem;
    }
    .item__image {
        width: 100%;
        text-align: center;
    }
    .item__image img {
        width: 90%;
    }
    .item__actions {
        text-align: center;
        display: flex;
        justify-content: space-evenly;
        column-gap: 3px;
    }
    .item__actions button{
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        border: none;
        border-radius: 4px;
        width: 40%;
        padding: 6px 15px;
        font-size: 1.3rem;
        font-family: 'Fira Code';
        color: rgb(16, 110, 252);
        background-color: rgba(134, 173, 233, 0.459);
    }
</style>