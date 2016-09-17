module Test {
  export interface IFirstInterface {
    name : string;
    getName : (test : string) => void;
  }

  export class FirstClass implements IFirstInterface {
    get name() {
      return "name"
    };
    set name(value : string){
      //reade only
    }
    getName( canBeNamedAnything : string) {
      // Compiled with --strictNullChecks
      let x: number;
      let y: number | undefined;
      let z: number | null | undefined;
      x = 1;  // Ok
      y = 1;  // Ok
      z = 1;  // Ok
      x = undefined;  // Error
      y = undefined;  // Ok
      z = undefined;  // Ok
      x = null;  // Error
      y = null;  // Error
      z = null;  // Ok
      x = y;  // Error
      x = z;  // Error
      y = x;  // Ok
      y = z;  // Error
      z = x;  // Ok
      z = y;  // Ok
    }
  }
}
