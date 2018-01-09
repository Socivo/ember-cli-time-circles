import Ember from 'ember';
import layout from '../templates/components/time-circle';


export default Ember.Component.extend({

  start: false,
  animation: "ticks",
  count_past_zero: false,
  circle_bg_color: "#60686F",
  use_background: false,
  fg_width: 0.1,
  bg_width: 1.2,
  total_duration: "Auto",
  direction: "Clockwise",
  start_angle: 0,
  time: {},
  attributeBindings: ['data-timer'],
  restartTimer: false,
  restartTimerObserver: Ember.observer('restartTimer', function(){
    this.restart()
  }),
  stopTimerObserver: Ember.observer('stopTimer', function(){
    this.stop()
  }),


  didInsertElement() {
    this.$().TimeCircles({
      "start": this.get('start'),
      "animation": this.get('animation'),
      "count_past_zero": this.get('count_past_zero'),
      "circle_bg_color": this.get('circle_bg_color'),
      "use_background": this.get('use_background'),
      "fg_width": this.get('fg_width'),
      "bg_width": this.get('bg_width'),
      "total_duration": this.get('total_duration'),
      "direction": this.get('direction'),
      "start_angle": this.get('start_angle'),
      "time": this.get('time'),
    }).addListener(this.listenForEvents.bind(this), "visible")

  },

  start() {
    this.$().TimeCircles().start();

  },
  stop() {
    this.$().TimeCircles().stop();
  },
  restart() {
    this.$().TimeCircles().restart();
  },
  listenForEvents(unit, value, total) {
    if (total <= 0) {
      this.sendAction('onTimeout', unit, value, total);
    }

  }



});
