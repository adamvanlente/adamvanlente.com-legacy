<template>
  <div>
    <p>I'm Adam, a software engineer and entrepreneur. I am currently at <a href="http://www.yieldmo.com/" target="new">Yieldmo</a> - a <a href="http://www.gv.com/" target="new">GV</a> and <a href="https://www.usv.com/" target="new">USV</a> backed startup - where I'm helping build some world-class applications.</p>
    <p>Previously I spent a few years working in geospatial software, mostly at Google on a <a href="https://www.google.com/work/mapsearth/" target="new">Maps for Business</a> product, and also at <a href="https://www.crunchbase.com/organization/urbanmapping" target="new">Urban Mapping</a>, where I spruced up some applications before they were acquired by <a href="http://www.maponics.com/" target="new">Maponics</a>.</p>
    <p>I also co-own a 14 year old t-shirt company called <a href="http://www.retroduck.com/" target="new">RetroDuck</a>, which I ran for a little over 6 years while honing my craft as a software engineer.</p>
  </div>
</template>

<script>
export default {
  name: 'MainBody'
}
</script>

<style scoped>
  p {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    width: 600px;
    text-align: left;
    margin: 24px auto;
  }
  p a {
    color: #F98364;
    text-decoration: none;
  }
  p a:hover {
    color: #5d5959;
  }
  @media only screen and (max-width: 500px) {
    p {
      font-size: 18px;
      width: 95%;
      padding: 0 12px;
      margin: 18px auto;
      display: block;
    }
  }
</style>
