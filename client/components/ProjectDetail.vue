<template>
  <div class="project-wrapper">

    <template>
      <div id="app">
        <h2>Project: {{ currentProject.name }}</h2>
        <span class="link-holder" v-if="currentProject.links.length > 0">
          <label>Links:</label>
          <a v-for="link in currentProject.links" v-bind:href="link.url" target="new">{{ link.text }}</a>
        </span>
        <p v-for="block in currentProject.textBlocks">{{ block }}</p>
        <div class="image-wrapper">
          <img v-for="img in currentProject.images" v-bind:src="img" v-bind:class=" img.indexOf('attach') != -1 ? 'attach-img' : ''">
        </div>

      </div>
    </template>

    <h1>{{ msg }}</h1>
    <router-link :to="{ path: project.slug }" class="big-link" v-show="currentRoute != project.slug" v-for="(project, index) in projectData">{{ project.name }}</router-link>
  </div>

</template>

<script>

export default {
  name: 'ProjectList',
  data () {
    return {
      msg: 'Other Projects',
      projectData: this.$store.state.projects
    }
  },
  mounted() {},
  computed: {
    currentRoute() {
      return this.$route.params.name
    },
    currentProjectName() {
      return this.$route.params.name;
    },
    currentProject() {
      return this.projectData[this.currentProjectName];
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
    margin-top: 48px;
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
  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    color: #333;
    margin-bottom: 48px;
   }
   p {
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    color: #333;
    margin: 24px auto;
   }
   img {
    display: block;
    width: 550px;
    margin: 32px auto;
    border: 1px solid #e0dfdf;
   }
   .link-holder {
     display: block;
     width: 600px;
     margin: 32px auto;
     text-align: left;
   }
   .link-holder a {
     font-family: 'Helvetica', sans-serif;
     display: inline-block;
     color: #F98364;
     font-size: 16px;
     margin-right: 8px;
   }
   .link-holder label {
    font-family: 'Helvetica', sans-serif;
    font-size: 16px;
    display: inline-block;
    margin-right: 8px;
    vertical-align: middle;
   }
   @media only screen and (max-width: 500px) {
     p {
       width: 85%;
     }
     img {
       width: 85%;
     }
     .link-holder {
       width: 85%;
     }
   }

   .attach-img {
    display: inline-block;
    vertical-align: top;
    height: 450px;
    width: auto;
    margin: 0 24px;
    border: none;
   }

   .image-wrapper {
     display: block;
     text-align: center;
   }
</style>
