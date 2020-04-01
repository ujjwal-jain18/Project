import { Request, Response, NextFunction } from 'express';

export default (config: object) => (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const dataToValidate: any = req.body;
  const errors: any = [];
  const validationKeys: any = Object.keys(config);
  const errorchecker = (validationRuleserror: any, msg: string) => {
    errors.push(validationRuleserror[msg].message);
  };

  let requireFlag = false;
  const validator = (
    validationRulescheck: any,
    validateKeycheck: any,
    data: any
  ) => {
    if (Object.keys(validationRulescheck).includes('require')) {
      if (validationRulescheck.require === true) {
        requireFlag = true;
      }
    }
    if (requireFlag === true) {
      if (
        Object.keys(validationRulescheck).includes('positiveNumber') &&
        validationRulescheck.positiveNumber === true &&
        // tslint:disable-next-line: radix
        Math.sign(data[validateKeycheck]) !== 1
      ) {
        errorchecker(validationRulescheck, 'typeError');
      } else if (
        Object.keys(validationRulescheck).includes('string') &&
        validationRulescheck.string === true &&
        typeof data[validateKeycheck] !== 'string'
      ) {
        errorchecker(validationRulescheck, 'typeError');
      } else if (
        Object.keys(validationRulescheck).includes('number') &&
        validationRulescheck.number === true &&
        Math.sign(data[validateKeycheck]) !== 1
      ) {
        errorchecker(validationRulescheck, 'typeError');
      }
    } else {
      errorchecker(validationRulescheck, 'Error');
    }
  };
  validationKeys.forEach(validateKey => {
    const validationRules = config[validateKey];
    if (Object.keys(validationRules).includes('in')) {
      if (
        validationRules.in.includes('body') &&
        Object.keys(dataToValidate).includes(validateKey)
      ) {
        validator(validationRules, validateKey, dataToValidate);
      }
    }
  });
  if (errors.length > 0) {
    res.send(errors);
  } else {
    console.log('All Validations Are Ok');
    next();
  }
};
