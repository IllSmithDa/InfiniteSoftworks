import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Checks if a element is in the view port. Returns true element is in viewport
    let isInViewport = (elem) => {
      let bounding = elem.getBoundingClientRect();
      if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        return true;
      } else {
        return false;
      }
    }
    let header = document.getElementById("appTitle");
    let secondHeader = document.getElementById("secondTitle");

    // Event listener which will check if view port is in
    window.addEventListener('scroll', function (event) {
      if (isInViewport(secondHeader)) {
        secondHeader.style.animationPlayState = "running";
      }
    }, false);

    // Event listener which will check if view port is in
    window.addEventListener('scroll', function (event) {
      if (isInViewport(header)) {
        header.style.animationPlayState = "runnung";
      }
    }, false);
  }

}
