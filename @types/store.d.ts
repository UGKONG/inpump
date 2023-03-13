declare type Dispatch = {
  type: keyof Store;
  payload: any;
};

declare type Store = {
  isPin: boolean;
  device: null | Device;
  lang: Lang;
  readonly TEXT: {[key: string]: string};
};
