import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
    },
    headerButton: {
        marginHorizontal: '15%',
    },
    optionTitle: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: '2%',
    },
    radioGroup: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingVertical: 8,
    },
    taskItemContainer: {
        padding: 10,
        paddingVertical: 15,
        marginVertical: 8,
        backgroundColor: '#dcdcdc',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    taskInfoContainer: {
        flex: 1,
        fontSize: 16,
        marginLeft: 20,
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    text: {
        marginBottom: 4,
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        marginHorizontal: 8,
    }
});

export const taskFormStyles = StyleSheet.create({
    calenderContainer: {
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#dcdcdc'
    },
    button: {
        width: 24,
        height: 24,
        position: 'absolute',
        top: 20,
        right: 10,
    },
    datePicker: {
        marginBottom: 20,
        borderRadius: 5,
    },
});