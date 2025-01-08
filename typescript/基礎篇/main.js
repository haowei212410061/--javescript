/**
 * 型別註記
 */
var randomNumber = Math.random();
var myName = "john";
var subscribed = true;
/**
 * isPositive 檢查輸入值是否為正數
 * @param input:number 為輸入的數字
 * @output boolean
 */
function isPositive(input) {
    return input > 0;
}
/**
 * 將函數作為值 指派到變數內
 * "(input:number):boolean" Change to => "(input:number) => boolean"
 */
var isPositiveInVar = function (input) {
    return input > 0;
};
/**
 * 型別斷言語法判斷方式如下:
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
var isPOSITIVE1 = (function (input) { return input > 0; });
var isPOSITIVE2 = (function (input) { return input > 0; });
var isPOSITIVE3 = function (input) { return input > 0; };
var isPOSITIVE4 = function (input) { return input > 0; };



