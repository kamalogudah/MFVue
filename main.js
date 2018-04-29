
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
