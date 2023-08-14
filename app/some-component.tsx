import { someVariable } from "./someVariable";

export const SomeComponent = () => {
  someVariable.doesNotExist();
  return <div></div>;
};
