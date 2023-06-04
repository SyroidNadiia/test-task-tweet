import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { setFilter } from 'redux/filtersSlice';
import { FilterWrapper } from './Filter.styles';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.status);

  const handleFilterChange = filter => dispatch(setFilter(filter));

  return (
    <FilterWrapper>
      <FormControl style={{ minWidth: 180 }}>
        <InputLabel>Filter</InputLabel>
        <Select
          value={filter}
          onChange={event => handleFilterChange(event.target.value)}
        >
          <MenuItem value={statusFilters.all}>All</MenuItem>
          <MenuItem value={statusFilters.follow}>Follow</MenuItem>
          <MenuItem value={statusFilters.followings}>Followings</MenuItem>
        </Select>
      </FormControl>
    </FilterWrapper>
  );
};

export default Filter;
