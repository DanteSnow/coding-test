const solution = num_list => num_list.length >= 11 ? num_list.reduce((a, b) => a + b) : num_list.reduce((a, b) => a * b);