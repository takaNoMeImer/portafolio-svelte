<script>
    import Navbar from "./lib/Navbar.svelte";
    import { Router, Route, Link } from "svelte-routing";
    import Home from "./pages/Home.svelte";
    import About from "./pages/About.svelte";
    import Contact from "./pages/Contact.svelte";
    import Portafolio from "./pages/Portafolio.svelte";
    export let url = "";
</script>

<Router {url}>
    <Navbar />
    <Route path="/"><Home /></Route>
    <Route path="about" component={About} />
    <Route path="contact" component={Contact} />
    <Route path="portafolio" component={Portafolio} />
</Router>

<style></style>
