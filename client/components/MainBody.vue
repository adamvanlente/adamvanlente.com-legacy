<template>
  <div>
    <p><span class="currently">Currently</span>CTO at <a href="http://www.mikmak.tv/" target="new">MikMak</a> in NYC, where we're building an ecommerce insights platform for the world's largest brands.</p>
    <p><span class="previously">Previously</span>Lead Product Engineer &amp; Product Owner <a href="http://www.yieldmo.com/" target="new">Yieldmo</a>, where we built some great Applications, grew a ton, and did excellent things for mobile advertising.</p>
    <p><span class="before">Before</span>Built Geospatial software with the <a href="https://www.google.com/work/mapsearth/" target="new">Google Maps for Business</a> team in Mountain View, and at <a href="https://www.crunchbase.com/organization/urbanmapping" target="new">Urban Mapping</a> in San Francisco.</p>
    <p><span class="earlier">Earlier</span>Ran a small t-shirt company called <a href="http://www.retroduck.com/" target="new">RetroDuck</a> back home in Michigan. I honed my product &amp; software skills here, and still co-own the company with some friends.</p>
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

  .previously,
  .currently,
  .earlier,
  .before {
    display: block;
  }

  .currently {
    color: rgb(226, 224, 224);
  }

  .previously {
    color: rgb(226, 224, 224);
  }

  .earlier {
    color: rgb(226, 224, 224);
  }

  .before {
    color: rgb(226, 224, 224);
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
