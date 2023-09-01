import Axios from "axios";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { styles } from "./styles";

const Home = () => {
	const [text, SetText] = useState("text");

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
				alignItems: "center",
				paddingTop: 100,
			}}
		>
			<Text>{text}</Text>
			<Button
				onPress={() => {
					Axios.get("http://192.168.1.3:3000/").then(function (response) {
						SetText(response.data);
					});
				}}
				title="Press Me"
			></Button>
		</View>
	);
};

export default Home;
