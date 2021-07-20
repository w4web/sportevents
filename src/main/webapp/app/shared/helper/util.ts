export default class Util {
  static createOptions(lowEnd: number, highEnd: number, step: number): any {
    let dec = 0;
    if (step) {
      dec = this.countDecimals(step);
    }
    const list = [];
    let optionValue: any;
    for (let i = lowEnd; i <= highEnd; i++) {
      if (!step) {
        optionValue = i;
      } else {
        optionValue = (i * step).toFixed(dec);
      }
      const option = {
        label: undefined,
        value: undefined,
      };
      option.label = optionValue;
      option.value = optionValue;
      list.push(option);
    }
    return list;
  }

  static countDecimals(value: any): any {
    if (Math.floor(value) !== value) {
      return value.toString().split('.')[1].length || 0;
    }
    return 0;
  }

  static createIntegerArray(lowEnd: number, highEnd: number): any {
    const list = [];
    for (let i = lowEnd; i <= highEnd; i++) {
      list.push(i);
    }
    return list;
  }

  static createJsonArray(desc: any, lowEnd: number, highEnd: number): any {
    const list = [];
    for (let i = lowEnd; i <= highEnd; i++) {
      list.push({ description: i.toString() });
    }
    return list;
  }

  static createJsonStringArray(desc: any, values: any): any {
    const list: any = [];
    values.forEach((value: any) => {
      list.push({ description: value });
    });
    return list;
  }

  static createJsonStepArray(title: any, lowEnd: number, highEnd: number, step: number): any {
    const list = [];
    for (let i = lowEnd; i < highEnd; i++) {
      const stepUp = i * step;
      list.push({ description: stepUp.toString() });
    }
    return list;
  }

  static createStepArray(lowEnd: number, highEnd: number, step: number): any {
    const list = [];
    for (let i = lowEnd; i < highEnd; i++) {
      const stepUp = i * step;
      list.push(stepUp);
    }
    return list;
  }

  static createDoubleArray(lowEnd: number, highEnd: number): any {
    const list = [];
    for (let i = lowEnd; i <= highEnd; i++) {
      if (i < highEnd) {
        for (let j = 0; j <= 9; j++) {
          const tempStr = '' + i + ',' + j;
          list.push(tempStr);
        }
      } else {
        const tempStr = '' + i + ',' + 0;
        list.push(tempStr);
      }
    }
    return list;
  }

  static createJsonDoubleArray(name: any, lowEnd: number, highEnd: number): any {
    const list = [];
    for (let i = lowEnd; i <= highEnd; i++) {
      if (i < highEnd) {
        for (let j = 0; j <= 9; j++) {
          const tempStr = '' + i + ',' + j;
          list.push({ description: tempStr });
        }
      } else {
        const tempStr = '' + i + ',' + 0;
        list.push({ description: tempStr });
      }
    }
    return list;
  }
}
