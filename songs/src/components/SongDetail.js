import React, { Component } from 'react';
import { connect } from 'react-redux';

const SongDetail = props => {
  console.log(props);
  return (
    <div>
      Song Detail
    </div>
  );
};

const mapStateToProps = ({ selectedSong }) => {
  return { selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
