/**宣告簡單的泛用型別化名 */
/**
 * 1. 其中T為型別變數(type Paramter)可以套用各種的型別
 * 2. 用於推論未來情境的泛用型別
 * 3. 函式宣告時的參數 可以藉由型別參數提供的資訊 間接推論出宣告的函式之參數型別值
 * 4. 泛用型別化名的宣告:
 */
type Ideneity<T> = T;
let num:Ideneity<number> = 20;
let str:Ideneity<string> = "hello world"


/**泛用基礎型別 */
type TypedArray<T> = T[]
type TypedTuple<T> = [T,T] //泛用元組型別
type Either<T,U> = T | U
type And<T,U> = T & U
type Obj<U> = {prop:U}//Json物件
type Dictionary<T> = {[key:string]:T} //Json之可控索引型別
let numberArr:Array<number> = [1,1,1,1,1]
let NUMBERARRAY:number[] = [1,1,1,1,1]

/**函式泛用型別 */
/**
 * 該型別化名的參數有兩個:T and U
 * 分別接收兩種不同的型別作為型別變數
 * 
 */
type TypeConversion<T,U> = (input:T) => U;
let numFunc:TypeConversion<number,string> = 
    function(input:number):string {
        return input.toString();
    }

let strFunc:TypeConversion<string,boolean> = function(input:string):boolean{
    return input.length > 10  
};

/**上面這兩種宣告函數的方法等於下方這兩種 */
let Numfunc:(input:number) => string
let Strfunc:(input:string) => boolean

/**泛用類型的宣告 */
/**
 * 1. 以下的TypedArrayWithClass類別具備一個型別變數T
 * 2. 該類別內部的成員也可以使用該型別參數
 */
class TypedArrayWithClass<T>{
    constructor(public element:T[]){

    }

    public at(index:number):T{
        return this.element[index]
    }

    public map(func:(input:T)=>T):TypedArrayWithClass<T>{
        const result = new TypedArrayWithClass<T>([]);
        for(let i = 0 ; i < this.element.length ; i++){
            const current = this.at(i);
            const mappedResult = func(current);
            result.element.push(mappedResult)
        }
        return result
    }
}

/*
 若建構型別為TypedArrayWithClass<number>的實體
 1. 構造函數內的參數element = number[]
 2. at方法對應為 at(index:number):number
 3. map方法對應為 map(func:(input:number)=>number):TypedArrayWithClass<number>
*/

let numberArray = new TypedArrayWithClass<number>([1,2,3,4,5])
numberArray.at(3);
numberArray.map(function(x){
    return x * 2
}).element //將陣列內部的元素都乘以2並且創建一個新的TypedArrayWithClass<number>的實體

//子類繼承父類 該父類必須指定型別
class chilNumArr extends TypedArrayWithClass<number>{}
class chilnumArr<T> extends TypedArrayWithClass<T>{}
class chilNumarr<T> extends TypedArrayWithClass<number>{}


/**泛用介面 */
interface GenericInterface<T>{
    element:Array<T>,
    at(index:number):T
    map(func:(input:T)=>T):T[]
    mapToType<U>(func:(input:T)=>U):U[]
}


class C implements GenericInterface<number>{
    element: number[];
    at(index: number): number {
        return 0
    }
    map(func: (input: number) => number): number[] {
        return this.element.map(func)
    }
    mapToType<U>(func:(input:number)=>U):U[]{
        return this.element.map(func)
    }
}

/**型別參數額外功能:預設型別參數 */
type Diction<T = string> = {[key:string]:string}
type StringDiction = Diction<string>
type NumberDiction = Diction<number>
type NullDiction = Diction //預設型別會是string

type NonNull = number | string | boolean
type Dic<T extends NonNull> = {[key:string]:T}
type obj1 = Dic<string>
type obj2 = Dic<number>
const obje:obj2 = {props:2};