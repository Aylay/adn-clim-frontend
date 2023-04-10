<script lang="ts">
  import "../app.css";
  
  import Logo from "$lib/components/svg/Logo.svelte";

  const travaux = ['Plomberie', 'Climatisation', 'Chauffage', 'Piscine']
</script>

<div class="w-full h-screen flex justify-center items-center px-[5%]">
  <div class="flex flex-col max-w-[65rem]">
    <Logo newClass="w-full h-auto" />
    <div class="lg:flex justify-between max-lg:grid max-lg:grid-cols-2 max-lg:gap-8 mt-8">
      {#each travaux as travail}
        <p class="text-blue uppercase text-4xl max-lg:odd:text-right max-lg:even:text-left">{travail}</p>
      {/each}
    </div>
    <div class="my-32 flex lg:justify-between max-lg:flex-col gap-4">
      <a class="underline hover:no-underline text-blue text-3xl" href="tel:+33640366615">
        06 40 36 66 15
      </a>
      <a class="underline hover:no-underline text-blue text-3xl" href="mailto:adnclim@gmail.com">
        adnclim@gmail.com
      </a>
    </div>
    <p class="text-center text-5xl">Site en construction</p>
  </div>
</div>