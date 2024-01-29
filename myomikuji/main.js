'use strict';

{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');

  btn.addEventListener('click', () => {
    const results = ['大たぬきち','中たぬきち','たぬ','小たぬきち','ピクミョン'];
    const n = Math.floor(Math.random() * results.length);

    result.textContent = results[n];

   
  })
}