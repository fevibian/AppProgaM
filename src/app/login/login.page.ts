import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  inputsLogin: FormGroup;

  constructor(public fb: FormBuilder) {

      this.inputsLogin = this.fb.group({
        'user': new FormControl("",Validators.required),
        'pass': new FormControl("",Validators.required)
      })
   }

  ngOnInit() {
  }

}
