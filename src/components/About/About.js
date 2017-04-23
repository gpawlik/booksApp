import React from 'react';
import { Text, View } from 'react-native';

import s from './styles';

export default () => {
  return (
    <View style={s.contentWrapper}>
      <View style={s.section}>
        <View style={s.sectionHeader}>
          <Text style={s.sectionTitle}>Step 1</Text>
        </View>
        <View style={s.sectionContent}>
          <Text style={s.sectionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec ex vel nibh convallis ullamcorper. Quisque interdum fringilla ullamcorper. Quisque sit amet pellentesque nisi. Nunc sed suscipit dui.</Text>
        </View>
      </View>
      <View style={s.section}>
        <View style={s.sectionHeader}>
          <Text style={s.sectionTitle}>Step 2</Text>
        </View>
        <View style={s.sectionContent}>
          <Text style={s.sectionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec ex vel nibh convallis ullamcorper. Quisque interdum fringilla ullamcorper. Quisque sit amet pellentesque nisi. Nunc sed suscipit dui.</Text>
        </View>
      </View>
      <View style={s.sectionLast}>
        <View style={s.sectionHeader}>
          <Text style={s.sectionTitle}>Step 3</Text>
        </View>
        <View style={s.sectionContent}>
          <Text style={s.sectionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec ex vel nibh convallis ullamcorper. Quisque interdum fringilla ullamcorper. Quisque sit amet pellentesque nisi. Nunc sed suscipit dui.</Text>
        </View>
      </View>
    </View>
  );
};
