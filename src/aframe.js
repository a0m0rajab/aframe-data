import "aframe";
let AFRAME = require("aframe");

AFRAME.registerComponent('rotate', {

  schema:
  {
    test: {type: 'number', default: 1},
  },
  init: function () {
      console.log(this.data,"Data")
      window.thisAframe = this;
  }
});

export default AFRAME;