import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const slideValue = document.querySelector('span');
    const inputSlider = document.querySelector('input');
    inputSlider.oninput = () => {
      let value = inputSlider.value;
      slideValue.textContent = value;
      slideValue.style.left = parseInt(value) / 2 + '%';
      slideValue.classList.add('show');
    };
    inputSlider.onblur = () => {
      slideValue.classList.remove('show');
    };
  }
}
