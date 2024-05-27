import { Box, Heading, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

import config from 'configs/app';
import ChainIndicators from 'ui/home/indicators/ChainIndicators';
import LatestBlocks from 'ui/home/LatestBlocks';
import LatestZkEvmL2Batches from 'ui/home/LatestZkEvmL2Batches';
import Stats from 'ui/home/Stats';
import Transactions from 'ui/home/Transactions';
// import AdBanner from 'ui/shared/ad/AdBanner';
import IconSvg from 'ui/shared/IconSvg';
import ProfileMenuDesktop from 'ui/snippets/profileMenu/ProfileMenuDesktop';
import SearchBar from 'ui/snippets/searchBar/SearchBar';
import WalletMenuDesktop from 'ui/snippets/walletMenu/WalletMenuDesktop';

import MeshNet from '../../public/meshNet.png';
import Stars from '../../public/stars.png';

const rollupFeature = config.features.rollup;

const Home = () => {
  return (
    <Box as="main">
      <Box w="full" backgroundColor="#1D293980" py="12px" px="16px" height="fit-content" mb={ 6 } borderRadius="12px">
        <Flex
          alignItems="center"
          gap="16px"
        >
          <IconSvg
            name="warning"
            fill="#fff"
            style={{ color: 'white' }}
            height="5"
            width="5"
          />
          <Text>
            98% Blocks Indexed - We’re indexing this chain right now. Some of
            the counts may be inaccurate.
          </Text>
        </Flex>
      </Box>
      <Box
        w="100%"
        h="214px"
        borderRadius="28px"
        border="2px solid #27519F"
        // background={ config.UI.homepage.plate.background }
        background="linear-gradient(180deg, #223353 0%, #062E7F 100%);"
        // borderRadius="24px"
        padding={{ base: '24px', lg: '48px' }}
        minW={{ base: 'unset', lg: '900px' }}
        // minH={{ base: '210px', lg: '210px' }}
        data-label="hero plate"
        backgroundRepeat="no-repeat"
        // backgroundSize="cover"
        position="relative"
        // overflow="hidden"
      >
        <Image
          src={ MeshNet }
          alt="Mesh Net"
          style={{
            position: 'absolute',
            right: '0',
            top: '0',
            opacity: '0.3',
          }}
        />
        <Image
          src={ Stars }
          alt="Mesh Net"
          style={{
            position: 'absolute',
            right: '0',
            top: '0',
            opacity: '0.3',
          }}
        />
        <Flex
          mb={{ base: 6, lg: 8 }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading
            // as="h1"
            fontSize="30px"
            // size={{ base: 'md', lg: 'xl' }}
            lineHeight={{ base: '32px', lg: '50px' }}
            fontWeight={ 600 }
            color={ config.UI.homepage.plate.textColor }
          >
            { config.chain.name } explorer
          </Heading>
          <Box display={{ base: 'none', lg: 'flex' }}>
            { config.features.account.isEnabled && (
              <ProfileMenuDesktop isHomePage/>
            ) }
            { config.features.blockchainInteraction.isEnabled && (
              <WalletMenuDesktop isHomePage/>
            ) }
          </Box>
        </Flex>
        <SearchBar isHomepage/>
      </Box>
      { /* <BoxesStats /> */ }
      <Stats/>
      <ChainIndicators/>
      { /* <AdBanner mt={{ base: 6, lg: 8 }} mx="auto" display="flex" justifyContent="center"/> */ }
      <Flex
        mt={ 8 }
        direction={{ base: 'column', lg: 'row' }}
        columnGap={ 12 }
        rowGap={ 8 }
      >
        { rollupFeature.isEnabled && rollupFeature.type === 'zkEvm' ? (
          <LatestZkEvmL2Batches/>
        ) : (
          <LatestBlocks/>
        ) }
        <Box flexGrow={ 1 }>
          <Transactions/>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
