import React, { Component } from 'react';
import { connect } from 'react-redux';

const SongDetail = ({selectedSong}) => {
  if (!selectedSong)
    return <div>Select a song</div>;

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {selectedSong.title}
        <br />
        Duration: {selectedSong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = ({ selectedSong }) => {
  return { selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
