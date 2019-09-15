import React, { Component } from 'react';
import { connect } from 'react-redux';

const SongDetail = ({selectedSong}) => {
  if (!selectedSong)
    return <div>Select a song</div>;

  return (
    <div>
      {selectedSong.title}
    </div>
  );
};

const mapStateToProps = ({ selectedSong }) => {
  return { selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
