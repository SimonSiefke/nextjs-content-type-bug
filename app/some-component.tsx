let someVariable: any = 2;

export const SomeComponent = () => {
  someVariable.doesNotExist();
  return <div></div>;
};
