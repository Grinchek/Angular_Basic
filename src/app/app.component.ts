import { Component } from '@angular/core';
export interface Role {
  role: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Angular_Basic';
  isParagraphavisible: boolean = true;
  list: string[] = [
    'List one',
    'List two'
  ];
  roles: Role[] = [
    {
      role: 'Admin',
      text: 'Admin'
    },
    {
      role: 'User',
      text: 'user'
    },
    {
      role: 'Coctumer',
      text: 'Ivan'
    },
    {
      role: 'User',
      text: 'user2'
    },
  ];
  show() {
    console.log('isParagraphavisible', this.isParagraphavisible)
  }
  getColor(user: Role): string {
    return user.role === 'Admin' ? 'green' : user.role === 'User' ? 'blue' : 'red'
  }
  getDate() {
    return new Date();
  }

}
