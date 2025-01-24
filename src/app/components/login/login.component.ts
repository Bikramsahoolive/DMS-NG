import { Component,ViewChild  } from '@angular/core';
import { FormsModule, NgForm  } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-login',
  imports: [FormsModule,NgbCarouselModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [],
})
export class LoginComponent {

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

  constructor(private router: Router) { }

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
  onSubmit(formData:NgForm){
    console.log(formData);
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
