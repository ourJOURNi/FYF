import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeartIconComponent } from './heart-icon/heart-icon.component';
import { EventsFavoritesIconComponent } from './events-favorites-icon/events-favorites-icon.component';
import { NotGoingIconComponent } from './not-going-icon/not-going-icon.component';
import { FollowIconComponent } from './follow-icon/follow-icon.component';
import { UpDownVoteButtonsComponent } from './up-down-vote-buttons/up-down-vote-buttons.component';
import { CommentVoteBarComponent } from './comment-vote-bar/comment-vote-bar.component';
import { FollowCommentButtonsComponent } from './follow-comment-buttons/follow-comment-buttons.component';
import { JobsFilterPopoverComponent } from './jobs-filter-popover/jobs-filter-popover.component';
import { PostsFilterPopoverComponent } from './posts-filter-popover/posts-filter-popover.component';
import { ReplyOptionsPopoverComponent } from './reply-options-popover/reply-options-popover.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule.forRoot()
     ],
    declarations: [
        HeartIconComponent,
        EventsFavoritesIconComponent,
        NotGoingIconComponent,
        FollowIconComponent,
        UpDownVoteButtonsComponent,
        CommentVoteBarComponent,
        FollowCommentButtonsComponent,
        JobsFilterPopoverComponent,
        PostsFilterPopoverComponent,
        ReplyOptionsPopoverComponent
    ],
    exports: [
        HeartIconComponent,
        EventsFavoritesIconComponent,
        NotGoingIconComponent,
        FollowIconComponent,
        UpDownVoteButtonsComponent,
        CommentVoteBarComponent,
        FollowCommentButtonsComponent,
        JobsFilterPopoverComponent,
        PostsFilterPopoverComponent,
        ReplyOptionsPopoverComponent
    ]
})
export class CustomComponentsModule {}
