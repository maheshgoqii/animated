import colors from '@/constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Header({ loanAmount }: { loanAmount: number }) {
    return (
        <LinearGradient
            colors={[colors.primary, colors.primarylight]}
            locations={[0.4, 1]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <Text style={styles.title}>Approved Loan</Text>
            <View style={styles.amountWrapper}>
                <Text style={[styles.currency, { marginRight: 4 }]}>₹</Text>
                <Text style={styles.currency}>
                    {loanAmount.toLocaleString('en-IN')}
                </Text>
            </View>
        </LinearGradient >
    );
}

export default memo(Header);

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
        fontFamily: "RobotoMono_500Medium"
    },
    amountWrapper: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    currency: {
        color: '#fff',
        fontSize: 55,
        fontWeight: "bold"
    },
});
