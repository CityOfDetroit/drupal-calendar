'use strict';
import { Calendar } from '@fullcalendar/core';
import '@fullcalendar/core/main.css';
import Controller from './controller.class';

const drupalSettings = {
    intranet : {
        intranetJs : {
            eventItems: {
                "51": {
                    id: '51',
                    name: 'Web Team Meeting',
                    start: '2019-08-13',
                    departmentID: '6',
                    departmentName: 'Web Team',
                    type: 'Meeting'
                },
                "52": {
                  id: '52',
                  name: 'City Council Session',
                  start: '2019-08-12',
                  departmentID: '3',
                  departmentName: 'City Council',
                  type: 'Event'
              }
            }
        }
    }
}
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