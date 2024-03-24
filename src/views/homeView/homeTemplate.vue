<template>
  <h1 >template home</h1>
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
</template>

<script src="./home.ts" lang="ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "./homeStyles.scss";
</style>