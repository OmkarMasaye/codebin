import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DbService } from '../../services/db.service';
import { Snippet } from '../../../models/snippet';


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(private dbService:DbService){}
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

  async save(){
    await this.dbService.createSnippet(this.binForm.value as Snippet)
  }
}
