import Moment from 'moment';

export default function timeAgo (timestamp) {
    const secondsAgo = Moment().diff(Moment(timestamp), 'seconds');
    if(secondsAgo < 60){
      if(secondsAgo === 0){
        return "just now";
      }
      return Math.round(secondsAgo) + " seconds ago";
    }
    
    if(secondsAgo > 59 && secondsAgo < 3600){
      return Math.round((secondsAgo / 60)) + " minutes ago";
    }
  
    return Math.round(secondsAgo / 60 / 60) + " hours ago";
}