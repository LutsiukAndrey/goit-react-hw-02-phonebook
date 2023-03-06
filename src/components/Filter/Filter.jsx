import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const onChange = ({ value, onChange }) => {
  return (
    <form action="input">
      <Filter type="text" value={value} onChange={onChange} />
    </form>
  );
};
export default onChange;

onChange.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Filter = styled.input`
  width: 300px;
  padding: 10px 40px;
  border-radius: 20px;
  border: transparent;
  margin-bottom: 30px;
`;
