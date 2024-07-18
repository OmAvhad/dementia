import React from "react";
import "./communityPost.css"

function communityPost() {
  return (
    <div className="mt-2">
      <div class="tweetEntry">
        <div class="tweetEntry-content">
          <a class="tweetEntry-account-group" href="[accountURL]">
            <img
              class="tweetEntry-avatar"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQieWLCSvzkGE1CuhCa90wc2bBaze0bz7iBoA&s"
            />

            <strong class="tweetEntry-fullname">Abhishek Upadhyay</strong>

            <span class="tweetEntry-username">
              @<b>[megablaziken]</b>
            </span>

            <span class="tweetEntry-timestamp">- [timestamp]</span>
          </a>

          <div class="tweetEntry-text-container">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam
            ipsum, finibus ac est sed, vestibulum condimentum neque. Sed eget
            iaculis.
          </div>
        </div>

        <div class="optionalMedia">
          <img class="optionalMedia-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQieWLCSvzkGE1CuhCa90wc2bBaze0bz7iBoA&s" />
        </div>

        <div
          class="tweetEntry-action-list"
          style={{"line-height":"24px", "color": "#b1bbc3"}}
        >
          <i class="fa fa-reply" style={{"width": "80px"}}></i>
          <i class="fa fa-retweet" style={{"width": "80px"}}></i>
          <i class="fa fa-heart" style={{"width": "80px"}}></i>
        </div>
      </div>

      <div class="tweetEntry">
        <div class="tweetEntry-content">
          <a class="tweetEntry-account-group" href="[accountURL]">
            <img
              class="tweetEntry-avatar"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQieWLCSvzkGE1CuhCa90wc2bBaze0bz7iBoA&s"
            />

            <strong class="tweetEntry-fullname">[Abhishek Upadhyay]</strong>

            <span class="tweetEntry-username">
              @<b>[megablaziken]</b>
            </span>

            <span class="tweetEntry-timestamp">- [timestamp]</span>
          </a>

          <div class="tweetEntry-text-container">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam
            ipsum, finibus ac est sed, vestibulum condimentum neque. Sed eget
            iaculis.
          </div>
        </div>

        <div class="optionalMedia" style={{"display": "none"}}>
          <img
            class="optionalMedia-img"
            style={{"line-height":"24px", "color": "#b1bbc3"}}
          />
        </div>

        <div
          class="tweetEntry-action-list"
          style={{"line-height":"24px", "color": "#b1bbc3"}}
        >
          <i class="fa fa-reply" style={{"width": "80px"}}></i>
          <i class="fa fa-retweet" style={{"width": "80px"}}></i>
          <i class="fa fa-heart" style={{"width": "80px"}}></i>
        </div>
      </div>
    </div>
  );
}

export default communityPost;
