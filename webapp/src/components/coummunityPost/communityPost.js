import React from "react";
import "./communityPost.css"

function communityPost() {
  return (
    <div className="mt-2 overflow-y-scroll">
      <div class="tweetEntry">
        <div class="tweetEntry-content">
          <a class="tweetEntry-account-group" href="[accountURL]">
            <img
              class="tweetEntry-avatar"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQieWLCSvzkGE1CuhCa90wc2bBaze0bz7iBoA&s"
            />

            <strong class="tweetEntry-fullname">Abhishek Upadhyay(He/Him)</strong>

            <span class="tweetEntry-username">
              @<b>[megablaziken]</b>
            </span>

            <span class="tweetEntry-timestamp"></span>
          </a>

          <div class="tweetEntry-text-container">
            Members of the LGBTQ+ community face many challenges and obstacles, particularly in accessing health care services. This can lead to poor health outcomes and people avoiding accessing timely support due to fear of judgement or discrimination.  
            Having this service in place will ensure inclusivity remains at the core of the care and support we provide. It will reassure members of the community that they can access support from Dementia UK without fear of judgement, creating a safe space to share concerns and seek help with issues relating to dementia. 
          </div>
        </div>

        <div class="optionalMedia">
          <img class="optionalMedia-img" width={300} src="https://b3598975.smushcdn.com/3598975/wp-content/uploads/Rainbow-Flag-960x540-1.png?lossy=2&strip=1&webp=1" />
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

            <strong class="tweetEntry-fullname">Abhishek Upadhyay (He/Him)</strong>

            <span class="tweetEntry-username">
              @<b>[megablaziken]</b>
            </span>

            <span class="tweetEntry-timestamp"></span>
          </a>

          <div class="tweetEntry-text-container">
            Dementia is a progressive condition and currently, there is no cure. However, with some simple steps, the person with dementia can stay physically and mentally healthy for as long as possible and maintain a good quality of life.
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
