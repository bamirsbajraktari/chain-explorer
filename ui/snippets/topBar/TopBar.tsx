import { Flex, Divider, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import config from 'configs/app';
import NetworkAddToWallet from 'ui/shared/NetworkAddToWallet';

import Settings from './settings/Settings';
import SwapButton from './SwapButton';
import TopBarStats from './TopBarStats';

const feature = config.features.swapButton;

const TopBar = () => {
  const bgColor = useColorModeValue('#F2F4F7', 'whiteAlpha.100');

  return (
    <Flex
      py={ 2 }
      px={ 6 }
      bgColor={ bgColor }
      justifyContent="space-between"
      alignItems="center"
    >
      <TopBarStats/>
      <Flex alignItems="center" gap="3">
        { feature.isEnabled && (
          <>
            <SwapButton/>
            <Divider
              mr={ 3 }
              ml={{ base: 2, sm: 3 }}
              height={ 4 }
              orientation="vertical"
            />
          </>
        ) }
        <NetworkAddToWallet isTopNav={ true }/>
        <Settings/>
      </Flex>
    </Flex>
  );
};

export default React.memo(TopBar);
