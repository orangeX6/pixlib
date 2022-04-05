import React from 'react';

export default class ImageCard extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { spans: 0 };
  //   this.imageRef = React.createRef();
  // }

  state = { spans: 0 };
  imageRef = React.createRef();

  componentDidMount() {
    // console.log(this.imageRef);
    // console.log(this.imageRef.current.clientHeight); //returns 0 as image is not loaded yet

    this.imageRef.current.addEventListener('load', this.setGridSpans);
    // window.addEventListener('resize', this.setSpans);
  }

  setGridSpans = () => {
    // const height = this?.imageRef?.current?.clientHeight;
    const height = this.imageRef.current.clientHeight;
    // if (!height) return;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { alt_description: description, urls } = this.props.image;

    return (
      <div
        style={{
          gridRowEnd: `span ${this.state.spans}`,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}
