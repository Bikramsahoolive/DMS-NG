import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule, NgForm  } from '@angular/forms';
import { RouterLink } from '@angular/router';

import {
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective
} from '@coreui/angular';
@Component({
  selector: 'app-login',
  imports: [FormsModule ,ThemeDirective, CarouselComponent, CarouselIndicatorsComponent, CarouselInnerComponent, NgFor, CarouselItemComponent, CarouselControlComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor() {}


  //form control
  onSubmit(formData:NgForm){
    console.log(formData);
  }


  //carousel
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      src: 'https://img.freepik.com/free-photo/still-life-documents-stack_23-2151088805.jpg'
    };
    this.slides[1] = {
      src: 'https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg?auto=compress&cs=tinysrgb&w=600'
    };
    this.slides[2] = {
      src: 'https://cdn.prod.website-files.com/62045da4270c887c4de9c45f/6206f72af2bab0767eeb1690_digitaldocument.jpeg'
    };
  }

  //show & hide password
  showPassword(passwordInput: HTMLInputElement ,icon:any){
     passwordInput.type=="password" ? passwordInput.type="text" : passwordInput.type="password";
     "fa-solid fa-eye-slash";

     icon.classList.toggle("fa-eye-slash");
     icon.classList.toggle("fa-eye");
  }
}
