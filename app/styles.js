// styles.js
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	board: {
		flexDirection: "row",
		flexWrap: "wrap",
		width: 320,
		height: 320,
	},
	cell: {
		width: 40,
		height: 40,
	},
	whiteCell: {
		backgroundColor: "white",
	},
	blackCell: {
		backgroundColor: "black",
	},
});
