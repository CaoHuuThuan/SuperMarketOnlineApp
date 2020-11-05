import React from 'react';
import {View, Text} from 'react-native';
import {Block, TextView, Input, Button} from '../../components';
import Feather from 'react-native-vector-icons/Feather';
/**
 *
 *  Component cho thanh tìm kiếm
 *
 */
const SearchBar = () => {
  return (
    <Block direction="row">
      <Block
        margin={4}
        middle
        color="#fff"
        borderRadius={4}
        paddingHorizontal={8}
        block
        direction="row"
        shadow>
        <Block block>
          <Input padding={10} placeholder={'Search'} />
        </Block>
        <Feather name="search" size={20} />
      </Block>
    </Block>
  );
};

export default SearchBar;
