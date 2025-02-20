/**宣告元組：
 * 特性1:無法經由推論而來
 * 特性2:元組中的元素個數限制以及固定的對應型別順序
 * 特性3:在中括號中指派元素的型別
*/
/**元組中的元素數量是固定的 */
/**順序很重要 */
const tuple:(number|string|boolean) [] = [1, "hello", true];
const tup:[boolean,string,object] = [true,"str",{obj:"isObject",str:"str"}]
/**可選的元組
 * 问号(?)后缀指定可选的元素
 */
/*==========================================================================*/

/**
 * enum枚舉類型:一組命名的常量值
 * 定義枚舉：
 * 1. 使用enum關鍵字 後跟著枚舉的名稱
 * 2. 為枚舉定義常量值
 * enum name {constant1,constant2}
 * 3. 列舉型別再宣告時 預設為數字型列舉型別(Numeric Enum type)
 * 4. 如果沒有給列舉型別對應的值 內部的值是從0開始遞增
 * 5. 列舉型別的可以修改其對應的值
 * 6. 列舉內部的值是可以重複的
 * 7. 列舉內部如果前一個成員的對應值是字串 後一個成員就必須指定值 而不會是預設值
 * 8. 若列舉內部的對應值出現一種以上的資料類型(string and number) 被稱作異質行列舉型別
 * 9. 列舉內部的對應值只可以是string and number兩種類型
 * 
 *
 * 使用枚舉的時機：
 * 1. 有一組密切相關的固定值
 * 2. 而且這些值在編譯時就已經知道了
 *
 * 總結：
 * 1. 在內部 枚舉是一個javascript對象 在枚舉定義中聲明了命名屬性
 * 2. 有一組密切相關的固定值
 */
/**範例:修改列舉內的數值 */
enum Color{
    red = "red",
    yellow = "yellow",
    blue = "blue"
  }
  
  /**列舉內部的值是可以重複的 */
  enum ClassNum{
    class_john = 1,
    class_amy = 1,
    class3_howard = 1
  }
  
  
  /**範例 */
  enum Month {
    jan,
    feb,
    mar,
    apr,
    may,
    jun,
    jul,
    aug,
    sep,
    oct,
    nov,
    dec,
  }
  /**聲明一個使用Ｍonth枚舉作為month參數類型的函數 */
  function isItSummer(month: Month) {
    //該函數的參數是Month枚舉
    let isSummer: boolean;
    switch (month) {
      case Month.jun:
      case Month.jul:
      case Month.aug:
        isSummer = true;
        break;
      default:
        isSummer = false;
        break;
    }
    return isSummer;
  }
  
  /**向函數傳遞一個數字參數 而不是用Month枚舉 可以正確執行 */
  var Month1;
  (function (Month1) {
    Month1[(Month["Jan"] = 0)] = "Jan";
    Month1[(Month["Feb"] = 1)] = "Feb";
    Month1[(Month["Mar"] = 2)] = "Mar";
    Month1[(Month["Apr"] = 3)] = "Apr";
    Month1[(Month["May"] = 4)] = "May";
    Month1[(Month["Jun"] = 5)] = "Jun";
    Month1[(Month["Jul"] = 6)] = "Jul";
    Month1[(Month["Aug"] = 7)] = "Aug";
    Month1[(Month["Sep"] = 8)] = "Sep";
    Month1[(Month["Oct"] = 9)] = "Oct";
    Month1[(Month["Nov"] = 10)] = "Nov";
    Month1[(Month["Dec"] = 11)] = "Dec";
  })(Month1 || (Month1 = {})); //若未定義Month枚舉 則會將Month1初始化為空對象 為枚舉建立一個新的空間
  
  /**範例2: 為審批狀態使用一個枚舉 */
  enum AppeovalStatus {
    draft = "draft",
    submitted = "submitted",
    approved = "approved",
    rejected = "rejected",
  }
  
  const request = {
    id: 1,
    name: "jon",
    status: AppeovalStatus.draft,
    description: "Please approve this request",
  };
  
  if (request.status === AppeovalStatus.approved) {
    console.log("Send eamil to the applicant....");
  }
/**=========================================================== */ 

/**可控索引型別 Indexable type */
/**
 * 1. 可以控制JSON物件的鍵(key) 也就是索引(index)對應的型別
 * 2. 使用情境會是想要控制開發者可以任意新增JSON物件的屬性並限制其值的型別
 * 3. 可控索引型別是JSON物件的延伸 所以可以加上唯讀操作符(read only)
 * 4. 可以隨意擴充屬性
 */

//會要求所有StringDictionary的型別的鍵的型別要是string 其對應的值也要是string
type StringDictionary = {

    //[key:string] 官方稱其為"索引簽章" 只可以是string or number兩種類型
    [key:string]:string
}
const obj:StringDictionary = {"first":"first string"}

//模擬陣列的行為
type Index = {
  [key:number]:string
}
const arr:Index = ['first','last']
const indexOfObj:Index = {0:"first",1:"last"}
indexOfObj[20] = "twenty" //指派值到Index型別的話 也要是[number]:string

type ReadonlyIndex = {
  readonly [key:number]:string
}
const stringA:ReadonlyIndex = ['one','two'] //不能變更原有的元素值
const stringB:Index = ['one','two']//可以變更
stringB[2] = 'three'
stringB[0] = "1"

/**索引型別 Index type:單純將JSON物件內的索引名稱聯集起來變成一種型別而已 */
type Personal = {
  name:string,
  age:number,
  interest:string[]
}
type KeyOfPersonal = keyof Personal //將所有屬性聯集起來 = "name" | "age" | "interest"
type IndexOfPersonal = Personal[KeyOfPersonal] //將值的型別聯集起來 type IndexOfPersonal = string | number | string[]

//假設想要擴充Personal型別 可以使用下列方式 先複製一份Personal的索引 並且將每個索引對應值的型別對照進去 最後將要新增的屬性與之交集
type ExtendsPersonal = {
  [key in keyof Personal]:Personal[key]
} &{
  email:string
}
//上述可以簡化成以下寫法
type ExtendsPersonal1 = Personal & {email:string}
type ReadonlyPersonal = {
  readonly [key in keyof Personal]:Personal[key]
}

/**=================================================== */
/**複合型別
 * 1. 聯集型別
 * 2. 互斥聯集
 */
//聯集:把不同的型別用"|"符號集合起來
type Primitives = number | string | boolean | null | undefined

//互斥聯集
type exit1 = number | string
type exit2 = number | boolean
type exit3 = number | null
type DiscriminatedUnion = exit1 | exit2 | exit3 //type DiscriminatedUnion = string | number | boolean | null