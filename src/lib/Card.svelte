<script>
    export let dato;
</script>

<div class="container">
    <div class="item">
        <div class="imgBx">
            <img src={`/${dato.poster}.png`} alt=""/>
        </div>
        <div class="contentBx">
            <h2>{dato.name}</h2>
            <div class="size">
                {#each dato.skills as skill}
                   <h3>{skill}</h3> 
                {/each}
            </div>
            <a href="l">Buy Now</a>
        </div>
    </div>
</div>

<style>


    * {
        font-family: "Poppins", sans-serif;
    }

    .contentBx a {
        margin-top: 10rem;
    }

     .item {
        position: relative;
        width: 320px;
        height: 450px;
        background: #232323;
        border-radius: 20px;
        overflow: hidden;
    }

    /* Color background motion */
    .container .item:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #9bdc28;
        clip-path: circle(150px at 80% 20%);
        transition: 0.5s ease-in-out;
    }

    /* Circle motion */
    .container .item:hover:before {
        clip-path: circle(300px at 80% -20%);
    }

    

    /* .container .item  */
    .imgBx {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10000;
        width: 100%;
        height: 220px;
        transition: 0.5s;
    }

    .container .item:hover .imgBx {
        top: 0%;
        transform: translateY(0%);
    }

    .container .item .imgBx img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-25deg);
        width: 270px;
    }

    .container .item .contentBx {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100px;
        text-align: center;
        transition: 1s;
        z-index: 10;
    }

    .container .item:hover .contentBx {
        height: 210px;
    }

    .container .item .contentBx h2 {
        position: relative;
        font-weight: 600;
        letter-spacing: 1px;
        color: #fff;
        margin: 0;
    }

    .container .item .contentBx .size {
        margin-top:2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px 20px;
        transition: 0.5s;
        opacity: 0;
        visibility: hidden;
        padding-top: 0;
        padding-bottom: 0;
    }

    .container .item:hover .contentBx .size {
        opacity: 1;
        visibility: visible;
        transition-delay: 0.5s;
    }

    h3 {
        color: #fff;
        font-weight: 300;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-right: 10px;
    }
</style>
