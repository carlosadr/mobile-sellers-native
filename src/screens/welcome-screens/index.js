import React from 'react';
import ViewPager from '@react-native-community/viewpager'

import styles from './styles';
import WelcomeFristScreen from './welcome-frist';
import WelcomeLastScreen from './welcome-last';

export default function WelcomeScreen () {
    return(
        <ViewPager style={styles.viewPager} initialPage={0}>
            <WelcomeFristScreen key="1"/>
            <WelcomeLastScreen key="2"/>
        </ViewPager>
    )
}