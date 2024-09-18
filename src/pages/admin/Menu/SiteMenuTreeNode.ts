export interface SiteMenuTreeNode {
  id: string;
  name: string;
  children?: SiteMenuTreeNode[];
  active?: boolean;
  parent: string;
  module?: string;
}

export function isSiteMenuTreeNode(obj: any): obj is SiteMenuTreeNode {
  return (
    obj &&
    typeof obj === 'object' &&
    typeof obj.id === 'string' &&
    typeof obj.name === 'string' &&
    typeof obj.parent === 'string' &&
    (obj.children === undefined || Array.isArray(obj.children)) &&
    (obj.active === undefined || typeof obj.active === 'boolean') &&
    (obj.module === undefined || typeof obj.module === 'string')
  );
}