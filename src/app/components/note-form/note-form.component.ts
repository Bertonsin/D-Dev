import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule} from "@angular/forms"
import {} from '@angular/material'

@Component({
  selector: 'app-note-form',
  imports: [ReactiveFormsModule],
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.css'
})
export class NoteFormComponent {
  noteForm = new FormGroup({
    tag: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl('')
  })

  submit(){
    console.log({data: {
      tag: this.noteForm.value.tag,
      title: this.noteForm.value.title,
      description: this.noteForm.value.description
    }})
  }
}
