'use strict';
// import Controller from './controller.class';
import Controller from './dei.controller';
import './sass/styles.scss';
let data;
try {
    data = drupalSettings.intranet.intranetJs.eventItems
} catch (error) {
    data = null;
}
const controller = new Controller('calendar', data);

document.addEventListener('DOMContentLoaded', function() {
  controller.init();
});

document.querySelectorAll('.dei-filters').forEach(filter => {
  filter.addEventListener('click', (ev) => {
    controller.submit(ev);
  })
});

document.getElementById('calendar-filters').addEventListener('submit', (ev)=>{
  controller.submit(ev);
});

document.getElementById('calendar-filters').addEventListener('reset', (ev)=>{
  controller.reset(ev);
})