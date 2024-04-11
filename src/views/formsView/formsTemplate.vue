<template>
  <headerComponent />
  <div class="formsClass">
    <h1>template forms</h1>

    <form @submit.prevent="submitForm">
    <div >
      <label for="firstName">Nombre:</label>
      <input type="text" id="firstName" v-model.trim="state.firstName">
      <div class="text-red-500">
        <span v-if="!v$.$pending && v$?.firstName?.$error">*valor requerido</span>
      </div>
    </div>
    <div>
      <label for="lastName">Apellido:</label>
      <input type="text" id="lastName" v-model.trim="state.lastName">
      <div class="text-red-500">
        <span v-if="!v$.$pending && v$?.lastName?.$error">*valor requerido</span>
      </div>
    </div>
    <button type="submit">Enviar</button>
  </form>
  </div>

  <footerComponent></footerComponent>
</template>

<script src="./formsScript.ts" lang="ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "./formsStyles.scss";
</style>