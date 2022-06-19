<template>
<div class="bg-blue-700 border-b-black border-2 flex flex-row items-center justify-center ">
  <div class="items-left">
    <img src="./assets/tryviumSpin.png" alt="" class="h-[100px] w-[100px] md:h-[200px] md:w-[200px]">
    
  </div>
  <div class="ml-auto mr-[100px]">
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="text-white text-[24px]">HOME</a>
  </div>
</div>
<div class="flex flex-col items-center bg-[#004242] grow h-[800px]">
  <p class="text-center text-white ml-5 mr-5 mb-10 mt-10 lg:text-[50px] md:text-[40px] text-[20px]">TryiviumSpin</p>
  <div class="flex flex-col lg:flex-row items-center text-center mt-10">
  <div class="inline-block text-left items-center relative mb-[10px]">
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
  <div v-if="focus==true" class="h-[400px] md:h-[0px]">

  </div>



<!-- V-CALENDAR DATE PICKER-->
<div class="mt-[10px] text-[10px] lg:text-[20px]">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8" @submit.prevent>
    <div class="mb-4">
      <DatePicker
        v-model="range"
        mode="date"
        :masks="masks"
        is-range
        :min-date='new Date()'
        
      >
        <template v-slot="{ inputValue, inputEvents, isDragging }">
          <div class="flex flex-col sm:flex-row justify-start items-center lg:text-[15px]">
            <div class="relative flex-grow">
              <svg
                class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              <input
                class="flex-grow pl-8 pr-2 py-1 bg-gray-100 border rounded w-full"
                :class="isDragging ? 'text-gray-600' : 'text-gray-900'"
                :value="inputValue.start"
                v-on="inputEvents.start"
                placeholder="Check-in"
              />
            </div>
            <span class="flex-shrink-0 m-2">
              <svg
                class="w-4 h-4 stroke-current text-gray-600"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            <div class="relative flex-grow">
              <svg
                class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              <input
                class="flex-grow pl-8 pr-2 py-1 bg-gray-100 border rounded w-full"
                :class="isDragging ? 'text-gray-600' : 'text-gray-900'"
                :value="inputValue.end"
                v-on="inputEvents.end"
                placeholder="Check-out"

              />
            </div>
          </div>
        </template>
      </DatePicker>
    </div>
  </form>
</div>
<!-- END DATE PICKER -->



  <div class="inline-block text-left relative m-10">
      <button @click="setarrow(),selectedGuest(guests)" v-on:click="guestmenu=(guestmenu ? guestmenu=false : guestmenu=true),setarrow()" class="border-2 border-gray-100 bg-white static px-6 py-4 w-[250px]  lg:text-[20px] text-[15px]">guests {{guests}} {{arrow}}</button>
      <div class="flex flex-col absolute">
        <button  @click="guests=2,selectedGuest(lastbtn),selectedGuest(2)" :class="gbg[2]" v-if="guestmenu==true" class="px-6 py-4 w-[250px]  lg:text-[20px] text-[15px]">2 guests</button>
        <button  @click="guests=1,selectedGuest(lastbtn),selectedGuest(1)" :class="gbg[1]" v-if="guestmenu==true" class="px-6 py-4 w-[250px]  lg:text-[20px] text-[15px]">1 guests</button>
        <button  @click="guests=3,selectedGuest(lastbtn),selectedGuest(3)" :class="gbg[3]" v-if="guestmenu==true" class="px-6 py-4 w-[250px]  lg:text-[20px] text-[15px]">3 guests</button>
        <button  @click="guests=4,selectedGuest(lastbtn),selectedGuest(4)" :class="gbg[4]" v-if="guestmenu==true" class="px-6 py-4 w-[250px]  lg:text-[20px] text-[15px]">4 guests</button>
        <button  @click="guests=5,selectedGuest(lastbtn),selectedGuest(5)" :class="gbg[5]" v-if="guestmenu==true" class="px-6 py-4 w-[250px]  lg:text-[20px] text-[15px]">5 guests</button>
      </div>
  </div>
  <div>
    <button @click="searchHotel" class="border-2 bg-yellow-500 m-10 border-orange-400 bg-yellow static px-6 py-4 uppercase w-[250px]  lg:text-[20px] text-[15px]">search</button>

  </div>

  </div>


</div>
  <div id="hotels" class="flex flex-col m-10 items-center">
    <h4 v-if="nothingFound">Nothing to see here yet..</h4>
    <ul v-for="(result) in hotelRes.results" :key="result.id">
      <hotel-page :title="result.name" :img="result.thumbnail" :description="result.description.slice(0,200)+'...'" :price="result.rates_from.currency+' '+(result.rates_from.amount.toString()).slice(0,((result.rates_from.amount.toString()).length-2))+','+result.rates_from.amount.toString().slice(((result.rates_from.amount.toString()).length)-2)"> </hotel-page>
    </ul>
  </div>
<div class="flex flex-col justify-center items-center grow py-200 h-[300px] bg-white">
  <h1>© 2022 tryvium chan</h1>
</div>
</template>

<script>
import './main.js'
import hotelPage from './components/HotelPage.vue'


export default {
  name: 'app',
  data(){
    return{

      range: {
        start: "checkin",
        end: "checkout",
      },
      masks: {
        input: 'YYYY-MM-DD',
      },

    tryviumurl:"",
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
    arrow:"▼",
    search:"",
    data:"",
    payloadObj:"",
    lat:undefined,
    lon:undefined,
    country:"",
    searchKey:"",
    test:{},
    hotelRes:{},
    nothingFound:undefined,
    }
  },
  methods: {
    fetchPlace(){
      this.url_base=`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.text}.json?access_token=${this.api}`;
      fetch(this.url_base).then(
        res=>{return res.json();
      }).then(this.setResults)
    },
    fetchCountry(){
      let url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.lon},${this.lat}.json?access_token=${this.api}`
      fetch(url).then(
        res=>{return res.json();
        }).then(this.setCountry).then(this.fetchHotel)
    },
    setCountry(result){
      this.country=result.features[5].properties.short_code;
    },
    fetchHotel(){
       this.request= {
        "center": {
          "lat":this.lat,
          "lon": this.lon
        },
        "check_in": this.range.start.toISOString().split("T")[0],
        "check_out": this.range.end.toISOString().split("T")[0],
        "country": this.country,
        "guests": this.guests,
        "max_price": 20000,
        "meal": "BREAKFAST",        
        "min_price": 0,
        "sort": "PRICE_ASC"
      };      
      this.tryviumurl=`https://api-platform-v3-dev.tryvium.io/search`;
      fetch(this.tryviumurl , 
      {
        method: 'POST',
        headers:{
          'Accept-Language':"en",
          'Content-Type':'application/json'
        },
        body: JSON.stringify(this.request),
      }).then(
        res=>{return res.json();
      }).then(this.setKey).then(this.hotelInfoGet);
    },
    searchHotel(){
      this.fetchCountry()
    },
    setResults(result){
      this.place=result;
      this.coordinateNum=this.place.features[0].geometry.coordinates;
      this.nomeLuogo=this.place.features[0].place_name;
      this.lon=this.place.features[0].center[0];
      this.lat=this.place.features[0].center[1];
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
      this.guestmenu=false;
      this.setarrow();
    },setarrow(){
      if (this.guestmenu==true){
        this.arrow='▲';
      }else this.arrow='▼';
    }, setKey(result){
      this.searchKey=result.search_key;
    },
    hotelInfoGet(){
   
      let searchurl=`https://api-platform-v3-dev.tryvium.io/search/${this.searchKey}`;
      fetch(searchurl , 
      {
        method: 'GET',
        headers:{
          'page':"1",
          'size':"200",
          'Accept-Language':"en",
          'Content-Type':'application/json'
        },

      }).then(
        res=>{return res.json();
      }).then(this.searchHotels);
    },
    searchHotels(result){
      this.hotelRes=result;
      this.test=result.results.length;
      if(result!=""){
        this.nothingFound=false;
      }else this.nothingFound=true;
  
    }

  },   
   components: {
     hotelPage
   },

}
</script>

<style>

</style>
