/**
 * 類 class：是定義物件 設計物件的設計圖 是描述
 * 物件：是類別產生的實體 是實際上的執行者
 * 用於創建構造函數和原型繼承
 * 類別在typescript中也是一種型別 繼承父類的子類 該子類的型別就是父類|子類
 * 實例化一個類別 實例化出來的物件 該物件的型別就是對應的類別
 * 判斷物件能不能被指派到某個被註記的變數裡面 是看類別的結構
 *
 */

class Person {
  ssn: string; //這邊的變數是class person內部的變數與構造函數內的參數不同 所以下方要加入this關鍵字
  firstName: string;
  lastName: string;

  /**構造函數被明確定義並放置在類的內部 */
  /**typescript類為類的屬性和方法添加了類型註解 */
  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName}${this.lastName}`;
  }
}

/**
 * 使用Person類 與 使用Person構造函數相同
 * 從Person類創建的物件person 稱為實例 而這過程稱為實例化
 */
let person:Person = new Person("101-12-204", "john", "duc"); 
console.log(person.getFullName);

/**
 * 修飾符：改變了一個類的屬性和方法的可見性
 * typescript在編譯時從邏輯上控制訪問 而不是在運行時
 * 1. private 私有的
 * 2. protected 保護的
 * 3. public 公共的
 */

/**
 * private修飾符將可見性限制為僅在同一類中
 * 將private添加到屬性或方法時
 * 限制類的成員只能在類內部訪問
 * 任何嘗試在類外部訪問私有屬性或方法都會導致編譯錯誤
 */

class PersonPrivate {
  private ssn: string;
  private firstName: string;
  private lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName}${this.lastName}`;
  }
}
/*let person2 = new PersonPrivate("153-07-3130", "John", "Doe");
       console.log(person2.ssn); // compile error*/

/**
 * public 修飾符允許類的屬性和方法從所有位置被訪問
 * 若沒有為屬性和方法指定任何訪問修飾符
 * 默認為公共修飾符
 */
class PersonPublic {
  public Id: number;
  public currency: string;
  public classname: string;

  constructor(Id: number, currency: string, classname: string) {
    this.Id = Id;
    this.currency = currency;
    this.classname = classname;
  }

  getFullInfo(): string {
    return `Id:${this.Id},currency:${this.currency},class:${this.classname}`;
  }
}

let TestPublic = new PersonPublic(1, "usd", "class1");
console.log(TestPublic.Id);

/**
 * protected修飾符
 * 允許一個類的屬性和方法在同一個類和子類中被訪問
 * 當一個類(子類)繼承另一個類(父類) 他就是父類的一個子類
 * 無法從其他地方訪問受保護的屬性或方法
 * 
 * get / set : 屬於物件中的存取方法 動態模擬物件屬性存值與取值的行為
 */

class PersonProtected {
  protected ssn: string;

  constructor(ssn: string) {
    this.ssn = ssn;
  }

  // 加入get關鍵字 就可以讓方法變成用物件屬性的方式呼叫 
  // 加入get關鍵字的方法 該方法不可以有參數
  get getFullName() {
    return `${this.ssn}`;
  }

  //加入set關鍵字 就可以讓方法變成用物件屬性的方式呼叫 並且改變值
  set changeSSN(input:string){
    this.ssn = input
  }
}

const protectedObj = new PersonProtected("123456")

class childrenPersonProtected extends PersonProtected{
  constructor(ssn:string){
    super(ssn)
    this.ssn = ssn
  }
}
protectedObj.getFullName
protectedObj.changeSSN = "233"



/**
 * readonly:允許標記一個類的屬性為不可變
 * 只有在兩個地方才能對只讀屬性進行賦予值
 * 在屬性聲明中
 * 在同一個類的構造函數中
 */

class PersonReadOnly {
  readonly birthDate: Date; //把一個屬性標記為不可變

  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}

/**
 * setters and getters 允許控制類的屬性訪問
 * 一個getter方法返回屬性的值
 * 一個setter方法更新該屬性的值
 */

/**
 * 範例：inputAge可以是任何數字
 * 確保年齡的有效性 在賦值前必須檢查
 * 但是要在每個地方使用此檢查會很繁瑣
 * 避免重複檢查 可以使用setters and getters
 * 改成下方範例方法
 */
class SetAndGet {
  public age: number;
  public firstName: string;
  public lastName: string;
}

let testSet = new SetAndGet();
let inputAge: number = 0;
if (inputAge > 0 && inputAge < 200) {
  testSet.age = inputAge;
}

/*
 * 1. 將age, firstName ,lastName屬性的訪問修飾符從public改為private
 * 2. 將屬性age改為＿age
 * 3. 為_age屬性創建getter and setter方法 在setter方法中 在將其分配給＿age屬性前 檢查年齡的有效性
 */
class SetAndGetPerson {
  private _age: number;
  private _firstName: string;
  private _lastName: string;

  public get age() {
    return this._age;
  }

  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 200) {
      throw new Error("the age is invalid");
    }
    this._age = theAge;
  }

  public getFullName(): string {
    return `${this._firstName}${this._lastName}`;
  }
}

let TestSet = new SetAndGetPerson();
TestSet.age = 10; //訪問age的setter方法
TestSet.age = 0;

/**
 * 繼承：一個類可以重用另一個類的屬性和方法
 * 繼承屬性和方法的類被稱為子類 而其屬性和方法被繼承的類被稱為父類
 * Protected狀態下 子類可以使用父類的的屬性及方法
 * Private狀態下 子類"不可以"使用父類的屬性及方法
 */

class Per {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  describe(): string {
    return `This is ${this.firstName} ${this.lastName}`;
  }
}

/**
 * Personal類有一個初始化 firstName and lastName屬性的構造函數
 * 需要在Son類的構造函數中通過調用其父類的構造函數來初始化這些屬性
 * 在子類的構造函數中調用父類的構造函數 可以用super.methodInParentClass()語法
 */
class Son extends Per {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    super(firstName, lastName);
  }

  describe(): string {
    return super.describe() + `I'm a ${this.jobTitle}`;
  } //使用了super.methodInParentClass()語法調用了父類Personal的describe()方法
}

let son = new Son("json", "doe", "developer");
console.log(son.getFullName()); //因為Son繼承了Personal類的屬性和方法 可以在Son對象上調用getFullName() and describe()
console.log(son.describe());

/**
 * 方法重寫:若是希望Son類有自己版本的describe方法 可以在Son定義它
 */

/**
 * 靜態屬性：是在一個類的所有實例中共享的
 * 聲明一個靜態屬性 使用static關鍵字
 * 是一個類別本身的屬性或方法
 * 訪問靜態屬性：className.porpertyName語法
 */

/**
 * 範例：
 * headcount是一個靜態屬性 當一個新的對象被創建 該值會增加1
 */
class Employeee {
  static headcount: number = 0; //靜態屬性

  constructor(
    private firstName: string,
    private lastName: string,
    private jobtitle: string
  ) {
    Employeee.headcount++;
  }
}

let john = new Employeee("john", "doe", "front-end");
let janelin = new Employeee("janelin", "lin", "UI");

/**
 * 靜態方法：在類的實例間共享的
 * 聲明一個靜態方法 在方法名稱前使用static關鍵字
 */

class Student {
  private static headcount: number = 0;

  constructor(
    private firstName: string,
    private lastName: string,
    private Id: number
  ) {
    Student.headcount++;
  }

  public static getHeadcount() {
    return Student.headcount;
  }
}

/**
 * 抽象類：用於定義派生類擴展的通用行為 與普通類不同 抽象類不能直接實例化
 * 抽象類是專門被設計用來被繼承的
 * 聲明一個抽象類 使用abstract關鍵字
 * 抽象方法不包含實現 僅定義了方法 而沒有實作 因此不能生成物件
 * 抽象方法必須由繼承的類中實現
 */

abstract class EmployeeProperty {
  constructor(private firstName: string, private lastName: string) { }

  abstract getSalary(): number;//在抽象類中不定義抽象方法 而是由繼承的子類去實現這個方法
  get FullName(): string {
    return `${this.firstName}${this.lastName}`;
  }

  compensationStatement(): string {
    return `${this.FullName} makes ${this.getSalary} a month`;
  }
}
/**
 * 在EmployeeProperty類中
 * 構造函數聲明了firstName and lastName屬性
 * getSalary()方法是一個抽象方法 派生類將根據EmployeePropert的類型來實現邏輯
 * 由於抽象類不能被實例化 因此要定義一個FullEmployee子類繼承 下方範例
 */

class FullEmployeee extends EmployeeProperty {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
  }
  getSalary(): number {
    return this.salary;
  }
}

/**下方同樣是繼承父類EmployeeProperty的子類Contractor */
class Contractor extends EmployeeProperty {
  constructor(
    firstName: string,
    lastName: string,
    private rate: number,
    private hours: number
  ) {
    super(firstName, lastName);
  }
  getSalary(): number {
    return this.rate * this.hours;
  }
}

//範例:提款機

type UserAcc = {
  username: string
  password: string
  savings: number
}


class CashMachine {
  private currentUser?: UserAcc

  //這邊宣告Users是靜態類別成員 是因為如果沒有這樣宣告 每次創建一個新的CashMachine實例 都會再次初始化Users 未避免這種情況 才會這樣做
  private static Users: UserAcc[] = [
    { username: "max", password: "123456789", savings: 45600 },
    { username: "amy", password: "123456789", savings: 25600 },
    { username: "white", password: "123456789", savings: 15600 },
  ]
  

  login(username: string, password: string): void {
    for (let user of CashMachine.Users) {
      if (user.username === username) {
        if (user.password === password) {
          this.currentUser = user
          return;
        }else{
          throw new Error("password is wrong")
        }
      }
    }
    throw new Error("can't find this user")
  }

  logout():void{
    this.currentUser = undefined
  }


  deposit(amount:number):void{
    if(this.currentUser === undefined){
      throw new Error("please login first")
    }
    this.currentUser.savings += amount
  }


}