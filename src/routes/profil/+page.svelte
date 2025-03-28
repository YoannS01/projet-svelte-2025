<script lang="ts">
    import { enhance } from "$app/forms";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    interface User {
        name: string;
    }

    interface FormData {
        user?: User;
        message?: string;
        success?: boolean;
    }
    let { form, data }: { form: any; data: FormData } = $props();

    const handleLoginSuccess = () => {
        goto("/chats");
    };

    onMount(() => {
        if (form?.success) {
            setTimeout(() => goto("/chats"), 2000);
        }
    });
</script>

<div class="w-full p-2 my-4 md:px-5 lg:w-12/12 lg:pl-50 lg:pr-5 mr-auto">
    <h1 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Bienvenue sur votre <span class="poppins text-violet-400">Profil</span> !
    </h1>
    <p>Connectez-vous ou inscrivez-vous</p>
    {#if data.user}
        <p>Bienvenue {data.user.name}</p>
    {:else}
        {#if form?.message}
            <p>{form.message}</p>
        {/if}
        {#if form?.success}
            <p class="poppins text-green-200">Génial, tu es bien connecté !</p>

            {handleLoginSuccess()}
        {/if}
        <div
            class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-5 lg:pr-10 mr-auto rounded-2xl shadow-2xl"
        >
            <h2 class="font-semibold text-2xl sm:text-3xl md:text-4xl">
                Inscription
            </h2>

            <form action="?/register" method="POST" use:enhance>
                <label class:error={form?.field === "name_register"}>
                    Name
                    <input
                        type="text"
                        name="name_register"
                        value={form?.name}
                        class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    />
                </label>
                <label class:error={form?.field === "password_register"}>
                    Password
                    <input
                        type="password"
                        name="password_register"
                        class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    />
                </label>
                <label class:error={form?.field === "confirmPassword_register"}>
                    Confirm password
                    <input
                        type="password"
                        name="confirmPassword_register"
                        class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    />
                </label>
                <div class="my-2">
                    <button
                        class="uppercase text-sm font-bold tracking-wide bg-violet-900 text-gray-100 p-3 rounded-lg w-full
            focus:outline-none focus:shadow-outline">S'inscrire</button
                    >
                </div>
            </form>
        </div>
        <div
            class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-5 lg:pr-10 mr-auto rounded-2xl shadow-2xl"
        >
            <h2 class="font-semibold text-2xl sm:text-3xl md:text-4xl">
                Connexion
            </h2>

            <form action="?/login" method="POST" use:enhance>
                <label class:error={form?.field === "name_login"}>
                    Name
                    <input
                        type="text"
                        name="name_login"
                        class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    />
                </label>
                <label class:error={form?.field === "password_login"}>
                    Password
                    <input
                        type="password"
                        name="password_login"
                        class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    />
                </label>
                <div class="my-2">
                    <button
                        class="uppercase text-sm font-bold tracking-wide bg-violet-900 text-gray-100 p-3 rounded-lg w-full
            focus:outline-none focus:shadow-outline">Se connecter</button
                    >
                </div>
            </form>
        </div>
    {/if}
</div>

<style>
    .error {
        color: red;
    }
</style>
