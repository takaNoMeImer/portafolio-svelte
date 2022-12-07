<script>
    import Loader from "../lib/Loader.svelte";

    let stateLoader = false;
 
</script>
<div style={ stateLoader ? 'backdrop-filter: blur(10px);' : "" } class="contact-container">
    <div class="left-side">
        <img src="/contact.png" alt="Contact Img">
    </div>
    <div class="right-side">
        <p class="contact__title">
            Contacto
        </p>
        <div class="control">
            <input type="text" placeholder="Nombre" required>
        </div>
        <div class="control">
            <input type="email" placeholder="Email" required>
        </div>
        <div class="control">
            <textarea name="" id="" rows="10" placeholder="Mensaje" required></textarea>
        </div>
        <div class="control">
            <button on:click={ 
                () => stateLoader = !stateLoader    
            }>{#if stateLoader}
                <Loader />
            {:else}
                Enviar
            {/if}
        
            </button>

            <!-- {#if stateLoader}
                <Loader />
            {/if} -->
        </div>
    </div>
</div>

<style>
    .contact-container {
        width: 70%;
        margin: 3rem auto;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .contact__title {
        text-align: center;
        font-size: 2.4rem;
    }
    .right-side, .left-side {
        background-color: #fff;
    }
    .right-side {
        padding: 14px;
        border-radius: 0 5px 5px 0;
    }
    .left-side {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px 0 0 5px;
    }
    .left-side img {
        height: 80%;
    }
    .control {
       /*  border: 1px solid white; */
       width: 95%;
       margin: 10px auto;
    }
    .control input {
        border-radius: 5px;
        width: 100%;
        font-size: 1.2rem;
        outline: none;
        padding: 8px;
        border: none;
        box-shadow: 0px 0px 6px 0px rgba(199,191,191,1);
    }
    .control button {
        width: 100%;
        font-size: 1.2rem;
        border: none;
        padding: 10px 15px;
        border-radius: 3px;
        font-weight: 600;
        background-color: rgb(154, 190, 238);
        color: rgb(74, 74, 250);
    }
    textarea {
        resize: none;
        padding: 8px;
        width: 100%;
        border: none;
        outline: none;
        font-size: 1.2rem;
        box-shadow: 0px 0px 6px 0px rgba(199,191,191,1);
    }
    .control input, textarea {
        color: rgb(54, 54, 54);
    }

    @media (max-width: 600px) {
        .contact-container {
            width: 90%;
            grid-template-columns: repeat(1, 1fr);
        }
        .left-side {
            display: none;
        }
        .right-side {
            border-radius: 5px;
        }
    }
</style>