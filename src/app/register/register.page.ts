import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms'
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  inputsRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController) { 
    this.inputsRegistro = this.fb.group({
      'name': new FormControl("", Validators.required),
      'pass': new FormControl("", Validators.required),
      'confirmPass': new FormControl("", Validators.required),
      'email': new FormControl("", Validators.required),
    }); 
      
  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.inputsRegistro.value;

    if(this.inputsRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Campos incompletos',
        message: 'Tienes que completar todos los datos',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }

    var usuario = {
      name: f.name,
      pass: f.pass,
    }
    localStorage.setItem('usuario',JSON.stringify(usuario));
  }

}
