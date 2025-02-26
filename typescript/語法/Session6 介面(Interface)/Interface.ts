/**
 * InterFace:將一般複雜程序簡化成比較人性化的結果
 * 1. 著重描述任何物件或類別的規格 如同規格的制定
 * 2. 不包含實作過程與內容
 */

interface PersonalAccount  {
 name:string,
 age:number,
 interest:string[]
}

interface SocialLinks{
    facebook?:string
    twitter?:string
    linkedin:string
    website:({name:string,url:string})[]
}

//一個介面可以繼承多個介面
interface UsersAccount extends PersonalAccount ,SocialLinks{
    email:string
    password:string
    subscribed:boolean
}


/*
 * 1. 同一個介面重複地宣告 可以把兩個介面對應的屬性聯集起來 稱為介面的融合
 * 2. 如果先前有重複宣告過同個介面 就會啟動介面融合機制
 * 3. 同一個介面如果有重複宣告相同的屬性 該屬性的型別不能發生衝突 否則報錯
*/
interface faceA{
    name:string
    count:number
}

interface faceA{
    age:number
    classmate:string
}

/**函式超載性宣告:等同於方法重載的概念 同樣名稱的函式會因為對應的參數不同 而有所不同 先宣告其函式 在實現函式*/
/**
 * 1. 因為程式碼的參數是要使用複合型別的方式 比起超載式宣告 一條一條乾淨的寫法還要來的複雜
 * 2. 函式的實踐必須馬上接在宣告的後方
 * 3. 若是將函式超載式宣告在interface內部 就不用遵守第二點
 * @param input1 
 * @param input2 
 */
function safeAddition(input1:number,input2:number):number;
function safeAddition(input1:string,input2:string):number;

function safeAddition(input1:number|string,input2:number|string):number{
    const num1 = typeof input1 === 'number' ? input1 :parseInt(input1)
    const num2 = typeof input2 === 'number' ? input2 :parseInt(input2)
    return num1 + num2
}

//上述方法可以做成一個interface
interface Addition{
    (input1:number,input2:number):number
    (input1:string,input2:string):number
}

const MathOperationWithAddition:Addition = function(input1:number|string,input2:number|string):number{
    const num1 = typeof input1 === 'number' ? input1 :parseInt(input1)
    const num2 = typeof input2 === 'number' ? input2 :parseInt(input2)
    return num1 + num2
}


//interface介面宣告是用物件的方式 所以下方在實做Interface的時候 也是要用以下方式實踐
interface Introduction {
    sayHello(word:string):void
    description(name:string):string
}

const Max:Introduction = {
    sayHello:function(word:string):void{
        console.log("hello"+word)
    },
    description:function(name:string):string{
        return "my name is "+name  
    }
}


/**用類別實踐介面 */
/*
 1. 使用implements關鍵字
 2. 一個類別可以實踐(implements)多個介面(interface)
 3. 一個類別只能繼承(extends)一個父類別(parent class)
*/

class Classmate implements Introduction{

    public name;
    public age;
    constructor(name:string,age:number) {
        this.name = name
        this.age = age
    }

    public sayHello(word: string): void {
        console.log(`hello ${word}`)
    }

    public description(): string {
        return "my name is " + this.name + "my age is " + this.age
    }
}

const classMate1:Classmate = new Classmate("john",20)
classMate1.sayHello("hello")
classMate1.description();


/**Json物件作為函式參數 */
interface JsonObj  {
    name:string
    age:number
    interest:string[]
}

const student:JsonObj = {
    name:"max",
    age:20,
    interest:["video game"]
}

function PrintObj(obj:JsonObj):void{
    console.log({name:obj.name,age:obj.age,interest:obj.interest})
}
PrintObj({name:"john",age:20,interest:["basketball","baseball"]})
PrintObj(student)