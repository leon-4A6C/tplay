import React from 'react';
import ReactDOM from 'react-dom';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="item">
        <img src="" alt=""></img>
      </div>
    )
  }
}


function generateItem(data) {
  let imgUrl = posterBaseUrl + data.poster_path;
  let template = document.querySelector("#item");
  let clone = document.importNode(template.content, true);
  clone.title = data.name;
  let img = clone.querySelector("img");
  img.src = imgUrl;
  img.alt = data.name || data.title;
  return clone;
}

function addItemToPage(data, page) {
  let clone = generateItem(data);

  page.appendChild(clone);


  const items = page.querySelectorAll(".item");

  // fix the height
  for (let i = 0; i < items.length; i++) {
    items[i].onclick = e => {
      console.log(e);
    };
    items[i].title = items[i].children[0].alt;
    items[i].style.height = (items[i].getBoundingClientRect().width * 1.5) + "px";
  }

}
