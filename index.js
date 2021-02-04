// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(moanday = "go to the office") {
    return `This Monday, I will ${moanday}.`;
}

function wrapAdjective(remote = `*`) {
    return function(battery = `special`) {
        return `You are ${remote}${battery}${remote}!`
    }
}

const Calculator = {
    add: function(a, b){
        return a + b
    },
    subtract: function(a, b){
        return a - b
    },
    multiply: function(a, b){
        return a * b
    },
    divide: function(a, b){
        return a / b
    }
}

function actionApplyer(int, arr) {
    let x = int
    
    for (let i = 0; i < arr.length; i++){
        x = arr[i](x)
    }
    return x
}