import { Component, inject, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

interface noteData {
  _id: string;
  Title: string;
  Summary: string;
  Day: string;
  Month: string;
  Year: string;
}
interface Note {
  data: noteData;
  status: string;
  message: string;
}

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css',
})
export class NotesComponent implements OnInit {
  Date = new Date();
  getDay = this.Date.getDate();
  getMonth = this.Date.getMonth();
  getYear = this.Date.getFullYear();

  noteService = inject(NoteService);

  Notes = JSON.parse(window.localStorage.getItem('note')!);
  constructor() {
    console.log(this.Notes);
  }

  ngOnInit(): void {
    document.getElementById('Forms')?.style.setProperty('display', 'block');
    document.getElementById('btnLogin')?.style.setProperty('display', 'block');
    document.getElementById('addBtn')?.style.setProperty('display', 'block');
  }
}
