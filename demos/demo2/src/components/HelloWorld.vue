<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h2>
      <a href="" target="_blank">
        Vue-Round-Slider [v{{version}}]
      </a>
    </h2>

    <div class="box">
      <round-slider
        @click="pInput"
        v-model="sliderValue"
      >
      </round-slider>
    </div>

    <h3>Text Element</h3>
    <div>{{sliderValue}}</div>

    <h3>Input Element</h3>
    <input @click="pInput" v-model="sliderValue" />
  </div>
</template>

<script>
import RoundSlider from '../../../../src/round-slider.vue';

export default {
  name: 'HelloWorld',
  components: {
    RoundSlider,
  },
  computed: {
    version() {
      return RoundSlider.version;
    }
  },
  methods: {
    pInput(value){
      console.log("value>>>",value)
    }
  },
  props: {
    msg: String
  },
  data() {
    return {
      sliderValue: 60
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.box {
  padding: 10px;
  display: inline-block;
}
</style>
