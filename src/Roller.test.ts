import {Roller} from './Roller';

describe("Smoke test", ()=> {
  test("The test scaffold runs successfully.", ()=> {
    expect(true).toBe(true);
  });
})

describe("Roller tests", ()=> {
  test("Roll Function Valid values", () => {
    let myDie: Roller = new Roller(8);
    let value: number = myDie.roll(6);
    expect(value).toBe(6);
  });
  test("Roll Function invalid Constructor", () => {
    let myDie: Roller = new Roller(1);
    let value: number = myDie.roll(6);
    expect(value).toBe(6);
  });
  test("Roll Function invalid higher value", () => {
    let myDie: Roller = new Roller(8);
    let value: number = myDie.roll(9);
    expect(value).toBe(0);
  });
  test("Roll Function invalid lower value", () => {
    let myDie: Roller = new Roller(8);
    let value: number = myDie.roll(0);
    expect(value).toBe(0);
  });
  test("Roll Function Valid values equal to faces", () => {
    let myDie: Roller = new Roller(8);
    let value: number = myDie.roll(8);
    expect(value).toBe(8);
  });

  test("last Function Valid values", () => {
    let myDie: Roller = new Roller(8);
    let value: number = myDie.roll(6);
    let last:number = myDie.last();
    expect(last).toBe(6);
  });
  test("last Function Valid values multiple rolls", () => {
    let myDie: Roller = new Roller(8);
    let value: number = myDie.roll(6);
    let value2: number = myDie.roll(1);
    let value3: number = myDie.roll(8);
    let last:number = myDie.last();
    expect(last).toBe(8);
  });
  // test("last Function without rolling", () => {
  //   let myDie: Roller = new Roller(8);
  //   let last:number = myDie.last();
  //   expect(last).toBe(0);
  // });

  test("distribution Function size check", () => {
    let myDie: Roller = new Roller(8);
    const dis = myDie.distribution();
    expect(dis.size).toBe(8);
  });
  test("distribution Function initialization of map check", () => {
    let myDie: Roller = new Roller(8);
    const dis = myDie.distribution();
    for(let i=1; i<=8; i++){
      expect(dis.get(i)).toBe(0);
    }
    // expect(dis.size).toBe(8);
  });
  test("distribution Function size check", () => {
    let myDie: Roller = new Roller(8);
    myDie.roll(1);
    myDie.roll(2);
    myDie.roll(3);
    const dis = myDie.distribution();
    expect(dis.get(1)).toBe(1);
    expect(dis.get(2)).toBe(1);
    expect(dis.get(3)).toBe(1);
    expect(dis.get(4)).toBe(0);
    expect(dis.get(5)).toBe(0);
    expect(dis.get(6)).toBe(0);
    expect(dis.get(7)).toBe(0);
    expect(dis.get(8)).toBe(0);
  });
});