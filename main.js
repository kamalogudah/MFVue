
new Vue({
  el: '#app',
  data: {
    counter: 0,
    x: 0,
    y: 0,
    result: ''
  },
  methods: {
    increase: function(step) {
      this.counter += step;
      this.result = this.counter > 5 ? 'Greater than 5' : 'Smaller than 5'
    },
    updateCoordinates (event) {
      this.x = event.clientX
      this.y = event.clientY

    },
    alertMe() {
      alert('Alert!'); 
    }
  },
  watch: {
    counter: function(value) {
      var vm = this;
      setTimeout(function(){
        vm.counter = 0;
      }, 2000);
    }
  }
})

new Vue({
  el: '#app2',
  data: {
    attachedRed: false,
    color: 'green',
    width: 100
  },
  computed: {
    divClasses: function() {
      return {
        red: this.attachedRed,
        blue: !this.attachedRed
      }
    },
    myStyle: function () {
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      }
    }
  }
})

new Vue({
  el: '#app3',
  data: {
    show: true,
    ingredients: ['meat', 'fruit', 'cookies', 'milk'],
    persons: [
      {name: 'Paul', age: 29, color: 'green' },
      {name: 'Joesphine', age: 59, color: 'blue'}
    ]
  }
})