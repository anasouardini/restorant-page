import "../styles/index.scss";
import "../assets/media/topic1.jpg"

import topicGen, { topicone, topictwo, topicthree, topicfour} from './topics/index';

const topics = [topicone, topictwo, topicthree, topicfour];

topicGen.load(topics[0]);
document.querySelector('#controls').addEventListener('click', (e)=>{
    if(!e.target.hasAttribute('data-topic')){return false;}
    topicGen.clean();
    topicGen.load(topics[parseInt(e.target.getAttribute('data-topic'))-1]);
});