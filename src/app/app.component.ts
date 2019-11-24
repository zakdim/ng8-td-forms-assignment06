import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 subscriptionOptions = ['Basic', 'Advanced', 'Pro'];
 defaultSubscription = "Advanced";
 user = {
  email: '',
  subscription: '',
  password: ''
};
submitted = false;

 @ViewChild('f', {static: false}) userForm: NgForm;
 
 onSubmit() {
   this.submitted = true;
   console.log(this.userForm.value);

   this.user.email = this.userForm.value.email;
   this.user.subscription = this.userForm.value.subscription;
   this.user.password = this.userForm.value.password;

   this.userForm.reset();
 }
}
