//นาย
import React from 'react';
import { categoryList, ratingList } from '../../../constants';
import CheckboxProton from '../../common/CheckboxProton';
import FilterListToggle from '../../common/FilterListToggle';
import SliderProton from '../../common/SliderProton';
import './styles.css';

const FilterPanel = ({i18n,t,
  selectedCategory,
  selectCategory,
  selectedRating,
  selectedPrice,
  selectRating,
  cuisines,
  changeChecked,
  changePrice,
}) => (
  <div>
    {}
    <p className='label'>{('Brand')}</p>
    <div className='input-group'>
      {cuisines.map((cuisine) => (
        <CheckboxProton
          key={cuisine.id}
          cuisine={cuisine}
          changeChecked={changeChecked}
        />
      ))}
    </div>
    <div className='input-group'>
      <p className='label-range'>{('ราคาสินค้า')}</p>
      <SliderProton value={selectedPrice} changePrice={changePrice} />
    </div>
  </div>
);

export default FilterPanel;
