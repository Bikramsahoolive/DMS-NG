import { Component,ViewChild  } from '@angular/core';
import {CommonModule} from '@angular/common'
import { ReactiveFormsModule,FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { LoginOutline,UserOutline,LockOutline  } from '@ant-design/icons-angular/icons';
@Component({
  selector: 'app-login',
  imports: [NgbCarouselModule,ReactiveFormsModule,CommonModule,NzIconModule, NzInputModule, NzToolTipModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [],
})
export class LoginComponent {
 

   loginForm = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(3)]),
    password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(16)]),
    captcha: new FormControl('',[Validators.required]),
  });



  // images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [
    'https://img.freepik.com/free-photo/still-life-documents-stack_23-2151088805.jpg',
    'https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://cdn.prod.website-files.com/62045da4270c887c4de9c45f/6206f72af2bab0767eeb1690_digitaldocument.jpeg'
  ]

  paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = false;

  constructor(private router: Router,private iconService: NzIconService) {
    this.iconService.addIcon(LoginOutline,UserOutline,LockOutline);
   }

	@ViewChild('carousel', { static: true }) carousel!: NgbCarousel;


  //carousel

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}


  //form control
  onSubmit(){
    console.log(this.loginForm.value);
    this.goto('dashboard')
 
  }

  //show & hide password
  showPassword(passwordInput: HTMLInputElement ,icon:any){
     passwordInput.type=="password" ? passwordInput.type="text" : passwordInput.type="password";
     "fa-solid fa-eye-slash";

     icon.classList.toggle("fa-eye-slash");
     icon.classList.toggle("fa-eye");
  }

  goto(url:string){
    this.router.navigate([url]);
  }
}
