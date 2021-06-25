import {SortType} from '../../../../constant';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../../../store/action';


function OffersSortForm({currentSortType, changeSortType}) {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const onDocumentClick = () => {
      setIsOpened(false);
    };

    isOpened && document.addEventListener('click', onDocumentClick);

    return () => isOpened && document.removeEventListener('click', onDocumentClick);
  }, [isOpened]);

  useEffect(() => () => setIsOpened(true), [currentSortType]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onClick={() => setIsOpened(!isOpened)}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened && 'places__options--opened'}`}>
        {
          Object
            .values(SortType)
            .map((sortType) => (
              <li
                key={sortType}
                className={`places__option ${sortType === currentSortType && 'places__option--active'}`}
                tabIndex="0"
                onClick={() => changeSortType(sortType)}
              >
                {sortType}
              </li>
            ))
        }
      </ul>
    </form>
  );
}


OffersSortForm.propTypes = {
  currentSortType: PropTypes.string.isRequired,
  changeSortType: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentSortType: state.currentSortType,
});

const mapDispatchToProps = (dispatch) => ({
  changeSortType(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  },
});


export {OffersSortForm};
export default connect(mapStateToProps, mapDispatchToProps)(OffersSortForm);
