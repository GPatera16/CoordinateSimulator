<template>
<div class="bg-blue-700 border-b-black border-2 flex flex-row items-center justify-center ">
  <div class="items-left">
    <img src="./assets/tryviumSpin.png" alt="">
    
  </div>
  <div class="ml-auto mr-[100px]">
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="text-white text-[24px]">HOME</a>
  </div>
</div>
<div class="flex flex-col items-center bg-[#004242] grow h-[1000px]">
  <p class="text-center text-white ml-5 mr-5 mb-10 mt-10 lg:text-[50px] md:text-[40px] text-[20px]">TryiviumSpin</p>
  <div class="flex flex-col lg:flex-row items-center text-center mt-10">
  <div class="inline-block text-left items-center relative">
    <div class="flex flex-col text-left items-center">
      <li class=" flex flex-col border-2 rounded-md mr-10 ml-10 bg-white static">
      <input @focus="focus=true, border-none" @blur="focus=false, suggestions=[]" v-model="text" @click="submit" @keyup="submit" class="outline-0  ml-10 mr-10 lg:text-[15px] text-[10px]  lg:px-10 lg:py-5 md:px-8 md:py-5 w-[250px] md:w-[350px] lg:w-[500px] py-2 px-1 static">
      <div class="flex flex-col absolute mt-[60px] bg-white">
      <p v-if="(suggestions[0]==undefined&&suggestions[1]==undefined&&suggestions[3]==undefined&&focus==true)||(focus==true&&text=='')" class="rounded-md ml-10 mr-10  lg:px-10 lg:py-5 md:px-8 md:py-5 w-[250px] md:w-[350px] lg:w-[500px] py-2 px-1 static">List is empty.</p>
      <button  v-on:mousedown="altSubmit(0)" v-if="suggestions[0]&&focus==true&&text!==''" class="rounded-md ml-10 mr-10  border-solid border-black hover:bg-gray-300 lg:px-10 lg:py-5 md:px-8 md:py-5 w-[250px] md:w-[350px] lg:w-[500px] py-2 px-1 static">{{suggestions[0]}}</button>
      <button  v-on:mousedown="altSubmit(1)" v-if="suggestions[1]&&focus==true&&text!==''" class="rounded-md ml-10 mr-10  border-solid border-black hover:bg-gray-300 lg:px-10 lg:py-5 md:px-8 md:py-5 w-[250px] md:w-[350px] lg:w-[500px] py-2 px-1 static">{{suggestions[1]}}</button>
      <button  v-on:mousedown="altSubmit(2)" v-if="suggestions[2]&&focus==true&&text!==''" class="rounded-md ml-10 mr-10  border-solid border-black hover:bg-gray-300 lg:px-10 lg:py-5 md:px-8 md:py-5 w-[250px] md:w-[350px] lg:w-[500px] py-2 px-1 static">{{suggestions[2]}}</button>
      </div>
      </li>
    </div>
  </div>
  <selectDate class="m-10"/>
  <div class="inline-block text-left relative m-10">
      <button @click="setarrow,selectedGuest(guests)" v-on:click="guestmenu=(guestmenu ? guestmenu=false : guestmenu=true)" class="border-2 border-gray-100 bg-white static px-6 py-4 w-[250px]  lg:text-[20px] text-[15px]">guests {{guests}} {{arrow}}</button>
      <div class="flex flex-col absolute">
        <button  @click="guests=2,selectedGuest(lastbtn),selectedGuest(2)" :class="gbg[2]" v-if="guestmenu==true" class="px-6 py-4 w-[250px]  lg:text-[20px] text-[15px]">2 guests</button>
        <button  @click="guests=1,selectedGuest(lastbtn),selectedGuest(1)" :class="gbg[1]" v-if="guestmenu==true" class="px-6 py-4 w-[250px]  lg:text-[20px] text-[15px]">1 guests</button>
        <button  @click="guests=3,selectedGuest(lastbtn),selectedGuest(3)" :class="gbg[3]" v-if="guestmenu==true" class="px-6 py-4 w-[250px]  lg:text-[20px] text-[15px]">3 guests</button>
        <button  @click="guests=4,selectedGuest(lastbtn),selectedGuest(4)" :class="gbg[4]" v-if="guestmenu==true" class="px-6 py-4 w-[250px]  lg:text-[20px] text-[15px]">4 guests</button>
        <button  @click="guests=5,selectedGuest(lastbtn),selectedGuest(5)" :class="gbg[5]" v-if="guestmenu==true" class="px-6 py-4 w-[250px]  lg:text-[20px] text-[15px]">5 guests</button>
      </div>
  </div>
  <div>
    <button class="border-2 bg-yellow-500 m-10 border-orange-400 bg-yellow static px-6 py-4 uppercase w-[250px]  lg:text-[20px] text-[15px]">search</button>

  </div>
  </div>

</div>
<div class="flex flex-col justify-center items-center grow py-200 h-[300px] bg-white">
  <h1>tryvium chan</h1>
</div>


</template>

<script>
import './main.js'
import selectDate from './components/AmongUs.vue'

export default {
  name: 'app',
  data(){
    return{

    guests:2,
    focus:false,
    guestmenu:false,
    api: "pk.eyJ1IjoidHJ5dml1bSIsImEiOiJjbDRmbzcwZWEwNTlrM2RxcXJ2MHQ4NW52In0.kgSuAyMkwRRLPGOvk_ppWg",
    place:{},
    text:"",
    url_base:"",
    coordinateNum:"",
    nomeLuogo:"",
    placeNum:0,
    suggestions:[],
    gbg:["bg-white","bg-white","bg-white","bg-white","bg-white","bg-white"],
    lastbtn:"",
    arrow:"▲",
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
      this.suggestions[0]=this.place.features[0].place_name;
      this.suggestions[1]=this.place.features[1].place_name;
      this.suggestions[2]=this.place.features[2].place_name;
    },
    submit(){
      this.fetchPlace();
    },
    altSubmit(x){
      this.text=this.suggestions[x];
      this.fetchPlace();
    },
    selectedGuest(btn){
      this.lastbtn=btn;
      if(parseInt(btn)==this.guests){
          this.gbg[btn]="bg-gray-300";
      }else this.gbg[btn]="bg-white";
      this.setarrow();
      this.guestmenu=false;
    },setarrow(){
      if (this.guestmenu==true){
        this.arrow='▲';
      }else this.arrow='▼';
    }

  },   
   components: {
     selectDate
   },

}
</script>

<style>

</style>
