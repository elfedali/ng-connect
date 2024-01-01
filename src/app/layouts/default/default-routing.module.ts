import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './default.component';

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        redirectTo: "chats",
        pathMatch: "full",
      },
      {
        path: "chats",
        loadChildren: () =>
          import("../../pages/chats/chats.module").then((m) => m.ChatsModule),
      },
      {
        path: "contacts",
        loadChildren: () =>
          import("../../pages/contacts/contacts.module").then(
            (m) => m.ContactsModule
          ),
      },
      {
        path: "chat-bot",
        loadChildren: () =>
          import("../../pages/chat-bot/chat-bot.module").then(
            (m) => m.ChatBotModule
          ),
      },
      {
        path: "stories",
        loadChildren: () =>
          import("../../pages/stories/stories.module").then(
            (m) => m.StoriesModule
          ),
      },
      {
        path: "settings",
        loadChildren: () =>
          import("../../pages/settings/settings.module").then(
            (m) => m.SettingsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultRoutingModule {}
