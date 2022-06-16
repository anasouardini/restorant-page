import topicone from "./topic1.js";
import topictwo from "./topic2.js";
import topicthree from "./topic3.js";
import topicfour from "./topic4.js";


let topicGen = (()=>{
    const _DOM = {
        parent : document.querySelector('#wrapper')
    }

    const _appendText = function (text){
        const textNode = document.createTextNode(text);
        this.appendChild(textNode);
    }

    const _appendTextElm = function (tag, text, style){
        const par = document.createElement(tag);
        par.textContent = text;
        par.style.cssText = style;
        this.appendChild(par);

        return par;
    }

    const _appendDiv = function (style, attr){
        const div = document.createElement('div');
        div.style.cssText = style;
        if(attr){
            div.setAttribute(attr.type, attr.name);
        }
        this.appendChild(div);

        return div;
    }

    
    const load = (topic)=>{
        _DOM.parent.style.cssText = "height: 600px;width: 800px;margin: 40px auto;display: flex; flex-direction: row; flex-wrap: wrap;";
        _appendDiv.call(_DOM.parent, topic.topicImageStyle);
        
        const features = _appendDiv.call(_DOM.parent, topic.featuresContainerStyle, topic.featuresContainerAttr);
        
        topic.textList.forEach((textNode, index)=>{
            const feature = _appendDiv.call(features, "width: 100%;height: 100px;");
            const par = _appendTextElm.call(feature, "p", "", "text-transform: capitalize;");
            _appendTextElm.call(par, "span", topic.textList2[index], "text-transform: capitalize;");
            _appendText.call(par, textNode);
        });
    } 

    const clean = ()=>{
        Array.from(_DOM.parent.children).forEach((el)=>el.remove());
    }

    return {load, clean};
})()


export default topicGen;
export {topicone, topictwo, topicthree, topicfour}