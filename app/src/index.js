import { Hello } from "./libs/hello";
import { DateTime } from "luxon";

// Helloの利用
const taro = new Hello("taro");
taro.greet();

// DateTimeの利用
const now = DateTime.local();
console.log(`現在日時：${now}`);
console.log(`現在日時(yyyy/MM/dd形式)：${now.toFormat('yyyy/MM/dd')}`);
console.log(`明日(yyyy/MM/dd形式)：${now.plus({ days: 1 }).toFormat('yyyy/MM/dd')}`);
