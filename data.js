"use strict";

var items = {
	//A1
	A1_1_1: {level: "A1", correctAnswer: "kommt", points: 0.2},
	A1_1_2: {level: "A1", correctAnswer: "kommt", points: 0.2},
	A1_1_3: {level: "A1", correctAnswer: "wohnen", points: 0.2},
	A1_1_4: {level: "A1", correctAnswer: "lernen", points: 0.2},
	A1_1_5: {level: "A1", correctAnswer: "schreibt", points: 0.2},
	A1_1_6: {level: "A1", correctAnswer: "lernt", points: 0.2},
	A1_1_7: {level: "A1", correctAnswer: "gehen", points: 0.2},
	A1_1_8: {level: "A1", correctAnswer: "hört", points: 0.2},
	A1_1_9: {level: "A1", correctAnswer: "hört", points: 0.2},
	A1_1_10: {level: "A1", correctAnswer: "denkt", points: 0.2},

	A1_2_4: {level: "A1", points: 1},

	A1_3_1: {level: "A1", correctAnswer: "nicht", points: 0.25},
	A1_3_2: {level: "A1", correctAnswer: "keine", points: 0.25},
	A1_3_3: {level: "A1", correctAnswer: "keinen", points: 0.25},
	A1_3_4: {level: "A1", correctAnswer: "nicht", points: 0.25},

	A1_4_1: {level: "A1", correctAnswer: "Wo", points: 0.4},
	A1_4_2: {level: "A1", correctAnswer: "Wie", points: 0.4},
	A1_4_3: {level: "A1", correctAnswer: "Was", points: 0.4},
	A1_4_6: {level: "A1", correctAnswer: "Wer", points: 0.4},
	A1_4_7: {level: "A1", correctAnswer: "Wann", points: 0.4},

	A1_5_1: {level: "A1", points: 1},
	A1_5_4: {level: "A1", points: 1},

	A1_6_2: {level: "A1", points: 0.5},
	A1_6_3: {level: "A1", points: 0.5},

	A1_7_2: {level: "A1", points: 1},
	A1_7_5: {level: "A1", points: 1},
	A1_7_8: {level: "A1", points: 1},

	A1_8_1: {level: "A1", correctAnswer: "einen", points: 0.5},
	A1_8_2: {level: "A1", correctAnswer: "einen", points: 0.5},
	A1_8_3: {level: "A1", correctAnswer: "Der", points: 0.5},
	A1_8_4: {level: "A1", correctAnswer: "der", points: 0.5},
	A1_8_5: {level: "A1", correctAnswer: "einen", points: 0.5},
	A1_8_6: {level: "A1", correctAnswer: "einen", points: 0.5},
	A1_8_7: {level: "A1", correctAnswer: "Der", points: 0.5},
	A1_8_8: {level: "A1", correctAnswer: "der", points: 0.5},
	A1_8_9: {level: "A1", correctAnswer : "ein", points: 0.5},
	A1_8_10: {level: "A1", correctAnswer: "Ein", points: 0.5},

	A1_9_1: {level: "A1", correctAnswer: "toll", points: 1},
	A1_9_2: {level: "A1", correctAnswer: "fantastisch", points: 1},
	A1_9_3: {level: "A1", correctAnswer: "freundlich", points: 1},
	A1_9_4: {level: "A1", correctAnswer: "schön", points: 1},
	A1_9_5: {level: "A1", correctAnswer: "teuer", points: 1},

	//A2
	A2_1_1: {level: "A2", correctAnswer: "denn", points: 0.5},
	A2_1_2: {level: "A2", correctAnswer: "aber", points: 0.5},
	A2_1_3: {level: "A2", correctAnswer: "und", points: 0.5},
	A2_1_4: {level: "A2", correctAnswer: "oder", points: 0.5},

	A2_2_2: {level: "A2", points: 1},

	A2_3_4: {level: "A2", points: 1},

	A2_4_1: {level: "A2", correctAnswer: "großen", points: 0.5},
	A2_4_2: {level: "A2", correctAnswer: "kleinen", points: 0.5},
	A2_4_3: {level: "A2", correctAnswer: "kleine", points: 1},
	A2_4_4: {level: "A2", correctAnswer: "jung", points: 1},
	A2_4_5: {level: "A2", correctAnswer: "aktiver", points: 1},

	A2_5_1: {level: "A2", correctAnswer: "meinen", points: 1},
	A2_5_2: {level: "A2", correctAnswer: "dem", points: 1},
	A2_5_3: {level: "A2", correctAnswer: "den", points: 1},

	A2_6_1: {level: "A2", points: 1},

	A2_7_2: {level: "A2", points: 1},

	A2_8_1: {level: "A2", correctAnswer: "aus", points: 0.4},
	A2_8_2: {level: "A2", correctAnswer: "für", points: 0.4},
	A2_8_3: {level: "A2", correctAnswer: "im", points: 0.4},
	A2_8_4: {level: "A2", correctAnswer: "am", points: 0.4},
	A2_8_5: {level: "A2", correctAnswer: "um", points: 0.4},

	A2_9_2: {level: "A2", points: 1},
	A2_9_6: {level: "A2", points: 1},
	A2_9_8: {level: "A2", points: 1},
	A2_9_10: {level: "A2", points: 1},
	A2_9_15: {level: "A2", points: 1},

	A2_10_1: {level: "A2", points: 0.5},
	A2_10_4: {level: "A2", points: 0.5},
	A2_10_6: {level: "A2", points: 0.5},
	A2_10_7: {level: "A2", points: 0.5},
	A2_10_10: {level: "A2", points: 0.5},
	A2_10_12: {level: "A2", points: 0.5},

	A2_11_1: {level: "A2", correctAnswer: "der", points: 0.25},
	A2_11_2: {level: "A2", correctAnswer: "dem", points: 0.25},
	A2_11_3: {level: "A2", correctAnswer: "den", points: 0.25},
	A2_11_4: {level: "A2", correctAnswer: "Den", points: 0.25},

	A2_12_3: {level: "A2", points: 1},
	A2_12_4: {level: "A2", points: 1},

	//B1
	B1_1_1: {level: "B1", correctAnswer: "dir", points: 1},
	B1_1_2: {level: "B1", correctAnswer: "beschäftigt", points: 1},
	B1_1_3: {level: "B1 ", correctAnswer: "entschieden", points: 1},
	B1_1_4: {level: "B1", correctAnswer: "entspannend", points: 1},
	B1_1_5: {level: "B1", correctAnswer: "trotzdem", points: 1},
	B1_1_6: {level: "B1", correctAnswer: "bin", points: 1},
	B1_1_7: {level: "B1", correctAnswer: "Möbel", points: 1},
	B1_1_8: {level: "B1", correctAnswer: "besuchen", points: 1},

	B1_2: {level: "B1", correctAnswer: "ob", points: 1},

	B1_3_1: {level: "B1", correctAnswer: "Lücke 5", points: 1},
	B1_3_2: {level: "B1", correctAnswer: "Lücke 2", points: 1},
	B1_3_3: {level: "B1", correctAnswer: "Lücke 1", points: 1},
	B1_3_4: {level: "B1", correctAnswer: "Lücke 4", points: 1},
	B1_3_5: {level: "B1", correctAnswer: "Lücke 3", points: 1},

	B1_4_1: {level: "B1", correctAnswer: "Als", points: 1},
	B1_4_2: {level: "B1", correctAnswer: "wenn", points: 1},
	B1_4_6: {level: "B1", correctAnswer: "Wann", points: 1},
	B1_4_7: {level: "B1", correctAnswer: "wenn", points: 1},

	B1_5_1: {level: "B1", correctAnswer: "wärmer als", points: 0.5},
	B1_5_2: {level: "B1", correctAnswer: "kälter als", points: 0.5},
	B1_5_3: {level: "B1", correctAnswer: "niedrigsten", points: 0.5},
	B1_5_4: {level: "B1", correctAnswer: "heißer als", points: 0.5},

	B1_6_1: {level: "B1", correctAnswer: "habe", points: 0.4},
	B1_6_2: {level: "B1", correctAnswer: "bin", points: 0.4},
	B1_6_3: {level: "B1", correctAnswer: "sind", points: 0.4},
	B1_6_4: {level: "B1", correctAnswer: "ist", points: 0.4},
	B1_6_5: {level: "B1", correctAnswer: "habe", points: 0.4},
	B1_6_6: {level: "B1", correctAnswer: "sind", points: 0.4},
	B1_6_7: {level: "B1", correctAnswer: "haben", points: 0.4},
	B1_6_8: {level: "B1", correctAnswer: "haben", points: 0.4},
	B1_6_9: {level: "B1", correctAnswer: "sind", points: 0.4},
	B1_6_10: {level: "B1", correctAnswer: "ist", points: 0.4},

	B1_7_1: {level: "B1", correctAnswer: "konnte", points: 0.5},
	B1_7_2: {level: "B1", correctAnswer: "kannte", points: 0.5},
	B1_7_3: {level: "B1", correctAnswer: "könnten", points: 0.5},
	B1_7_4: {level: "B1", correctAnswer: "kenne", points: 0.5},

	//B2
	B2_1_1: {level: "B2", points: 1},

	B2_2_4: {level: "B2", points: 1},

	B2_3_2: {level: "B2", points: 1},

	B2_4_1: {level: "B2", correctAnswer: "außer", points: 1},
	B2_4_2: {level: "B2", correctAnswer: "dass", points: 1},
	B2_4_3: {level: "B2", correctAnswer: "Außerdem", points: 1},
	B2_4_4: {level: "B2", correctAnswer: "an", points: 1},
	B2_4_5: {level: "B2", correctAnswer: "beachten", points: 1},
	B2_4_6: {level: "B2", correctAnswer: "darauf", points: 1},
	B2_4_7: {level: "B2", correctAnswer: "Verständnis", points: 1},

	B2_5_1: {level: "B2", correctAnswer: "zu werden", points: 0.5},
	B2_5_2: {level: "B2", correctAnswer: "zu rauchen", points: 0.5},
	B2_5_3: {level: "B2", correctAnswer: "zu betreiben", points: 0.5},
	B2_5_4: {level: "B2", correctAnswer: "aufzugeben", points: 0.5},
	B2_5_5: {level: "B2", correctAnswer: "unterstützen", points: 0.5},
	B2_5_6: {level: "B2", correctAnswer: "schaffen", points: 0.5},

	B2_6_4: {level: "B2", points: 1},

	B2_7_2: {level: "B2", points: 1},

	B2_8_4: {level: "B2", points: 1},

	B2_9_1: {level: "B2", correctAnswer: "wird", points: 0.25},
	B2_9_2: {level: "B2", correctAnswer: "ist", points: 0.25},
	B2_9_3: {level: "B2", correctAnswer: "wird", points: 0.25},
	B2_9_4: {level: "B2", correctAnswer: "soll", points: 0.25},

	B2_10_2: {level: "B2", points: 1},

	B2_11_2: {level: "B2", points: 2},
	B2_11_7: {level: "B2", points: 2},

	//C1
	C1_1_1: {level: "C1", correctAnswer: "eingeladenen", points: 0.5},
	C1_1_3: {level: "C1", correctAnswer: "relevanten", points: 0.5},
	C1_1_4: {level: "C1", correctAnswer: "aktuellen", points: 0.5},
	C1_1_5: {level: "C1", correctAnswer: "unterschiedlicher", points: 0.5},
	C1_1_7: {level: "C1", correctAnswer: "dauernden", points: 0.5},
	C1_1_8: {level: "C1", correctAnswer: "Anwesenden", points: 0.5},

	C1_2_1: {level: "C1", correctAnswer: "anbringen", points: 1},
	C1_2_2: {level: "C1", correctAnswer: "beibringen", points: 1},
	C1_2_3: {level: "C1", correctAnswer: "nachbringen", points: 1},
	C1_2_4: {level: "C1", correctAnswer: "abbringen", points: 1},
	C1_2_5: {level: "C1", correctAnswer: "unterbringen", points: 1},

	C1_3_2: {level: "C1", points: 0.5},
	C1_3_7: {level: "C1", points: 0.5},
	C1_3_11: {level: "C1", points: 0.5},
	C1_3_20: {level: "C1", points: 0.5},

	C1_4_2: {level: "C1", points: 1},

	// C1_5 => text-inputs
	C1_5_1: {level: "C1", correctAnswer: ["ihre"], points: 1}, // would be 'Ihre' but must be lower-case here
	C1_5_2: {level: "C1", correctAnswer: ["schicke"], points: 1},
	C1_5_3: {level: "C1", correctAnswer: ["der"], points: 1},
	C1_5_4: {level: "C1", correctAnswer: ["korrekt", ""], points: 1},
	C1_5_5: {level: "C1", correctAnswer: ["zögern"], points: 1},
	C1_5_6: {level: "C1", correctAnswer: ["zu", "zu setzen"], points: 1},

	C1_6_1: {level: "C1", correctAnswer: "geht", points: 0.5},
	C1_6_2: {level: "C1", correctAnswer: "halten", points: 0.5},
	C1_6_3: {level: "C1", correctAnswer: "fällen", points: 0.5},
	C1_6_4: {level: "C1", correctAnswer: "fallen", points: 0.5},

	C1_7_1: {level: "C1", correctAnswer: "ja", points: 0.25},
	C1_7_2: {level: "C1", correctAnswer: "halt", points: 0.25},
	C1_7_3: {level: "C1", correctAnswer: "denn", points: 0.25},
	C1_7_4: {level: "C1", correctAnswer: "ja", points: 0.25},
};

var modules = {
	//test
	Test1: {
		id: "Test1",
		ranges: [
			{from:0, to: 100, target: "Test2"}
		],
		exercises: [
			"A1_6",
			"B2_11",
			"C1_5"
		]
	},

	Test2: {
		id: "Test2",
		results: {yes: "yes"},
		exercises: [
			"A2_2",
			"A2_9"
		]
	},

	//start
	Start1: {
		id: "Start1",
		ranges: [
			{from: 0, to: 6, target: "A1B1", itemCount: -12},
			{from: 6.1, to: 12, target: "Start2"}
		],
		exercises: [
			"A1_1",
			"A1_2",
			"A1_3",
			"A2_1",
			"A2_2",
			"A2_7",
			"B1_5",
			"B1_7",
		]
	},
	Start2: {
		id: "Start2",
		ranges: [
			{from: 0, to: 4, target: "A1B1"},
			{from: 4.1, to: 8, target: "A2B2"},
			{from: 8.1, to: 12, target: "B1C1"}
		],
		exercises: [
			"A2_3",
			"A2_6",
			"A2_8",
			"B1_6",
			"B2_2",
			"B2_3",
			"B2_6",
			"B2_7"
		]
	},
	//tier 1
	A1B1: {
		id: "A1B1",
		ranges: [
			{from: 0, to: 13, target: "A1A2"},
			{from: 13.1, to: 24, target: "A2B1"},
			{from: 24.1, to: 27, target: "B1B2"}
		],
		exercises: [
			"A1_4",
			"A1_5",
			"A1_8",
			"A2_9",
			"A2_10",
			"A2_11",
			"B1_3",
			"B1_4"
		]

	},
	A2B2: {
		id: "A2B2",
		ranges: [
			{from: 0, to: 7, target: "A1A2"},
			{from: 7.1, to: 14, target: "A2B1"},
			{from: 14.1, to: 24, target: "B1B2"},
			{from: 24.1, to: 27, target: "B2C1"}
		],
		exercises: [
			"A2_9",
			"A2_10",
			"A2_11",
			"B1_3",
			"B1_4",
			"B2_1",
			"B2_4",
			"B2_10"
		]

	},
	B1C1: {
		id: "B1C1",
		ranges: [
			{from: 0, to: 7, target: "A2B1"},
			{from: 7.1, to: 16, target: "B1B2"},
			{from: 16.1, to: 27, target: "B2C1"}
		],
		exercises: [
			"B1_3",
			"B1_4",
			"B2_1",
			"B2_4",
			"B2_10",
			"C1_2",
			"C1_3",
			"C1_4",
			"C1_7"
		]

	},
	//tier 2
	A1A2: {
		id: "A1A2",
		exercises: [
			"A1_6",
			"A1_7",
			"A1_9",
			"A2_4",
			"A2_5",
			"A2_12"
		],
		results: [
			{zero: "Basis"},
			{lower: "A1"},
			{higher: "A2"}
		]
	},
	A2B1: {
		id: "A2B1",
		exercises: [
			"A2_4",
			"A2_5",
			"A2_12",
			"B1_1",
			"B1_2"
		],
		results: [
			{zero: "A1"},
			{lower: "A2"},
			{higher: "B1"}
		]
	},
	B1B2: {
		id: "B1B2",
		exercises: [
			"B1_1",
			"B1_2",
			"B2_5",
			"B2_8",
			"B2_9",
			"B2_11"
		],
		results: [
			{zero: "A2"},
			{lower: "B1"},
			{higher: "B2"}
		]
	},
	B2C1: {
		id: "B2C1",
		exercises: [
			"B2_5",
			"B2_8",
			"B2_9",
			"B2_11",
			"C1_1",
			"C1_5"
		],
		results: [
			{zero: "B1"},
			{lower: "B2"},
			{higher: "C1"}
		]
	}

};

var exercisePoints = {
	A1_1: 2,
	A1_2: 1,
	A1_3: 1,
	A1_4: 2,
	A1_5: 2,
	A1_6: 1,
	A1_7: 3,
	A1_8: 5,
	A1_9: 5,
	A2_1: 2,
	A2_2: 1,
	A2_3: 1,
	A2_4: 4,
	A2_5: 3,
	A2_6: 1,
	A2_7: 1,
	A2_8: 2,
	A2_9: 5,
	A2_10: 3,
	A2_11: 1,
	A2_12: 2,
	B1_1: 8,
	B1_2: 1,
	B1_3: 5,
	B1_4: 4,
	B1_5: 2,
	B1_6: 4,
	B1_7: 2,
	B2_1: 1,
	B2_2: 1,
	B2_3: 1,
	B2_4: 7,
	B2_5: 3,
	B2_6: 1,
	B2_7: 1,
	B2_8: 1,
	B2_9: 1,
	B2_10: 1,
	B2_11: 4,
	C1_1: 3,
	C1_2: 5,
	C1_3: 2,
	C1_4: 1,
	C1_5: 6,
	C1_6: 2,
	C1_7: 1
};