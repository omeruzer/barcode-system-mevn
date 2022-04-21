<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Barcode</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/"><a class="nav-link active" aria-current="page" href="#">Method 1</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/method2"><a class="nav-link active" aria-current="page" href="#">Method 2</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/method3"><a class="nav-link active" aria-current="page" href="#">Method 3</a></router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>