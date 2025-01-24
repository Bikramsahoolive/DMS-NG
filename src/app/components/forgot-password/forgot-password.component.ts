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





//    inputs = document.querySelectorAll('.otp-input input');
//   inputs.forEach((input, index) => {
//     input.addEventListener('input', (e) => {
//         if (e.target.value.length > 1) {
//             e.target.value = e.target.value.slice(0, 1);
//         }
//         if (e.target.value.length === 1) {
//             if (index < inputs.length - 1) {
//                 inputs[index + 1].focus();
//             }
//         }
//     });

//     input.addEventListener('keydown', (e) => {
//         if (e.key === 'Backspace' && !e.target.value) {
//             if (index > 0) {
//                 inputs[index - 1].focus();
//             }
//         }
//         if (e.key === 'e') {
//             e.preventDefault();
//         }
//     });
// });





















  // const inputs = document.querySelectorAll('.otp-input input');
  // const timerDisplay = document.getElementById('timer');
  // const resendLink = document.querySelector('.resend-link');
  // const emailSpan = document.getElementById('email');
  // let timeLeft = 120; // 2 minutes in seconds
  // let timerId;
  // let canResend = true;

  // Simulating an email for demonstration
  // emailSpan.textContent = "user@example.com";

  // function startTimer() {
  //     timerId = setInterval(() => {
  //         if (timeLeft <= 0) {
  //             clearInterval(timerId);
  //             timerDisplay.textContent = "Code expired";
  //             timerDisplay.classList.add('expired');
  //             inputs.forEach(input => input.disabled = true);
  //             canResend = false;
  //         } else {
  //             const minutes = Math.floor(timeLeft / 60);
  //             const seconds = timeLeft % 60;
  //             timerDisplay.textContent = `(${minutes}:${seconds.toString().padStart(2, '0')})`;
  //             timeLeft--;
  //         }
  //     }, 1000);
  // }

  // function resendOTP() {
  //     if (canResend) {
  //         alert("New OTP sent!");
  //         timeLeft = 120;
  //         inputs.forEach(input => {
  //             input.value = '';
  //             input.disabled = false;
  //         });
  //         inputs[0].focus();
  //         clearInterval(timerId);
  //         timerDisplay.classList.remove('expired');
  //         startTimer();
  //     } else {
  //         alert("Cannot resend code. Time has expired.");
  //     }
  // }

  // inputs.forEach((input, index) => {
  //     input.addEventListener('input', (e) => {
  //         if (e.target.value.length > 1) {
  //             e.target.value = e.target.value.slice(0, 1);
  //         }
  //         if (e.target.value.length === 1) {
  //             if (index < inputs.length - 1) {
  //                 inputs[index + 1].focus();
  //             }
  //         }
  //     });

  //     input.addEventListener('keydown', (e) => {
  //         if (e.key === 'Backspace' && !e.target.value) {
  //             if (index > 0) {
  //                 inputs[index - 1].focus();
  //             }
  //         }
  //         if (e.key === 'e') {
  //             e.preventDefault();
  //         }
  //     });
  // });

  // function verifyOTP() {
  //     const otp = Array.from(inputs).map(input => input.value).join('');
  //     if (otp.length === 6) {
  //         if (timeLeft > 0) {
  //             alert(`Verifying OTP: ${otp}`);
  //         } else {
  //             alert('OTP has expired. Please request a new one.');
  //         }
  //     } else {
  //         alert('Please enter a 6-digit OTP');
  //     }
  // }

  // startTimer();
}
