<template>
<div class="flex flex-col items-center text-center mt-10">
  <p class="ml-5 mr-5 mb-10 lg:text-[50px] md:text-[40px] text-[20px]">Coordinate simulator 2022</p>
  <input v-model="text" @keyup.enter="submit" class="ml-10 mr-10 lg:text-[25px] text-[20px] mb-10 border-2 border-black lg:px-10 lg:py-5 md:px-8 md:py-5 w-[250px] md:w-[350px] lg:w-[500px] py-2 px-1">
  <p v-if="place" v-bind="place.country"></p>
  <p class="normalText">{{coordinateNum}}</p>
  <p v-if="nomeLuogo" class="normalText text-center ml-5 mr-5">Place Name: {{nomeLuogo}}</p>
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
