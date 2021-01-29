!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,o){if(!t)return;if("string"==typeof t)return e(t,o);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,o)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}function o(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{ENZJ:function(e,n,s){"use strict";s.d(n,"a",function(){return l});var r=s("AytR"),i=s("2Vo4"),u=s("Aso2"),p=s("fXoL"),a=s("tk/3"),l=function(){var e=function(){function e(t,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.http=t,this.profile=o,this.BACKEND_URL=r.a.url,this.postsSubject$=new i.a([]),this.commentsSubject$=new i.a([]),this.followingSubject$=new i.a([])}var n,s,u;return n=e,(s=[{key:"getPosts",value:function(){return this.http.get(this.BACKEND_URL+"/api/posts/")}},{key:"getMyPosts",value:function(t){return this.http.post(this.BACKEND_URL+"/api/posts/my-posts",{email:t})}},{key:"getPostInfo",value:function(t){return this.http.post(this.BACKEND_URL+"/api/posts/post-info",{_id:t})}},{key:"addPost",value:function(t,e,o,n,s){return console.log("Adding post to post que..."),console.log("Post: ",n),this.http.post(this.BACKEND_URL+"/api/posts/add-text-post",{creatorName:t,creatorEmail:e,creatorProfilePicture:o,post:n,title:s})}},{key:"comment",value:function(t,e,o,n,s){return this.http.post(this.BACKEND_URL+"/api/posts/comment",{postID:t,userFullName:e,userEmail:o,userProfilePicture:n,comment:s})}},{key:"editPost",value:function(t,e){return this.http.post(this.BACKEND_URL+"/api/posts/edit-post",{postID:t,newPost:e})}},{key:"editComment",value:function(t,e,o){return this.http.post(this.BACKEND_URL+"/api/posts/edit-comment",{postID:e,commentID:t,newComment:o})}},{key:"upVotePost",value:function(t,e){return this.http.post(this.BACKEND_URL+"/api/posts/up-vote-post",{postID:t,userEmail:e})}},{key:"downVotePost",value:function(t,e){return this.http.post(this.BACKEND_URL+"/api/posts/down-vote-post",{postID:t,userEmail:e})}},{key:"upVoteComment",value:function(t,e,o){return this.http.post(this.BACKEND_URL+"/api/posts/up-vote-comment",{postID:t,commentID:e,userEmail:o})}},{key:"downVoteComment",value:function(t,e,o){return this.http.post(this.BACKEND_URL+"/api/posts/down-vote-comment",{postID:t,commentID:e,userEmail:o})}},{key:"followPost",value:function(e,o){var n=this;return this.http.post(this.BACKEND_URL+"/api/posts/follow",{_id:e,email:o}).subscribe(function(e){var o=t(Object.values(e));n.followingSubject$.next(o)})}},{key:"unFollowPost",value:function(e,o){var n=this;return this.http.post(this.BACKEND_URL+"/api/posts/unfollow",{_id:e,email:o}).subscribe(function(e){var o=t(Object.values(e));n.followingSubject$.next(o)})}},{key:"getFollowedPost",value:function(t){return this.http.post(this.BACKEND_URL+"/api/posts/get-followed-posts",{_id:t})}},{key:"deleteComment",value:function(t,e){return this.http.post(this.BACKEND_URL+"/api/posts/delete-comment",{_id:t,_cid:e})}},{key:"deletePost",value:function(t){return this.http.post(this.BACKEND_URL+"/api/posts/delete-post",{_id:t})}},{key:"reportComment",value:function(t,e,o,n,s,r,i,u,p,a){return this.http.post(this.BACKEND_URL+"/api/posts/report",{commentID:t,commentContents:e,post:o,postID:n,reportedUserName:s,reportedUserEmail:r,commentDate:i,userEmail:u,userFullname:p,reportReason:a})}},{key:"replyComment",value:function(t,e,o,n,s,r,i,u){return this.http.post(this.BACKEND_URL+"/api/posts/reply-comment",{postID:e,commentID:t,reply:o,userFullName:n,userProfilePicture:r,userEmail:s,commentUserEmail:u,commentUserFullName:i})}},{key:"deleteReply",value:function(t,e,o){return this.http.post(this.BACKEND_URL+"/api/posts/delete-reply",{_rid:t,_cid:e,_pid:o})}}])&&o(n.prototype,s),u&&o(n,u),e}();return e.\u0275fac=function(t){return new(t||e)(p.Qb(a.b),p.Qb(u.a))},e.\u0275prov=p.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();