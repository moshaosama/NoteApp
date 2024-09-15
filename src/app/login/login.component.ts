import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    document.getElementById("Forms")?.style.setProperty("display", "none");
    document.getElementById("btnLogin")?.style.setProperty("display", "none");
    document.getElementById("addBtn")?.style.setProperty("display", "none");
  }
}
