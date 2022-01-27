import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { theme } from './colors';

export default function App() {
	const [workFocus, setWorkFocus] = useState(true);
	const [text, setText] = useState("");
	const work = () => setWorkFocus(true);
	const memo = () => setWorkFocus(false);

	const onChangeTest = (event) => setText(event);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
			<View style={styles.header}>
				<TouchableOpacity onPress={work}>
					<Text style={{...styles.btnText, color: workFocus ? "white" : theme.grey }}>Work</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={memo}>
					<Text style={{...styles.btnText, color: !workFocus ? "white" : theme.grey }}>Memo</Text>
				</TouchableOpacity>
			</View>
			<View>
				<TextInput
					onChangeText={onChangeTest}
					value={text}
					placeholder={ workFocus ? "Add your work schedules" : "Anything to note?" } 
					style={styles.input}
				/>
			</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
		paddingHorizontal: 20,
  },
	header: {
		justifyContent: "space-between",
		flexDirection: "row",
		marginTop: 100,
	},
	btnText: {
		fontSize: 38,
		fontWeight: "600",
	},
	input: {
		backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    fontSize: 18,
	}
});
