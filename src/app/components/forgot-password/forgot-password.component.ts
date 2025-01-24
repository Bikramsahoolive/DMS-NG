import { Component,ViewChild,ElementRef,ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import{FormsModule,NgForm} from '@angular/forms'
import{Router} from '@angular/router'
@Component({
  selector: 'app-forgot-password',
  imports: [FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  constructor(private router:Router){}
  @ViewChild('forgotpassform') forgotpassform!:ElementRef;
  @ViewChild('verifypassform') verifypassform!:ElementRef;

  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef<HTMLInputElement>>;

  ngAfterViewInit(): void {
    this.otpInputs.forEach((input, index) => {
      const el = input.nativeElement;

      // Input event to limit the input to one character
      el.addEventListener('input', (e: any) => {
        if (e.target.value.length > 1) {
          e.target.value = e.target.value.slice(0, 1);
        }
        if (e.target.value.length === 1) {
          if (index < this.otpInputs.length - 1) {
            this.otpInputs.toArray()[index + 1].nativeElement.focus();
          }
        }
      });

      // Keydown event to handle Backspace and 'e' key
      el.addEventListener('keydown', (e: any) => {
        if (e.key === 'Backspace' && !e.target.value) {
          if (index > 0) {
            this.otpInputs.toArray()[index - 1].nativeElement.focus();
          }
        }
        if (e.key === 'e') {
          e.preventDefault();
        }
      });
    });
  }

  closeForgotpass(){
    this.router.navigate(['']);
  }

  verifyUser(formData:any){

    console.log(formData);
    
    
    if(formData.username){
      this.forgotpassform.nativeElement.classList.add('form-hide');
      this.verifypassform.nativeElement.style.display="block";
      setTimeout(()=>{
      this.verifypassform.nativeElement.classList.remove('vform-hide');
      this.forgotpassform.nativeElement.style.display="none";
      },500)
      
    }
  }
  goBack(){
    this.forgotpassform.nativeElement.style.display="block";
    this.verifypassform.nativeElement.classList = 'verifypass-form vform-hide';
    setTimeout(()=>{
      this.verifypassform.nativeElement.style.display="none";
      this.forgotpassform.nativeElement.classList.remove('form-hide');
    },500)
  }
  verifyOtp(formData:any){
    const{otp1,otp2,otp3,otp4,otp5,otp6} = formData;
    const otp = `${otp1}${otp2}${otp3}${otp4}${otp5}${otp6}`;
    console.log(otp);

  }

}
