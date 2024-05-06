import React, { useMemo, useState } from 'react';
import { Text, ScrollView } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import SaveButton from '../components/SaveButton';
import { useDispatch, useSelector } from 'react-redux';
import { setOptions } from '../redux/optionSlice';
import styles from '../styles';

const SettingsScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const options = useSelector((state) => state.options.value);

    const [completed, setcompleted] = useState(options.completed);
    const [sortBy, setSortBy] = useState(options.sortBy);
    const [sortDirection, setSortDirection] = useState(options.sortDirection);

    const handleSave = () => {
        dispatch(setOptions({completed, sortBy, sortDirection}));
        navigation.goBack();
    };

    const filterRadioButtons = useMemo(() => ([
        {id: 'all', label: 'All'},
        {id: 'completed', label: 'Completed'},
        {id: 'incompleted', label: 'Incompleted'}
    ]), []);

    const sortByRadioButtons = useMemo(() => ([
        {id: 'dueDate', label: 'Due'},
        {id: 'createdDate', label: 'Created'},
    ]), []);

    const sortDateDirectionRadioButtons = useMemo(() => ([
        {id: 'ascending', label: 'Ascending'},
        {id: 'descending', label: 'Descending'},
    ]), []);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.optionTitle}>Filters</Text>
            <RadioGroup containerStyle={styles.radioGroup}
                radioButtons={filterRadioButtons} 
                onPress={setcompleted}
                selectedId={completed}
            />

            <Text style={styles.optionTitle}>Sort By</Text>
            <RadioGroup containerStyle={styles.radioGroup}
                radioButtons={sortByRadioButtons} 
                onPress={setSortBy}
                selectedId={sortBy}
            />

            <Text style={styles.optionTitle}>Sort Date Direction</Text>
            <RadioGroup containerStyle={styles.radioGroup}
                radioButtons={sortDateDirectionRadioButtons} 
                onPress={setSortDirection}
                selectedId={sortDirection}
            />

            <SaveButton handleSave={handleSave} />
        </ScrollView>
    );
};

export default SettingsScreen;
