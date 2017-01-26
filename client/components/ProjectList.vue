<template>
  <div class="project-wrapper">
    <h1>{{ msg }}</h1>
    <router-link :to="{ path: 'project/' + project.slug }" class="big-link" v-for="(project, index) in projectData">{{ project.name }}</router-link>
  </div>

</template>

<script>

export default {
  name: 'ProjectList',
  data () {
    return {
      msg: 'Recent Projects',
      projectData: this.$store.state.projects
    }
  }
}

</script>

<style scoped>
  .project-wrapper {
    width: 600px;
    margin: 0 auto;
    text-align: left;
  }
  h1 {
    display: block;
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    text-align: left;
    font-weight: normal;
    color: #ccc7c7;
    border-bottom: 1px solid;
    margin-bottom: 8px;
    padding-bottom: 0;
  }
  .project-box {
    display: inline-block;
    height: 150px;
    width: 150px;
    overflow: hidden;
    border: 1px solid #e2dede;
    margin: 12px;
  }
  .big-link {
    display: block;
    color: #F98364;
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    text-decoration: none;
  }
  .big-link:hover {
    color: #5d5959;
  }
  .project-box img {
    display: block;
    height: 100%;
    width: auto;
    opacity: 0.7;
  }
  .project-box label {
    font-family: 'Helvetica', sans-serif;
    display: block;
    position: absolute;
    text-align: center;
    width: 150px;
  }
  @media only screen and (max-width: 500px) {
    .project-wrapper {
      width: 95%;
    }
  }
</style>
