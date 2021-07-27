import React, {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {SortType} from '../../../../constant';
import {getCurrentSortType} from '../../../../store/operation-process/selectors';
import {changeSortType} from '../../../../store/action';


function OffersSortForm() {
  const [isOpened, setIsOpened] = useState(false);
  const optionsListRef = useRef(null);

  const currentSortType = useSelector(getCurrentSortType);
  const dispatch = useDispatch();


  useEffect(() => {
    const onDocumentClick = (evt) => {
      if (evt.target.parentElement !== optionsListRef.current) {
        setIsOpened(false);
      }
    };

    isOpened && document.addEventListener('click', onDocumentClick);

    return () => isOpened && document.removeEventListener('click', onDocumentClick);
  }, [isOpened]);


  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onClick={() => setIsOpened(!isOpened)} data-testid="current sort type frame">
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`} ref={optionsListRef}>
        {
          Object
            .values(SortType)
            .map((sortType) => (
              <li
                key={sortType}
                className={`places__option ${sortType === currentSortType ? 'places__option--active' : ''}`}
                tabIndex="0"
                onClick={() => dispatch(changeSortType(sortType))}
                data-testid="sort type option"
              >
                {sortType}
              </li>
            ))
        }
      </ul>
    </form>
  );
}


export default React.memo(OffersSortForm);
