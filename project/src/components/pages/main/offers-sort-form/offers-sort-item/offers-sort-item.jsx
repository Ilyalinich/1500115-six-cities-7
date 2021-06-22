import {SortType} from '../../../../constant';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../../../store/action';


function OffersSortItem({currentSortType}) {
  return (
    <li className={`places__option places__option--active`} tabIndex="0">{SortType.POPULAR}</li>
  );
}


OffersSortForm.propTypes = {
  currentSortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentSortType: state.currentSortType,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});


export {OffersSortForm};
export default connect(mapStateToProps, mapDispatchToProps)(OffersSortForm);
