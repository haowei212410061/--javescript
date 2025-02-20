

/**
 * 將函數作為值 指派到變數內
 * 參數的型別不可以被改變 但是可以透過聲明變數 轉換該參數的型別 只要不改變參數的原型別 都是可以被允許的
 * "(input:number):boolean" Change to => "(input:number) => boolean"
 */
let ex1:(x:number,y:string)=>string = function(x,y){
    return x.toString().concat(y)
}

var isPositiveInVar :(input:number) => boolean = function(input){
    return input > 0
}

/**
 * 型別斷言(Assertion)語法判斷方式如下:
 * 1. 有看到使用as關鍵字
 * 2. 或者使用<T>的格式
 * 3. 斷言的語法只能用在表達式上 因為表達式有回傳值
 * 4. 可以理解為"斷言該表達式所運算結果之代表型別"
 * 使用情境:
 * 程式沒辦法推論(inference)某表達式(expression)的確切運算結果之型別
 * 但是我們在使用的時候已經知道這個expression絕對會回傳某個型別 那就先用斷言告訴程式 這個expression會回傳的型別
 * ex: const aNumber = returnsUnknown() as number;
 * 
 * 斷言表達式為某個型別
 * ex1: <expression> as T
 * ex2: <T>(<expression>)
*/

//函式的宣告表達式也可以被斷言
var isPOSITIVE1 = (input => input > 0) as (input:number) => boolean;
var isPOSITIVE2 = <(input:number) => boolean>(input => input > 0)
var isPOSITIVE3: (input:number)=> boolean = input => input > 0;
var isPOSITIVE4 = (input:number):boolean => input > 0;


/**表達式使用斷言型別 */
//運算表達式
let foo:number = 34
let bar:number = 35
let baz:number = 36
let myAge:number = 17
const result = (foo + bar * baz) as number;
<number>(foo+bar*baz)



//函式或方法的呼叫
Math.pow(2,10) as number


//邏輯表達式
(myAge < 18 ? "youngster":"adult")as string


//立即呼叫函式表達式IIFE
(function(x,y){
    return x+y
})(1,2) as number


/**
 * 註記 vs 斷言
 * 1. 註記是告訴編譯器 任何被註記到的變數,函數的參數..等等都必須"遵照"被註記過後的變數型別
 * 2. 斷言是果斷地告訴編譯器 我這個表達式是要哪個型別number,string,boolean....等等
 * 3. 被斷言過後的表達式之運算結果就是某一種型別 理解為"覆蓋"
 */

/**
 * 明文型別:
 * 明文的定義:值(value)的表現方式
 */


/**
 * 在javascript中 任何非原始型別的資料 都是屬於物件的範疇
 */


//物件型別
const info:{
    name:string,
    age:number,
    interest:string[]
} = {
    name:'john',
    age:34,
    interest:['drawing','programming']
}


//類別創建的實體 使用型別化名
const today:Date = new Date('2025-01-06')

/**
 * 泛型:型別自身參數化後表現出來的特殊型別
 * 1. 輸入echo函式的參數若為型別T 輸出的型別必須等於輸入的值之型別T
 */

function echo<T>(something:T):T{
    return something
}

//交集型別:數字又或是字串
let numOrString:number|string

//聯集型別:數字也是字串
let numOrString1:number&string


  