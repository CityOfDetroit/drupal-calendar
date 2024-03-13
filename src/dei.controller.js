'use strict';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

export default class Controller {
  constructor(container, data) {
    this.container = document.getElementById(container),
    this.data = data,
    this.calendar = null,
    this.calendarObj = {
      plugins: [ dayGridPlugin, listPlugin, timeGridPlugin ],
      defaultView: 'dayGridMonth',
      events: [],
      header: {
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth timeGridWeek list'
      },
      views: {
          weekGrid:{
              type: 'timeGridWeek',
              duration: {days:7},
              buttonText: 'Week'
          }
      }
    }
  }

  init(){
    this.calendar = new Calendar(this.container, this.calendarObj);
    if(this.data){
        this.buildFilters();
        this.buildEvents();
    }else{
        this.calendar.render();
    }
  }

  buildFilters(){
    console.log('building filters');
    let tempDepartments = [];
    let tempNames = [];
    let tempTypes = [];
    let nameOptions = '';
    let departmentOptions = '';
    let typeOptions = '';
    for (const event in this.data) {
      tempNames.push(this.data[event].name);
      (tempDepartments.includes(this.data[event].departmentName)) ? 0: tempDepartments.push(this.data[event].departmentName);
      (tempTypes.includes(this.data[event].type)) ? 0: tempTypes.push(this.data[event].type);
    }
    tempDepartments.map(department => {
      departmentOptions += `<option value="${department}"></option>`;
    });
    tempNames.map(name => {
      nameOptions += `<option value="${name}"></option>`;
    });
    tempTypes.map(type => {
      typeOptions += `<option value="${type}"></option>`;
    });
    document.getElementById('name-list').innerHTML = nameOptions;
    document.getElementById('department-list').innerHTML = departmentOptions;
    document.getElementById('type-list').innerHTML = typeOptions;
  }

  buildSingeEvent(data){
    let tempArray = [];
    for (const event in data) {
      let tempEvent = {
          id: data[event].id,
          title: data[event].name,
          start: data[event].start,
          url: `node/${data[event].id}` ,
          className: data[event].type
      }
      tempArray.push(tempEvent);
    }
    return tempArray;
  }

  buildEvents(data = null){
      console.log(this);
      if(data){
        this.calendarObj.events = this.buildSingeEvent(data);
        
      }else{
        this.calendarObj.events = this.buildSingeEvent(this.data);
      }
      this.calendar.destroy();
      this.calendar = new Calendar(this.container, this.calendarObj);
      this.calendar.render();
      
  }

  reset(ev){
    setTimeout(() => {
      this.filterCalendar();
    }, 100);
  }

  submit(ev){
    ev.preventDefault();
    this.filterCalendar(ev);
  }

  filterCalendar(ev){
    console.log(ev.target.value);
    let filterEvents;
    switch (ev.target.getAttribute('data-mode')) {
      case 'dei':
        this.buildDEI(ev);
        break;
    
      default:
        filterEvents = this.buildIntranet();
        break;
    }
    this.buildEvents(filterEvents);
  }

  buildDEI(ev){
    let filterEvents = {};
    for (const event in this.data) {
      if(this.data[event].eventFilter == ev.target.innerText){
        filterEvents[this.data[event].id] = this.data[event];
      } 
    }
    return filterEvents;
  }

  buildIntranet(){
    let filterEvents = {};
    let name = document.getElementById('name').value;
    let date = document.getElementById('start').value;
    let department = document.getElementById('department').value;
    let type = document.getElementById('type').value;
    for (const event in this.data) {
      if(name != ''){
        if(date != ''){
          if(department != ''){
            if(type != ''){
              (this.data[event].name == name && this.data[event].start == date && this.data[event].departmentName == department && this.data[event].type == type) ? filterEvents[this.data[event].id] = this.data[event] : 0; 
            }else{
              (this.data[event].name == name && this.data[event].start == date && this.data[event].departmentName == department) ? filterEvents[this.data[event].id] = this.data[event] : 0;  
            }
          }else{
            if(type != ''){
              (this.data[event].name == name && this.data[event].start == date && this.data[event].type == type) ? filterEvents[this.data[event].id] = this.data[event] : 0; 
            }else{
              (this.data[event].name == name && this.data[event].start == date) ? filterEvents[this.data[event].id] = this.data[event] : 0;  
            }
          }
        }else{
          if(department != ''){
            if(type != ''){
              (this.data[event].name == name && this.data[event].departmentName == department && this.data[event].type == type) ? filterEvents[this.data[event].id] = this.data[event] : 0; 
            }else{
              (this.data[event].name == name && this.data[event].departmentName == department) ? filterEvents[this.data[event].id] = this.data[event] : 0;  
            }
          }else{
            if(type != ''){
              (this.data[event].name == name && this.data[event].type == type) ? filterEvents[this.data[event].id] = this.data[event] : 0; 
            }else{
              (this.data[event].name == name) ? filterEvents[this.data[event].id] = this.data[event] : 0;  
            }
          }
        }
      }else{
        if(date != ''){
          if(department != ''){
            if(type != ''){
              (this.data[event].start == date && this.data[event].departmentName == department && this.data[event].type == type) ? filterEvents[this.data[event].id] = this.data[event] : 0; 
            }else{
              (this.data[event].start == date && this.data[event].departmentName == department) ? filterEvents[this.data[event].id] = this.data[event] : 0;  
            }
          }else{
            if(type != ''){
              (this.data[event].start == date && this.data[event].type == type) ? filterEvents[this.data[event].id] = this.data[event] : 0; 
            }else{
              (this.data[event].start == date) ? filterEvents[this.data[event].id] = this.data[event] : 0;  
            }
          }
        }else{
          if(department != ''){
            if(type != ''){
              (this.data[event].departmentName == department && this.data[event].type == type) ? filterEvents[this.data[event].id] = this.data[event] : 0; 
            }else{
              (this.data[event].departmentName == department) ? filterEvents[this.data[event].id] = this.data[event] : 0;  
            }
          }else{
            if(type != ''){
              (this.data[event].type == type) ? filterEvents[this.data[event].id] = this.data[event] : 0; 
            }else{
              filterEvents = this.data; 
            }
          }
        }
      }
    }
    return filterEvents;
  }
}