// 단순 조건문을 사용해서 런타임에서 타입 좁히기
{
  type User = {
    name: string;
    age?: number;
  };

  function printUserAge(user: User) {
    if (user.age) {
      console.log(`User's age is ${user.age}`);
    } else {
      console.log("User's age is not provided");
    }
  }
  printUserAge({ name: "John" });
  printUserAge({ name: "John", age: 30 });
}
