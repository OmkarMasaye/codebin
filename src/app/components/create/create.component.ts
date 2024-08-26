import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  title =new FormControl("",[
    Validators.required
  ])

  code = new FormControl("",[
    Validators.required
  ])

  binForm = new FormGroup({
    title:this.title,
    code:this.code
  })

  save(){
    console.log(this.binForm.value)
  }
}
