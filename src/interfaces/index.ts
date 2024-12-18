import { ComponentType } from 'react';

export interface IModuleProp {
  action: string;
}

export interface IDynamicModuleProp {
  id?: string;
  action: string;
  getComponentsMap: () => { [key: string]: ComponentType<{ id?: string }> };
}

export interface IModule {
  id: string;
  name: string;
}

export interface IRoute {
  path: string;
  module: IModule;
  action: string;
  moduleId: string;
  isAdmin: boolean;
  parameters?: {
    items: {
      name: string;
      value: string;
    }[];
  };
}

export interface IMenu {
  id: string;
  name: string;
  route: IRoute
  parentId: string;
}