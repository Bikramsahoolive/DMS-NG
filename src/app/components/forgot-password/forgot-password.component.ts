import { Component,ViewChild,ElementRef,ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import{FormsModule,NgForm} from '@angular/forms'
import{Router} from '@angular/router'
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-forgot-password',
  imports: [FormsModule,NzInputModule, NzIconModule, NzToolTipModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
    constructor(private router: Router) {
     }
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
    
    if(formData.username){
      console.log(formData);
      this.forgotpassform.nativeElement.classList.add('form-hide');
      this.verifypassform.nativeElement.style.display="block";
      setTimeout(()=>{
      this.verifypassform.nativeElement.classList.remove('vform-hide');
      this.forgotpassform.nativeElement.style.display="none";
      },500)
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });

      Toast.fire({
        icon: 'success',
        title: 'OTP sent Successfully'
      });
      
    }else{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });

      Toast.fire({
        icon: 'error',
        title: 'Invalid Username'
      });
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

  resendOtp(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });

    Toast.fire({
      icon: 'success',
      title: 'OTP resent successfully'
    });
  }

  verifyOtp(formData:any){
    const{otp1,otp2,otp3,otp4,otp5,otp6} = formData;
    const otp = `${otp1}${otp2}${otp3}${otp4}${otp5}${otp6}`;
    console.log(otp);

  }

}
