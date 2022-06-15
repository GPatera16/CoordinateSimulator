<template>
<div class="flex flex-col flex-initial items-center mt-10">
  <p class="mb-10 text-[50px]">Coordinate simulator 2022</p>
  <input v-model="text" @keyup.enter="submit" class="text-[25px] mb-10 border-2 border-black px-10 py-5">
  <p v-if="place" v-bind="place.country"></p>
  <p>{{coordinateNum}}</p>
  <p v-if="nomeLuogo">Place Name: {{nomeLuogo}}</p>
</div>

</template>

<script>


export default {
  name: 'App',
  data(){
    return{

    api: "pk.eyJ1IjoidHJ5dml1bSIsImEiOiJjbDRmbzcwZWEwNTlrM2RxcXJ2MHQ4NW52In0.kgSuAyMkwRRLPGOvk_ppWg",
    place:{},
    text:"",
    url_base:"",
    coordinateNum:"",
    nomeLuogo:"",
    }
  },
  methods: {
    fetchPlace(){
      this.url_base=`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.text}.json?access_token=${this.api}`;
      fetch(this.url_base).then(
        res=>{return res.json();
      }).then(this.setResults)
    },
    setResults(result){
      this.place=result;
      this.coordinateNum=this.place.features[0].geometry.coordinates;
      this.nomeLuogo=this.place.features[0].place_name;
      
    },
    submit(){
      this.fetchPlace();
    }
  },
}
</script>

<style>

</style>
