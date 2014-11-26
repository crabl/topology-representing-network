"use strict";

var trn = (typeof exports === "undefined")? (function trn() {}): (exports);
if(typeof window !== "undefined") { window.trn = trn; }

trn.version = "1.0.0";

trn.zeros = function(rows, columns) {
	var matrix = [];
	for (var i = 0; i < rows; i++) {
		matrix[i] = new Array(columns);
		for (var j = 0; j < columns; j++) {
			matrix[i][j] = 0;
		}
	}

	return matrix;
};

trn.run = function(data, params) {
	// params: codebookSize, maxIterations, epsilon_i, epsilon_f, lambda_i, lambda_f, T_i, T_f
	var connections = trn.zeros(params.codebookSize);
	var dimensions = data[0].length;
};

var A = [[1,2,3],
		 [4,5,6],
		 [7,3,9]];

var x = [3,1,2];

console.log(numeric.dot(A, x))