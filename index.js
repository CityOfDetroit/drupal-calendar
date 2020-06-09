'use strict';
import { Calendar } from '@fullcalendar/core';
import '@fullcalendar/core/main.css';
import Controller from './controller.class';
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

document.getElementById('calendar-filters').addEventListener('submit', (ev)=>{
  controller.submit(ev);
});

document.getElementById('calendar-filters').addEventListener('reset', (ev)=>{
  controller.reset(ev);
})