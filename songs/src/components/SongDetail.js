import React, { Component } from 'react';
import { connect } from 'react-redux';

const SongDetail = ({selectedSong}) => {
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
