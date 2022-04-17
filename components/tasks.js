import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Task = ({ taskItem, handleCompleteTask }) =>
{
    return (
        <View style={styles.task_container}>
            <View style={styles.leftBox}>
                <View style={styles.square}></View>
                <Text>{taskItem.title}</Text>
            </View>
            <TouchableOpacity onPress={() => handleCompleteTask(taskItem.id)}>
                <View style={styles.circle}></View>
            </TouchableOpacity>

        </View>
    );
}
const styles = StyleSheet.create({
    task_container: {
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 10,
        padding: 20,
        margin: 5,
    },
    leftBox: {
        maxWidth: "80%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    square: {
        width: 30,
        height: 30,
        backgroundColor: "#55BcF6",
        marginRight: 20,
        borderRadius: 5
    },
    circle: {
        width: 15,
        height: 15,
        borderRadius: 5,
        borderColor: "#55BcF6",
        borderWidth: 2,

    },
})
export default Task;