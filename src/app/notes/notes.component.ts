import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent implements OnInit  {
  Date = new Date();
  getDay =this.Date.getDate();
  getMonth =this.Date.getMonth();
  getYear =this.Date.getFullYear();

  ngOnInit(): void {
    document.getElementById("Forms")?.style.setProperty("display", "block");
    document.getElementById("btnLogin")?.style.setProperty("display", "block");
    document.getElementById("addBtn")?.style.setProperty("display", "block");
  }
}
