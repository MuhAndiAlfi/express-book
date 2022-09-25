TEST 1

var string = "NEGIE1"
var storeNumber = []
var storeString = []

// step 1: pisah huruf dengan angka
for (const i of string){
    if(isNaN(i)){
        storeString.push(i)
        
    }else{
        storeNumber.push(i)
        
    }
}

// step 2: reverse
storeString = [...storeString.reverse()]

// step 3: join
storeString.push(storeNumber)
var res = storeString.join('')
console.log(res)

// TEST 2
const sentence = "Saya sangat senang mengerjakan soal algoritma"

longest(sentence)

function longest(sentence){
    
    var length = 0
    var word = ""
    var words = sentence.split(' ')
    for (const i of words){
        if(i.length > length){
            length = i.length
            word = i
        }
    }

    console.log(word + length +" character")

}


// TEST 3

var INPUT = ['xc', 'dz', 'bbb', 'dz']  
var QUERY = ['bbb', 'ac', 'dz'] 
var OUTPUT = []

for (const i of QUERY){
    var sum = 0
    for(const e of INPUT){
        if(i==e){
            sum++
        }
    }
    OUTPUT.push(sum)
}

console.log(OUTPUT)

TEST 4



