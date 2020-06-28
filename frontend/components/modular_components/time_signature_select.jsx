import React, { useState } from 'react';
import { View, Text } from 'react-native';
import RegularTextInput from '../custom/regular_text_input';
import RegularText from '../custom/regular_text';
import RegularButton from '../custom/regular_button';

let TimeSignatureSelect = ({ addedTimes, setTimes }) => {
    const [numeratorValue, setNumerator] = useState(4);
    const [denominatorValue, setDenominator] = useState(4);

    const updateTimes = (timeString, add) => {
        if (!denominatorValue || !numeratorValue) return null;
        if (add) {
            setTimes({ [timeString]: timeString, ...addedTimes });
        } else {
            const newTimes = Object.assign({}, addedTimes)
            delete newTimes[timeString];
            setTimes(newTimes);
        }
    };

    const relativePowerOf2 = (num, int) => {
        num = num ? num : 1;
        const exp = Math.log2(num);
        const res = 2**(exp + int);
        handleChange('denominator', res.toString())();
    };

    const handleChange = (type, num) => {
        return e => {
            num = num ? num : e.currentTarget.value
            if (isNaN(parseInt(num.slice(-1))) && num !== '') return null;
            if (type === 'numerator') {
                if (num < 1) {
                    setNumerator('');
                } else {
                    setNumerator(parseInt(num));
                }
            } else {
                if (!parseInt(num)) return setDenominator('');
                const power = Math.log2(num);
                const isIntegralPowerOf2 = !(power - Math.floor(power));
                if (isIntegralPowerOf2) {
                    setDenominator(parseInt(num));
                } else {
                    null
                }
            }
        }
    };

    const numerator = () => (
        <View style={styles.numeratorDenominator}>
            <RegularTextInput
                value={numeratorValue}
                styles={styles}
                onChange={handleChange('numerator')}
            />
            <View >
                <RegularButton
                    text='+'
                    styles={styles}
                    onPress={handleChange('numerator', (numeratorValue + 1).toString())}
                />
                <RegularButton
                    text='-'
                    styles={styles}
                    onPress={handleChange('numerator', (numeratorValue - 1).toString())}
                />
            </View>
        </View>
    );

    const denominator = () => (
        <View style={styles.numeratorDenominator}>
            <RegularTextInput
                value={denominatorValue}
                styles={styles}
                onChange={handleChange('denominator')}
            />
            <View >
                <RegularButton
                    text='+'
                    styles={styles}
                    onPress={e => relativePowerOf2(denominatorValue, 1)}
                />
                <RegularButton
                    text='-'
                    styles={styles}
                    onPress={e => relativePowerOf2(denominatorValue, -1)}
                />
            </View>
        </View>
    );

    const addedTimesArray = Object.values(addedTimes);

    return(
        <View style={styles.container}>
            <RegularText styles={styles} text='Time signatures' />
            <View style={styles.fractionAndButtonContainer}>
                <View style={styles.fractionContainer}>
                    {numerator()}
                    <View style={styles.fractionBar}></View>
                    {denominator()}
                </View>
                <RegularButton 
                    text='Add' 
                    onPress={e => updateTimes(`${numeratorValue}/${denominatorValue}`, true)}
                />
            </View>
            {addedTimesArray.length ? 
            <View style={styles.addedTagsContainer}>
                {addedTimesArray.map(time => 
                    <Text style={styles.addedTagsText} key={time}>
                        <Text onPress={e => updateTimes(time, false)}>X </Text> {time}
                    </Text>
                )}
            </View> : null}
        </View>
    );
};

const styles = {
    container: {
        marginTop: 10,
    },
    fractionAndButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    fractionContainer: {
        width: 'fit-content',
        marginRight: 10,
    },
    numeratorDenominator: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    regular_text_input: {
        textAlign: 'center',
        marginRight: 10,
        width: 220,
    },
    regular_text: {
        marginRight: 10,
        marginBottom: 10,
    },
    fractionBar: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginTop: 10,
        marginBottom: 10,
    },
    regular_button_container: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 1,
        paddingBottom: 1,
        width: '100%'
    },
    addedTagsContainer: {
        display: 'block',
        zIndex: -1,
        marginTop: 10,
    },
    addedTagsText: {
        color: 'white',
        border: '1px solid white',
        borderRadius: 20,
        paddingTop: 7,
        paddingBottom: 7,
        paddingRight: 10,
        paddingLeft: 10,
        margin: 2,
        alignItems: 'center',
        width: 'fit-content',
        float: 'left',
    },
};

export default TimeSignatureSelect;