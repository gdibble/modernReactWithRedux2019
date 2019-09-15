import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {

  renderList() {
    return this.props.songs.map(song => {
      return (
        <div
          key={song.title}
          className="item"
        >
          <div className="right floated content">
            <button className="ui button primary">
              Select
            </button>
          </div>
          <div className="content">
            {song.title}
          </div>
        </div>
      );
    })
  }

  render() {
    console.log(this.props);
    return (
      <div className="ui divided list">
        {this.renderList()}
      </div>
    );
  }

}

const mapStateToProps = ({ songs }) => {  // (state)
  return { songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
