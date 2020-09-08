import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NewMessageMentorPage } from 'src/app/modals/new-message-mentor/new-message-mentor.page';


@Component({
  selector: 'app-mentor-chat',
  templateUrl: './mentor-chat.page.html',
  styleUrls: ['./mentor-chat.page.scss'],
})
export class MentorChatPage implements OnInit {

  constructor(
    private router: Router,
    private modal: ModalController) { }

  ngOnInit() {
  }

  chatPage() {
    this.router.navigate(['home/mentors/mentor-chat/chat-page']);
  }

  async newMessage() {

    const newMessageModalConfig = await this.modal.create({
      component: NewMessageMentorPage,
      componentProps: {

      }
    });
    await newMessageModalConfig.present();

  }

}
