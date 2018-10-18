// HTML

<script src="https://npmcdn.com/vue/dist/vue.js"></script>

<div id="exercise">
  <!-- 1) Start the Effect with the Button. The Effect should alternate the "highlight" or "shrink" class on each new setInterval tick (attach respective class to the div with id "effect" below) -->
  <div>
    <button @click="startEffect">Start Effect</button>
    <div id="effect" v-bind:class="effectClasses"></div>
  </div>
  <!-- 2) Create a couple of CSS classes and attach them via the array syntax -->
  <div v-bind:class= "[yellowText, small, blue, float]" >I got no class :(</div>
  <!-- 3) Let the user enter a class (create some example classes) and attach it -->
  <div>
    <input type="text" v-model='entrada'>
    <div v-bind:class="[{visible: true}, entrada]"></div>
  </div>
  <!-- 4) Let the user enter a class and enter true/ false for another class (create some example classes) and attach the classes -->
  <div>
    <input type="text" v-model='isVisible'>
    <input type="text" v-model= 'entrada'>
    <div v-bind:class = "[{visible:isVisible}, entrada]"></div>
  </div>
  <!-- 5) Repeat 3) but now with values for styles (instead of class names). Attach the respective styles.  -->
  <div>
    <input type="text" v-model='myStyle.backgroundColor'>
    <div v-bind:style="myStyle"></div>
  </div>
  <!-- 6) Create a simple progress bar with setInterval and style bindings. Start it by hitting the below button. -->
  <div>
    <button v-on:click="startProgress">Start Progress</button>
    <div v-bind:class="['progress-bar', maxWidth]" v-bind:style="progressBar"></div>
  </div>
  
</div>


//JS

new Vue({
  el: '#exercise',
  data: {
		effectClasses: {
    highlight: false,
      shrink: true
    },
    blue:'blue',
    yellowText:'yellowText',
    small: 'small',
    float:'float',
    isVisible :true,
    entrada:'',
    maxWidth:'maxWidth',
    myStyle: {
    width: '150px',
      height: '250px',
      backgroundColor: 'gray'
    },
    progressBar: {
    width: '0px',
      backgroundColor: 'red'
    }
  },
  methods: {
    startEffect: function() {
     var vm = this;
      setInterval(function() {
      vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 1000);
    },
    startProgress: function() {
    var vm = this;
      var width = 0;
     
      setInterval(function() {
      width = width + 10;
      vm.progressBar.width = width + 'px';
      }, 500);
    }
  }
});


// CSS

#effect {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

.highlight {
  background-color: red;
  width: 200px !important;
}

.shrink {
  background-color: gray;
  width: 50px !important;
}
.blue{
  background-color: blue;
}
.yellowText {color: yellow}
.small{
  width:40px;
}
.float{
  float:right;
}
.visible{
  width:100px;
  height:50px;
}
.progress-bar {
  width: 200px;
  height: 20px;
  border: 1px solid green;
}
.maxWidth{
  max-width:200px;
}