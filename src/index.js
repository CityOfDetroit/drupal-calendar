"use strict";

import Controller from "./controller.class";

import "./sass/styles.scss";

let data;

try {
  data = drupalSettings.detroitmi.dei.eventItems;

  // data = drupalSettings.intranet.intranetJs.eventItems;
} catch (error) {
  data = null;
}

const controller = new Controller('calendar', data, 'dei');

// const controller = new Controller("calendar", data, "intranet");

document.addEventListener("DOMContentLoaded", function () {
  controller.init();
});

document.querySelectorAll(".dei-filters").forEach((filter) => {
  filter.addEventListener("click", (ev) => {
    controller.submit(ev);
  });
});

document.getElementById("calendar-filters").addEventListener("submit", (ev) => {
  controller.submit(ev);
});

document.getElementById("calendar-filters").addEventListener("reset", (ev) => {
  controller.reset(ev);
});
