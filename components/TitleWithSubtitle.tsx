import colors from '@/constants/colors';
import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

type Props = {
    title: string;
    subtitle?: string;
    style?: ViewStyle | ViewStyle[]; // 👈 optional custom style
};

export default function TitleWithSubtitle({ title, subtitle, style }: Props) {
    return (
        <View style={style}>
            <Text style={styles.title}>{title}</Text>
            {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>
    )
}


const styles = StyleSheet.create({
    title: {
        color: colors.primary,
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 4.5,
    },
    subtitle: {
        color: "#868686",
        fontSize: 14.5,
        fontWeight: '600',
    },
});
