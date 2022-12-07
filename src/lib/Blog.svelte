<script lang="ts">
    import type { cardItem } from "../types";


    export let item : cardItem;
</script>
<div class="item" style="background-image: url('/{item.poster}.png'); background-size: 20em 20em; background-position: center center;">
    <div class="item__title">
        <h3>{item.name}</h3>
        <!-- <hr /> -->
    </div>
    <div class="info">
        <span
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.</span
        >
    </div>
    <div class="footer">
        <div class="icon-holder">
            <span>
                <!-- <i class="fa fa-comment-o" /> -->
                <button>
                    <div class="icon"><box-icon name='show-alt'></box-icon></div>
                    Demo
                </button>
                <button>
                    <div class="icon"><box-icon type='logo' name='github'></box-icon></div>
                    Codigo
                </button>
                <!-- <space />
                <i class="fa fa-calendar" />
                <span>03.12.2015</span> -->
            </span>
        </div>
    </div>

    <div class="color-overlay" />
</div>

<style>
    @import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700);

    .item {
        position: relative;
        width: 22em;
        height: 30em;

        background: url('https://cache.desktopnexus.com/thumbseg/25/25727-bigthumbnail.jpg')
            no-repeat;
        background-size: 22em 30em;
        box-shadow: 3px 4px 10px rgba(179, 179, 179, 0.5);
        margin: auto;
        /* mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC); */
        overflow: hidden;
    }
    .item * {
        position: relative;
        z-index: 2;
    }
    .item:hover .color-overlay {
        background: rgba(74, 100, 114, 0.8);
    }
    .item:hover .info {
        bottom: -3em;
        opacity: 1;
    }
    .item,
    .color-overlay {
        border-radius: 0.7em;
    }
    .color-overlay {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        transition: 0.7s background;
        background: rgba(74, 100, 114, 0.3);
        z-index: 1;
    }

    .item__title {
        display: inline-block;
        width: 100%;
        text-align: center;
        margin-top: 2em;
    }
    /* .item__title hr {
        margin-top: -0.4em;
        margin-bottom: 1em;
        width: 5em;
        height: 0.25em;
        box-sizing: content-box;
        border: none;
        background: #d0bc57;
    } */
    h3 {
        display: inline-block;
        font-weight: 500;
        letter-spacing: 2px;
        font-size: 1.4em;

        text-align: center;
    }

    .info {
        font-family: "Droid Serif", serif;
        font-size: 1.2em;
        color: #ddd;
        line-height: 1.1em;
        padding: 0 2em;

        position: relative;
        bottom: -4em;
        opacity: 0;
        background: transparent;
        transition: opacity 0.3s, bottom 0.3s;
        text-align: center;
    }

    .footer {
        display: inline-block;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 10em;
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
        border-radius: 0 0 0.7em 0.7em;
    }

    .footer > .icon-holder {
        position: absolute;
        bottom: 0;
        height: 3em;
        width: 100%;
        display: inline-block;
        font-size: 1.2em;
        padding: 0 2em;
    }

    .icon-holder {
        text-align: center;
    }
    .icon-holder button {
        display: flex;
        padding: 8px 12px;
        border-radius: 4px;
        background-color: rgb(6, 207, 23);
        color: white;
        border: none;
        font-size: 1.4rem;
    }
    .icon-holder button > * {
    }

    .icon-holder span,
    h3 {
        color: #accff0;
    }
</style>
