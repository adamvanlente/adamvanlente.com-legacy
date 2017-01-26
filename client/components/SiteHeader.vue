<template>
  <div class="header">
    <span class="leftMenu">
      <a href="/">Adam VanLente</a>
    </span>
    <span class="rightMenu">
      <a href="https://www.github.com/adamvanlente" target="new">GitHub</a>
      <a href="https://angel.co/adam-vanlente" target="new">AngelList</a>
    </span>

  </div>
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style scoped>
  .header {
    display: block;
    font-family: 'Playfair Display', serif;
    text-align: left;
    padding: 12px;
    font-size: 16px;
    white-space: nowrap;
  }
  .header span {
    display: inline-block;
    width: 50%;
  }
  .leftMenu a {
    color: #dedede;
    font-weight: bold;
    text-decoration: none;
  }
  .rightMenu {
    text-align: right;
  }
  .rightMenu a {
    color: #F98364;
    font-weight: bold;
    text-decoration: none;
    margin: 0 4px;
  }
</style>
