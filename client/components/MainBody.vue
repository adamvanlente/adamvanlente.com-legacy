<template>
  <div>
    <p><span class="currently">Currently</span>VP of Product &amp; Engineering at <a href="http://www.mikmak.tv/" target="new">MikMak</a>, building tools for the world's biggest brands in NYC.</p>
    <p><span class="previously">Previously</span>Lead Product Engineer &amp; Product Owner <a href="http://www.yieldmo.com/" target="new">Yieldmo</a>, where we built some great Applications, grew a ton, and did excellent things for mobile advertising.</p>
    <p><span class="before">Before</span>Several years working in geospatial software, mostly at Google on a <a href="https://www.google.com/work/mapsearth/" target="new">Maps for Business</a> product, and also at <a href="https://www.crunchbase.com/organization/urbanmapping" target="new">Urban Mapping</a>, where I spruced up some applications before they were acquired by <a href="http://www.maponics.com/" target="new">Maponics</a>.</p>
    <p><span class="earlier">Earlier</span>Ran a small t-shirt company called <a href="http://www.retroduck.com/" target="new">RetroDuck</a> for about 7 years. I honed my product &amp; software skills here, and still co-own the company with some friends.</p>
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
