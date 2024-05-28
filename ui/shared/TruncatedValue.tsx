import type { PlacementWithLogical } from '@chakra-ui/react';
import { Skeleton, chakra, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import TruncatedTextTooltip from 'ui/shared/TruncatedTextTooltip';

interface Props {
  className?: string;
  isLoading?: boolean;
  value: string;
  tooltipPlacement?: PlacementWithLogical;
}

const TruncatedValue = ({ className, isLoading, value, tooltipPlacement }: Props) => {
  return (
    <TruncatedTextTooltip label={ value } placement={ tooltipPlacement }>
      <Skeleton
        className={ className }
        isLoaded={ !isLoading }
        color={ useColorModeValue('#1D2939', '#ffffff') }
        display="inline-block"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        height="fit-content"
      >
        { value }
      </Skeleton>
    </TruncatedTextTooltip>
  );
};

export default React.memo(chakra(TruncatedValue));
