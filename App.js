import { Button, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import Task from './components/tasks.js';
import { useState } from 'react';

export default function App()
{
  const id = new Date().getTime();
  const [tasks, setTasks] = useState([
    {
      title: "Go to Gym",
      id: 1,
      completed: false,
    },
    {
      title: "Finish my work",
      id: 10,
      completed: false,
    },
  ]);
  const [inputText, setInputText] = useState('');
  const handleAddTask = () =>
  {
    const currentTask = {
      title: inputText,
      id: id,
      completed: false,
    };
    if (inputText) setTasks(tasks => [...tasks, currentTask]);
    setInputText('');
    Keyboard.dismiss();
  };
  const handleCompleteTask = (id) =>
  {
    if (tasks.length > 1) setTasks(tasks => [...tasks.filter(item => item.id !== id)]);
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Today's tasks</Text>
        {/* Todos Tasks */}
        <ScrollView contentContainerStyle={styles.tasks_container} scrollEnabled={true}>
          {tasks.map(item => (
            <Task taskItem={item} key={item.id} handleCompleteTask={handleCompleteTask} />
          ))}
        </ScrollView>
      </View>
      <KeyboardAvoidingView style={styles.input_container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TextInput placeholder='Insert New Todo....' style={styles.textInput} value={inputText} onChangeText={(text) => setInputText(text)} />
        <View style={styles.button}>
          <Button title='Add' onPress={handleAddTask} />
        </View>
      </KeyboardAvoidingView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
  },
  header: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
    margin: 30,

  },
  tasks_container: {
    width: "100%",
    display: "flex",
    height: "70%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 15,
    flexGrow: 1,


  },
  input_container: {
    position: "absolute",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    bottom: 40,

  },
  textInput: {
    width: "80%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 15,

  },
  button: {
    height: 50,
    width: 50,
  }

});
