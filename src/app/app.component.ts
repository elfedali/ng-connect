import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  template: `<router-outlet></router-outlet>
    <ul>
      <li class="active"><a routerLink="/">Home</a></li>
      <li><a routerLink="/chats">Chats</a></li>
      <li><a routerLink="/chat-bot">Chat-bot</a></li>
      <li><a routerLink="/contacts">Contacts</a></li>
      <li><a routerLink="/settings">Settings</a></li>
      <li><a routerLink="/stories">Stories</a></li>
      <li><a routerLink="/s/login">Login</a></li>
      <li><a routerLink="/s/register">Register</a></li>
      <li><a routerLink="/s/forgot-password">Forgot password</a></li>
      <li><a routerLink="/s/reset-password">Reset password</a></li>
      <li><a routerLink="/e/404">Error 404</a></li>
      <li><a routerLink="/e/500">Error 500</a></li>
    </ul> `,
  styles: [],
})
export class AppComponent {
  title = "ng-connect";
}
