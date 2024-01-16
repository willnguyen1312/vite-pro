const formatAngleBrackets = (str: string) => {
  let result = str;
  const arr = str.split("");

  let countLeft = 0;
  let addedLeft = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element === ">") {
      if (countLeft === 0) {
        addedLeft++;
      } else {
        countLeft--;
      }
    } else {
      countLeft++;
    }
  }

  if (addedLeft) {
    result = "<".repeat(addedLeft) + result;
  }

  let countRight = 0;
  let addedRight = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i];

    if (element === "<") {
      if (countRight === 0) {
        addedRight++;
      } else {
        countRight--;
      }
    } else {
      countRight++;
    }
  }

  if (addedRight) {
    result = result + ">".repeat(addedRight);
  }

  return result;
};

describe("formatAngleBrackets", () => {
  it("should return empty string", () => {
    expect(formatAngleBrackets("")).toEqual("");
  });

  it("should return <>", () => {
    expect(formatAngleBrackets("<")).toEqual("<>");
  });

  it("should return <>", () => {
    expect(formatAngleBrackets(">")).toEqual("<>");
  });

  it("should return <<>>", () => {
    expect(formatAngleBrackets("<<")).toEqual("<<>>");
  });

  it("should return <<>>", () => {
    expect(formatAngleBrackets(">>")).toEqual("<<>>");
  });

  it("should return <><<><>>", () => {
    expect(formatAngleBrackets("><<><")).toEqual("<><<><>>");
  });
});
