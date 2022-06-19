<template>
    <div class="overflow-hidden mt-[20px] w-[500px] h-[200px] md:w-[799px] md:h-[400px] lg:w-[1200px] lg:h-[400px] flex flex-row flex-initial bg-white shadow-xl border-solid border-white">
        <div>
            <img v-bind:src="img" alt="hotel image error" class="self-center h-[400px] w-[700px] overflow-hidden ml-auto">
        </div>
        <div class="flex flex-col m-[20px]">
            <div class="mr-auto mb-auto">
                <h1 class="text-[20px]">{{title}}</h1>
                <p class="mt-[10px]">{{address}}</p>
                <p class="mt-[10px]">{{description}}</p>
            </div>
            <p>{{price}}</p>
        </div>
    </div>
</template>

<script>
export default {
  props:['title','img','address','description','price'],
  data() {
    return {

    }
  }
}
</script>