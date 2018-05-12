import { Mongo } from 'meteor/mongo';
import { Meteor } from "meteor/meteor";
 
export const Comments = new Mongo.Collection('comments');

if (Meteor.isServer) {
    Meteor.publish("comments", function commentsPublication( ) {
      return Comments.find( );
    });
}

 
Meteor.methods({
    
    "comments.insert"(CommentObj) {  

        Comments.insert(CommentObj);
    },

});