<template>
  <div class="page">
    <SiteHeader></SiteHeader>
    <ProjectDetail></ProjectDetail>
    <SiteFooter></SiteFooter>
  </div>
</template>

<script>
import SiteHeader from 'components/SiteHeader'
import SiteFooter from 'components/SiteFooter'
import MainBody from 'components/MainBody'
import ProjectList from 'components/ProjectList'
import ProjectDetail from 'components/ProjectDetail'

export default {
  components: {
    SiteHeader,
    SiteFooter,
    MainBody,
    ProjectList,
    ProjectDetail
  },
  computed: {
    projectName() {
      return $route.params;
    }
  }
}

</script>
