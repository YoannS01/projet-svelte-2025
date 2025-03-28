<script>
    import { page } from "$app/stores";
</script>

<h1>Une erreur est survenue !</h1>
<p>Status de l'erreur : {$page.status} :</p>
{#if $page.error}
    <p>Description de l'erreur : {$page.error.message}</p>
{:else}
    <p>Aucune description disponible.</p>
{/if}
