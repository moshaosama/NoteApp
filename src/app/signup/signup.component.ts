import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  ngOnInit(): void {
    document.getElementById("Forms")?.style.setProperty("display", "none");
    document.getElementById("btnLogin")?.style.setProperty("display", "none");
    document.getElementById("addBtn")?.style.setProperty("display", "none");
  }
}
