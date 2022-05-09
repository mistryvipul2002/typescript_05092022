const readline = require('node:readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: 'OHAI> '
});

rl.prompt();

var historySeq = 0, result = 0, historyItems: HistoryItem[] = [];

var supportedCommands = [
	{ op: "add", perform: (a: any, b: any) => a + b },
	{ op: "substract", perform: (a: any, b: any) => a - b },
	{ op: "multiply", perform: (a: any, b: any) => a * b },
	{ op: "divide", perform: (a: any, b: any) => a / b },
];

class HistoryItem {
	id: number;
	operand: string;
	value: number;

	constructor(operand: string, value: number) {
		this.id = historySeq++;
		this.operand = operand;
		this.value = value;
	}
}

rl.on('line', (line: string) => {
	var inputs = line.trim().split(" ");
	var op = inputs[0];
	var value = parseInt(inputs[1]);

	supportedCommands.forEach(supportedCommand => {
		if (supportedCommand.op == op) {
			result = supportedCommand.perform(result, value);
			console.log("Result = " + result);
			historyItems.push(new HistoryItem(op, value));
		}
	});

	if (op == "clear") {
		result = 0;
		historyItems = [];
	} else if (op == "history") {
		console.log(historyItems);
	} else if (op == "exit") {
		rl.close();
	}

	rl.prompt();
}).on('close', () => {
	console.log('Result=' + result);
	process.exit(0);
});