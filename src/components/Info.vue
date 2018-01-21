<template lang="html">
  <div class="center">
    <h1>Webbteknik 1 Kontrollverktyg</h1>
    <div v-show="firstExecute">
      <p>Detta verktyget kan användas för att kontrollera de vanligaste felen i Labb 2 (U1) i Webbteknik 1.</p>
      <p>För att verktyget ska fungera korrekt måste HTML-koden vara validerad med hjälp av en validator. Exempel på en sådan är <a href="https://validator.nu" target="_blank">validator.nu</a>.</p>
      <p>Om ni märker att verktyget inte fungerar som den ska eller har några övriga synpunkter ta gärna kontakt med 'Maciej Siwek' via FirstClass.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['firstExecute']
}
</script>

<style lang="css" scoped>
  h1 {
      margin: 0.6em 0;
  }

  a {
    color: #9068be;
    text-decoration: none;
    transition: color 0.2s ease-out;
  }

  a:hover {
    color: #6accc8;
  }

  @media (hover: none) {
     a:hover {
       color: #9068be;
     }
  }

  @media only screen and (max-width: 500px) {
    h1 {
        margin: 0.4em 0;
    }

    p {
      margin: 0.6em 0;
    }
}
</style>
