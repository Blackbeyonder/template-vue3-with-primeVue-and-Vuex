<template>
  <headerComponent />
  <div class="home">
    <h1>template home</h1>
    <div class="card flex justify-content-center flex-wrap gap-3">
      <Button label="Primary" raised />
      <Button label="Secondary" severity="secondary" raised />
      <Button label="Success" severity="success" raised />
      <Button label="Info" severity="info" raised />
      <Button label="Warning" severity="warning" raised />
      <Button label="Help" severity="help" raised />
      <Button label="Danger" severity="danger" raised />
      <Button label="Contrast" severity="contrast" raised />
    </div>
    <Button label="Click me" @click="handleClick" />

<div>
   <hr />
    <h1>example vuex</h1>
    <div>
      <InputText  type="text" v-model="username" placeholder="Username" />
      <InputText  type="password" v-model="password" placeholder="Password" />
      <Button label="Example Login and showStore" @click="login"></Button>
    </div>
    <!-- validate data -->
    <!-- SHOW DATA IN STORE BEGIN-->
    <div v-if="objInStore.username">
      <h3>Data in store</h3>
    <p>username:{{objInStore.username}}</p>
    <p>username:{{objInStore.password}}</p>
     <!-- SHOW DATA IN STORE END-->
    </div>

</div>
   
  </div>

  <footerComponent></footerComponent>
</template>

<script src="./homeScript.ts" lang="ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "./homeStyles.scss";
</style>