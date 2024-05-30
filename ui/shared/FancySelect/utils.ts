import type { ColorMode } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { Size, ChakraStylesConfig } from 'chakra-react-select';

import type { Option } from './types';

function getValueContainerStyles(size?: Size) {
  switch (size) {
    case 'sm':
    case 'md': {
      return {
        paddingLeft: 4,
      };
    }
    case 'lg': {
      return {
        paddingLeft: 6,
      };
    }
    default: {
      return {};
    }
  }
}

function getSingleValueStyles(size?: Size) {
  switch (size) {
    case 'sm':
    case 'md': {
      return {
        top: '26px',
      };
    }
    case 'lg': {
      return {
        top: '38px',
      };
    }
    default: {
      return {};
    }
  }
}

const getChakraStyles: (colorMode: ColorMode) => ChakraStylesConfig<Option> = (colorMode) => {
  const emptyInputBorderColor = colorMode === 'dark' ? 'gray.700' : 'gray.100';
  const filledInputBorderColor = colorMode === 'dark' ? 'gray.600' : 'gray.300';

  return {
    control: (provided, state) => ({
      ...provided,
      borderColor: state.hasValue ? filledInputBorderColor : emptyInputBorderColor,
      _focus: {
        borderColor: mode('primary.dark', 'primary.medium')({}),
      },
    }),
    option: (option) => ({
      ...option,
      _selected: {
        background: mode('primary.dark', 'primary.medium')({}),
        color: mode('#000000', '#000000')({}),
      },
    }),
    inputContainer: (provided) => ({
      ...provided,
      py: 0,
      mx: 0,
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      ...getValueContainerStyles(state.selectProps.size),
      py: 0,
    }),
    singleValue: (provided, state) => ({
      ...provided,
      mx: 0,
      transform: 'none',
      ...getSingleValueStyles(state.selectProps.size),
    }),
  };
};

export { getChakraStyles };
