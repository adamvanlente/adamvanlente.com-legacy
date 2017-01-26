<template>
  <div class="page">
    <SiteHeader></SiteHeader>
    <MainBody></MainBody>
    <ProjectList></ProjectList>
    <SiteFooter></SiteFooter>
  </div>
</template>

<script>
import SiteHeader from 'components/SiteHeader'
import SiteFooter from 'components/SiteFooter'
import MainBody from 'components/MainBody'
import ProjectList from 'components/ProjectList'

export default {
  components: {
    SiteHeader,
    SiteFooter,
    MainBody,
    ProjectList
  }
}
</script>
