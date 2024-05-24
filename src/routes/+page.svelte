<script lang="ts">
  import "../app.css";
  import { page } from '$app/stores';
  import { scrollto } from "svelte-scrollto"

	import Logo from "$lib/assets/svg/Logo.svelte";
	import { onMount } from "svelte";

  let y: number;
  let quiTop: number;
  let headerHeight: number;
  let currentDate = new Date();

  onMount(() => {
    quiTop = getOffsetTop(document.getElementById('qui'))
    headerHeight = document.getElementById('top').clientHeight
  })

  function getOffsetTop(element: any) {
    if (!element) return 0;
    return getOffsetTop(element.offsetParent) + element.offsetTop;
  }
</script>

<svelte:window bind:scrollY={y} />

<svelte:head>
  <title>Adrien Nuvolone, Plomberie et Climatisation dans le 06</title>
  <meta property="og:site_name" content="ADN CLIM" />
  <meta name="title" content="ADN CLIM" />
  <meta property="og:title" content="ADN CLIM" />
  <meta name="description" content="La société ADN CLIM vous offre ses services pour tous vos travaux d’installation de climatisation, pompe à chaleur, plomberie générale, climatisation, ballons d’eau chaude, installation de ventilation VMC, passage de chauffage fioul/gaz à une pompe à chaleur, mais aussi création et rénovation de salles de bains complètes." />
  <meta property="og:description" content="La société ADN CLIM vous offre ses services pour tous vos travaux d’installation de climatisation, pompe à chaleur, plomberie générale, climatisation, ballons d’eau chaude, installation de ventilation VMC, passage de chauffage fioul/gaz à une pompe à chaleur, mais aussi création et rénovation de salles de bains complètes." />
	<meta property="og:type" content="website" />

	{#if $page.url.host.includes('beavers-agency')}
    <meta name="robots" contnt="noindex, nofollow">
  {/if}
</svelte:head>

<section id="top" class="fixed w-full z-50 transition-colors border-2 {y >= (quiTop - headerHeight) ? 'bg-white border-spray' : 'bg-transparent border-transparent '}">
  <header class="mx-auto max-w-screen-xl py-8 flex justify-center sm:justify-between items-center px-8 sm:px-0">
    <a
      use:scrollto="{'#top'}"
      href="#top"
      title="ADN Clim"
    >
      <Logo newClass="max-w-[12rem] lg:max-w-[18rem] h-auto w-full" />
    </a>
    <ul class="sm:flex items-center gap-12 hidden">
      <li>
        <a
          use:scrollto="{'#qui'}"
          href="#qui"
          title="Qui suis-je ?"
          class="relative text-2xl transition-colos before:content-[''] before:absolute before:top-full before:h-[.2rem] before:bg-blue before:block before:transition-all hover:before:w-full before:w-4 before:duration-300 text-black"
        >
          Qui suis-je ?
        </a>
      </li>
      <li>
        <a
          use:scrollto="{'#adn'}"
          href="#entreprise"
          title="Entreprise ADN CLIM"
          class="relative text-2xl transition-colos before:content-[''] before:absolute before:top-full before:h-[.2rem] before:bg-blue before:block before:transition-all hover:before:w-full before:w-4 before:duration-300 text-black"
        >
          L'entreprise
        </a>
      </li>
      <li>
        <a
          use:scrollto="{'#prestations'}"
          href="#prestations"
          title="Nos prestations"
          class="relative text-2xl transition-colos before:content-[''] before:absolute before:top-full before:h-[.2rem] before:bg-blue before:block before:transition-all hover:before:w-full before:w-4 before:duration-300 text-black"
        >
          Nos prestations
        </a>
      </li>
      <!-- <li>
        <a
          use:scrollto="{'#realisations'}"
          href="#realisations"
          title="Réalisations ADN CLIM"
          class="relative text-2xl transition-colos before:content-[''] before:absolute before:top-full before:h-[.2rem] before:bg-blue before:block before:transition-all hover:before:w-full before:w-4 before:duration-300 text-black"
        >
          Nos réalisations
        </a>
      </li> -->
      <li>
        <a
          use:scrollto="{'#fournisseurs'}"
          href="#fournisseurs"
          title="Les fournisseurs de ADN CLIM"
          target="_blank"
          class="relative text-2xl transition-colos before:content-[''] before:absolute before:top-full before:h-[.2rem] before:bg-blue before:block before:transition-all hover:before:w-full before:w-4 before:duration-300 text-black"
        >
          Nos fournisseurs
        </a>
      </li>
      <!-- <li>
        <a
          use:scrollto="{'#avis'}"
          href="#avis"
          title="Les avis de ADN CLIM"
          target="_blank"
          class="relative text-2xl transition-colos before:content-[''] before:absolute before:top-full before:h-[.2rem] before:bg-blue before:block before:transition-all hover:before:w-full before:w-4 before:duration-300 text-black"
        >
          Nos avis
        </a>
      </li> -->
      <li>
        <a
          use:scrollto="{'#rdv'}"
          href="#rdv"
          target="_blank"
          title="Contacter ADN CLIM"
          class="text-2xl btn spray"
        >
          Nous contacter
        </a>
      </li>
    </ul>
  </header>
</section>

<section class="relative min-h-3/4-screen flex justify-center items-center">
  <div class="absolute top-0 left-0 w-full h-full">
    <img
      src="/amenagement_interieur_decoration_salle_bain_agreable_moderne.webp"
      alt="Salle de bain agréable et moderne"
      class="w-full h-full object-cover z-20" />
  </div>
  <h1 class="relative z-40 max-w-7xl text-black max-lg:px-8 text-6xl lg:text-7xl text-center font-medium leading-tight">
    <span class="text-blue">AD</span>rien <span class="text-blue">N</span>uvolone,<br />Plomberie et Climatisation dans le 06
  </h1>
</section>

<section id="qui" class="max-w-screen-xl mx-auto sm:flex justify-between gap-20 py-32 sm:py-52 px-8 sm:px-0">
  <div class="flex-2 mb-10 sm:mb-0">
    <h2 class="font-medium text-6xl text-blue pb-14">Adrien Nuvolone</h2>
    <div class="flex flex-col gap-6">
      <p class="text-2xl">
        Je suis Adrien Nuvolone, artisan plombier, climaticien depuis plus de 10 ans.
      </p>
      <p class="text-2xl">
        Formé par l’<span class="font-medium">Association des <a href="https://compagnons-du-devoir.com/" title="Compagnons du Devoir" target="_blank" class="underline text-blue">Compagnons du Devoir</a></span> dans toute la France pendant quelques années, <span class="font-medium">je remporte, en 2013, <a href="https://www.meilleursouvriersdefrance.info/concoursmaf.html" title="le concours des meilleurs apprentis de France" target="_blank" class="underline text-blue">le concours des meilleurs apprentis de France (MAF)</a></span>. J’ai continué de me former dans différentes entreprises pour ensuite me mettre à mon compte en 2021. <span class="font-medium">Titulaire de l’attestation de capacité fluide frigorigène, je suis hautement qualifié en poses de climatisation, chambre froide, cave à vin et pompe à chaleur</span>.
      </p>
      <p class="text-2xl">
        Dans le cadre d’une création ou d'une rénovation complète de votre logement, je peux me mettre à disposition en tant que maitre d’œuvre. Je travaille avec d’autres corps de métier (peintre, plaquiste, électricien, maçon, menuisier) très qualifiés. Tous ensemble nous serons ravis de réaliser vos projets du début à la fin.
      </p>
      <p class="text-2xl">
        Basé sur Villeneuve-Loubet, j’interviens dans les communes avoisinantes.
      </p>
    </div>
    <a
      use:scrollto="{'#rdv'}"
      href="#rdv"
      target="_blank"
      title="Contacter ADN CLIM"
      class="text-2xl btn mt-20 spray"
    >
      Nous contacter
    </a>
  </div>
  <div class="flex-1">
    <img
      src="/adrien-nuvolone.webp"
      alt="Adrien Nuvolone"
      class="rounded-lg" />
  </div>
</section>

<section id="adn" class="max-w-screen-xl mx-auto flex-col-reverse sm:flex-row flex gap-20 justify-between py-32 sm:py-52 px-8 sm:px-0">
  <div class="flex-1">
    <img
      src="/piscine_terrasse.webp"
      alt="Piscine et terrasse"
      class="rounded-lg" />
  </div>
  <div class="flex-2 mb-10 sm:mb-0">
    <h2 class="font-medium text-6xl text-blue pb-14">L'entreprise ADN CLIM</h2>
    <div class="flex flex-col gap-6">
      <p class="text-2xl font-medium">
        ADN CLIM est une entreprise de Plomberie et de climatisation 
      </p>
      <p class="text-2xl">
        En tant qu’artisan plombier, j’interviens dans les plus brefs délais aussi bien dans le neuf que la rénovation pour assurer la fiabilité et la solidité de vos installations de plomberie, piscine et climatisation.
      </p>
      <p class="text-2xl">
        La société ADN CLIM est à votre écoute et vous offre ses services pour tous vos travaux d’installation de climatisation, pompe à chaleur, plomberie générale (maison complète création ou rénovation de réseau), climatisation, ballons d’eau chaude (électriques et thermodynamiques), installation de ventilation VMC, passage de chauffage fioul/gaz à une pompe à chaleur, mais aussi création et rénovation de salles de bains complètes.
      </p>
      <p class="text-2xl">
        J’assure aussi une grande variété de prestations comme le remplacement de robinetterie, mitigeur, thermostatique, réducteur de pression, filtre eau sanitaire, ballon électrique, mécanisme WC, chasse d'eau, entretien canalisation/ climatisation…
      </p>
      <p class="text-2xl">
        J’assure aussi une grande variété de prestations comme le remplacement de robinetterie, mitigeur, thermostatique, réducteur de pression, filtre eau sanitaire, ballon électrique, mécanisme WC, chasse d'eau, entretien canalisation/ climatisation…
      </p>
      <p class="text-2xl">
        Je réalise des études et conseils personnalisés et concentre mes efforts pour vous proposer la meilleure efficacité.
      </p>
    </div>
    <a
      use:scrollto="{'#rdv'}"
      href="#rdv"
      target="_blank"
      title="Contacter ADN CLIM"
      class="text-2xl btn mt-20 spray"
    >
      Nous contacter pour un devis gratuit
    </a>
  </div>
</section>

<section id="prestations" class="max-w-screen-xl mx-auto py-32 sm:py-52 px-8 sm:px-0">
    <h2 class="font-medium text-6xl text-blue pb-14">Nos prestations</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 max-lg:flex-col gap-20">
      <div class="grid-span-1">
        <h3 class="text-blue text-5xl pb-6">Plomberie</h3>
        <ul class="flex flex-col gap-2">
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Création de réseau cuivre, multicouche, acier (appartement ou maison)
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Installation de sanitaire
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Réparation de fuites d’eau
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Soudure tuyauterie
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Débouchage de canalisations
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Dégorgement de WC
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Création / Rénovation de salle de bain, cuisine
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Création / Rénovation de toilettes (standard, suspendu avec ou sans option)
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Création douche à l’italienne, receveur en résine, baignoire
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Dépannage
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Aménagement de salle de bain
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Adaptation de salle de bain pour sénior/personne à mobilité réduite
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Enlevage de bidet
          </li>
        </ul>
      </div>
      <div class="grid-span-1">
        <h3 class="text-blue text-5xl pb-6">Climatisation / Chauffage</h3>
        <ul class="flex flex-col gap-2">
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Etude thermique / frigorifique en fonction de votre logement
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Installation split mural
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Installation de console
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Installation de casette
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Installation de gainable (climatisation dans les faux plafonds ou comble), 
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Installation VRV (volume de réfrigérant variable)
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Mise en place de régulations programmables et gérables à distance
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Installation de thermostat pour chacune de vos pièces
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Contrat d’entretien climatisation
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Dépannage
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Installation de plancher chauffant
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Installation de radiateur
          </li>
        </ul>
      </div>
      <div class="grid-span-1">
        <h3 class="text-blue text-5xl pb-6">Traitement des eaux</h3>
        <ul class="flex flex-col gap-2">
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Installation d’adoucisseur
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Dépannage
          </li>
        </ul>
      </div>
      <div class="grid-span-1">
        <h3 class="text-blue text-5xl pb-6">Piscine</h3>
        <ul class="flex flex-col gap-2">
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Création de réseau de piscine
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Filtration
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Installation pompe doseuse pour le Ph, chlore, sel
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Installation de pompe à chaleur (simple ou connecté)
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Installation de programmation
          </li>
          <li class="pl-10 relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-blue before:text-2xl text-2xl">
            Dépannage, réparation
          </li>
        </ul>
      </div>
    </div>
</section>

<section class="lg:h-[70rem]">
  <img
    src="/reparation_cuisine.webp"
    alt="Réparation cuisine"
    class="w-full lg:h-full lg:object-cover" />
</section>

<section id="fournisseurs" class="max-w-screen-xl mx-auto sm:flex items-center justify-between py-32 sm:py-52 px-8 sm:px-0">
  <div>
    <h2 class="font-medium text-6xl text-blue pb-14">Nos fournisseurs</h2>
    <div class="grid grid-cols-2 lg:grid-cols-5 gap-24 items-center">
      <div class="col-span-1">
        <img
          src="/logo-atlantic.png"
          alt="Atlantic"
          class="w-full"
        >
      </div>
      <div class="col-span-1">
        <img
          src="/geberit.png"
          alt="Geberit"
          class="w-full"
        >
      </div>
      <div class="col-span-1">
        <img
          src="/pacific-general.webp"
          alt="Pacific General"
          class="w-full"
        >
      </div>
      <div class="col-span-1">
        <img
          src="/fujitsu.png"
          alt="Fujitsu"
          class="w-full"
        >
      </div>
      <div class="col-span-1">
        <img
          src="/grohe.svg"
          alt="Grohe"
          class="w-full"
        >
      </div>
      <div class="col-span-1">
        <img
          src="/hansgrohe.svg"
          alt="Hangsrohe"
          class="w-full"
        >
      </div>
      <div class="col-span-1">
        <img
          src="/nicoll.svg"
          alt="Nicoll"
          class="w-full"
        >
      </div>
      <div class="col-span-1">
        <img
          src="/daikin.svg"
          alt="Daikin"
          class="w-full"
        >
      </div>
      <div class="col-span-1">
        <img
          src="/mitsubishi.svg"
          alt="Mitshubishi"
          class="w-full"
        >
      </div>
      <div class="col-span-1">
        <img
          src="/pecomark.jpg"
          alt="Pecomark"
          class="w-full"
        >
      </div>
    </div>
  </div>
</section>

<section id="rdv" class="relative lg:before:content-[''] lg:before:absolute lg:before:inset-0 lg:before:left-0 lg:before:h-full lg:before:w-1/2 lg:before:bg-spray before:z-10 lg:after:content-[''] lg:after:absolute lg:after:inset-y-0 lg:after:right-0 lg:after:h-full lg:after:w-1/2 lg:after:bg-blue lg:after:z-10">
  <footer class="mx-auto max-w-screen-xl relative z-20 flex flex-col sm:flex-row text-white">
    <div class="flex-1 p-16 max-lg:bg-spray text-blue">
      <h4 class="font-medium text-4xl mb-4">SASU ADN CLIM</h4>
      <p class="font-medium text-2xl mb-8">Adrien Nuvolone</p>
      <p class="text-2xl mb-8">
        1314 Avenue de Vaugrenier<br />
        06270 Villeneuve Loubet
      </p>
      <p class="text-2xl">
        SIRET : 89349206600020<br />
        Numéro TVA : FR35893492066<br />
        Numéro RCS : Antibes B 893 492 066
      </p>
    </div>
    <div class="flex-1 p-16 text-white max-lg:bg-blue">
      <p class="font-medium text-3xl mb-4">RDV pour un devis</p>
      <p class="text-2xl mb-8">
        <a class="relative text-2xl transition-colos tracking-tight before:content-[''] before:absolute before:top-full before:h-px before:bg-orange before:block before:transition-all hover:before:w-full before:w-4 before:duration-300" href="tel:+33640366615" title="Appeler Adrien Nuvolone">06.40.36.66.15</a>
      </p>
      <p class="font-medium text-3xl mb-4">Nous écrire</p>
      <p class="text-2xl">
        <a class="relative text-2xl transition-colos tracking-tight before:content-[''] before:absolute before:top-full before:h-px before:bg-orange before:block before:transition-all hover:before:w-full before:w-4 before:duration-300" href="mailto:adnclim@gmail.com" title="Nous écrire un mail">
          adnclim@gmail.com
        </a>
      </p>
    </div>
  </footer>
</section>


<section class="text-center py-16 px-8 sm:px-0">
  <p class="text-xl">
    © {currentDate.getFullYear()} Tous droits réservés par ADN CLIM - Réalisé avec amour par <a href="https://beavers-agency.fr" title="Beavers - L'agence digital média spécialiste de l'habitat" target="_blank" class="relative inline-block text-black tracking-tight before:content-[''] before:absolute before:top-full before:h-[.2rem] before:bg-blue before:block before:transition-all hover:before:w-full before:w-4 before:duration-300">Beavers, l'agence des castors</a>
  </p>
</section>