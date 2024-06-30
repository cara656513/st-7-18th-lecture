{
  function printValue(value: string | number) {
    if (typeof value === "string") {
      console.log(`String: ${value.toUpperCase()}`);
    } else {
      console.log(`Number: ${value.toFixed(2)}`);
    }
  }

  // 테스트 코드
  printValue("Hello"); // String: HELLO
  printValue(42); // Number: 42.00
}
