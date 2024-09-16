import { afterNextRender, afterRender, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface userData {
  Address: string;
  Email: string;
  Password: string;
  phone: string;
  fName: string;
}

interface User {
  data: userData;
  status: string;
  message: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  user: User = JSON.parse(window.localStorage.getItem('user')!);

  onLogout() {
    window.localStorage.clear();
    window.location.reload();
  }
}
