export interface SiteMenuTreeNode {
  id: string;
  name: string;
  children?: SiteMenuTreeNode[];
  active?: boolean
  parent: string;
  module?: string;
}