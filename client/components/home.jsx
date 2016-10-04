import React from "react";


export const imageUrls = [
  'http://daynin.github.io/clojurescript-presentation/img/react-logo.png',
  'https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png',
  'http://freevector.co/wp-content/uploads/2014/04/webpack.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emoji_u26a1.svg/2000px-Emoji_u26a1.svg.png'
];

export class Home extends React.Component {
  renderImage(imgUrl, key) {
    return (
      <img key={key} src={imgUrl} width='10%' height='10%' />
    )
  }
  render() {
    let i = 0
    return (
      <div>
        <h1>Hello <a href="https://github.com/electrode-io">Electrode</a></h1>
        <div><p>Our belved friends</p></div>
        <div>
          {imageUrls.map(imgUrl => this.renderImage(imgUrl, i++))}
        </div>
      </div>
    );
  }
}
