let string = "";
let memory = 0;  // ✅ Memory variable

let buttons = document.querySelectorAll('.button');
let input = document.querySelector('input');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value == '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }
        else if (value == 'C') {
            string = "";
            input.value = string;
        }
        // ✅ Memory Functions
        else if (value == 'M+') {
            memory += Number(input.value || 0);
        }
        else if (value == 'M-') {
            memory -= Number(input.value || 0);
        }
        else if (value == 'MC') {
            memory = 0;
        }
        else if (value == 'MR') {   // Optional: Recall memory
            string = memory.toString();
            input.value = string;
        }
        else {
            string = string + value;
            input.value = string;
        }
    })
});
