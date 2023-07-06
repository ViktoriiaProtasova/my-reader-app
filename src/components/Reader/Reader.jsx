import { Component } from 'react';
import Controls from './Controls';
import Progress from './Progress';
import Publication from './Publication.jsx';

const LS_KEY = 'reader_item_index';

export default class Reader extends Component {
  state = {
    index: 0,
  };

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  componentDidMount() {
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
      this.setState({ index: Number(savedState) });
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const currentItem = items[index];
    const totalItem = items.length;

    return (
      <div className="container text-left">
        <Controls
          current={index + 1}
          total={totalItem}
          onChange={this.changeIndex}
        ></Controls>
        <Progress current={index + 1} total={totalItem}></Progress>
        <Publication
          title={currentItem.title}
          text={currentItem.text}
        ></Publication>
      </div>
    );
  }
}
