export const objectGenerator = (rootKeyCount: number, maxDepth: number, ) => {
  const obj = {};
  return objectGeneratorHelper(obj, rootKeyCount, maxDepth);
};


const objectGeneratorHelper = (obj: object, rootKeyCount: number, maxDepth: number): object => {
  if (maxDepth > 0) {
      for (let i = 0; i < rootKeyCount; i++) {
          const variable = generateRandomString();
          obj = generateRandomTypes(obj, variable);
          if (typeof obj[variable] === 'object' && !Array.isArray(obj[variable])) {
              objectGeneratorHelper(obj[variable], Math.floor(rootKeyCount / 2), (maxDepth - 1));
          }
      }
  }
  return obj;
};

const generateRandomTypes = (palceHolder: object, variable: string): any => {
  const index: number = generateRandomNumber(5);
  switch (index) {
      case 0:
          palceHolder[variable] = 23;
          break;
      case 1:
          palceHolder[variable] = 'asd';
          break;
      case 2:
          palceHolder[variable] = false;
          break;
      case 3:
          palceHolder[variable] = [];
          break;
      default:
          palceHolder[variable] = {};
          break;
  }
  return palceHolder;
};

const generateRandomNumber = (max: number): number => {
  return Math.floor(max * Math.random());
};

const generateRandomString = () => {
  return Math.random().toString(36).substring(2, 12) + Math.random().toString(36).substring(2, 12);
};
