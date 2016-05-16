/**
 *   @author Joe Barbercheck [ hbates@northmen.org ]
 *   @version 0.0.1
 *   @summary http server: Work order app || Created: 05.11.2016
 *   @todo
 */

"use strict";

const FADE = require('./FadeStuff');

class main {
     constructor() {
          main.handleForm();
     }

     static handleForm() {
          document.getElementById('submit').addEventListener('click', function(event) {
               let data = new FormData(document.querySelector('form')); // https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects
               let bustCache = '?' + new Date().getTime();
               const XHR = new XMLHttpRequest();
               XHR.onload = function() {
                    if (XHR.readyState == 4 && XHR.status == 200) {
                         document.getElementById('result').style.display= 'none';
                         document.getElementById('result').innerHTML = XHR.responseText;
                         main.fade('in', 'result');
                         main.fade('out', 'result');
                    }
               };
               XHR.open('POST', event.target.dataset.url + bustCache, true);
               XHR.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
               XHR.send(data);
               document.getElementById('theForm').reset();
          });
     }

     static fade(direction, fadeWhat) {
          new FADE(direction, fadeWhat).doFade();
     }
}

window.addEventListener("load", function() {
     new main();
});