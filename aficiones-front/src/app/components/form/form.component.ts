import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  form:FormGroup
  usuario: Usuario = {
    username: '',
    fechaRegistro: new Date,
    genero: 0,
    observacion: '',
    salario: 0,
    aficiones: [
      {id:0}
    ]
  }

  constructor(private usuarioService:UsuarioService, private formBuilder:FormBuilder){
    this.form = this.formBuilder.group({
      username: '', genero: '', observacion: '', fechaRegistro: '', salario: '', checkbox1: [false], checkbox2: [false], checkbox3: [false]
    })
  }

  getData(){
    this.usuario.aficiones.shift()

    this.usuario.username = this.form.get('username')?.value
    this.usuario.fechaRegistro = this.form.get('fechaRegistro')?.value
    this.usuario.genero = Number.parseInt(this.form.get('genero')?.value)
    this.usuario.salario = Number.parseInt(this.form.get('salario')?.value)
    this.usuario.observacion = this.form.get('observacion')?.value

    if(this.form.get('checkbox1')?.value == true) this.usuario.aficiones.push({id:1})
    if(this.form.get('checkbox2')?.value == true) this.usuario.aficiones.push({id:2})
    if(this.form.get('checkbox3')?.value == true) this.usuario.aficiones.push({id:3})

    //console.log(this.usuario)

    this.usuarioService.guardarUsuario(this.usuario).subscribe({
      next : res => {
        console.log(res)
      },
      error : err => {
        console.log(err)
      }
    })
  }
}
