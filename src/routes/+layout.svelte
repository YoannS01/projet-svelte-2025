<script>
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
    /**
     * @type {number}
     */
    let y;
    let innerWidth = 0;
    let innerHeight = 0;

    function goTop() {
        document.body.scrollIntoView();
    }
</script>

<div
    class="relative flex flex-col max-w-[1400px] ex-auto w-full text-sm sm:text-base min-h-screen"
>
    <div
        class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] " +
            (y > 0
                ? " opacity-full pointer-events-auto"
                : " pointer-events-none opacity-0")}
    >
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button
            on:click={goTop}
            class="ml-auto rounded-full aspect-square bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer"
        >
            <!-- svelte-ignore element_invalid_self_closing_tag -->
            <i
                class="fa-solid fa-arrow-up grid place-items-center aspect-square"
            />
        </button>
    </div>
    <Header {y} />
    <slot />
    <Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
