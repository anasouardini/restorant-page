import '../styles/index.scss';

import topicGen, { topicone, topictwo, topicthree, topicfour} from './topics/index';

const topics = [topicone, topictwo, topicthree, topicfour];

document.querySelector('#wrapper').addEventListener('click', (e)=>{
    if(!e.target.hasAttribute('[topicLnk]')){return false;}

    topicGen.clean();
    topicGen.load(topics[parseInt(e.target.getAttribute('[topicLnk]'))]);
});
