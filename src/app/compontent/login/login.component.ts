import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginform=this.fb.group({
  email:['',[Validators.required,Validators.email]],
  password:['',Validators.required],
})
constructor(private fb:FormBuilder,
  private authService: AuthService,
  private router: Router,
  private messageService: MessageService,
  ){}
 get email(){
  return this.loginform.controls['email'];
 }
 get password(){
  return this.loginform.controls['password'];
 
 };
 loginUser(){
  const{email,password}=this.loginform.value;
  this.authService.getUserByEmail(email as string).subscribe(
    response=>{
      if(response.length> 0  && response[0].password===password){
        sessionStorage.setItem('email',email as string);
        this.router.navigate(['/home']);
      }
      else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'email or password is wrong' });

      }
    },
     error=>{
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Some thing went worng' });
     }

  )
    
 }
}
