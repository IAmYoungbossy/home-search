import {
  StyledRedditRules,
  StyledRedditRulesHeader,
} from "./StyledCreatePost";
import { RuleSVG } from "../../assets/socialPage/SocialSVG";
import { redditRulesArr } from "../../constant/textConstant";

export default function RedditRules() {
  return (
    <StyledRedditRules>
      <RedditRulesHeader />
      {redditRulesArr.map((rule, index) => (
        <div key={index}>
          {index + 1} {rule}
        </div>
      ))}
    </StyledRedditRules>
  );
}

function RedditRulesHeader() {
  return (
    <StyledRedditRulesHeader>
      <RuleSVG /> <h4>Posting to Reddit</h4>
    </StyledRedditRulesHeader>
  );
}
