export interface SiteMapTreeNode {
  id: string;
  name: string;
  children?: SiteMapTreeNode[];
  active?: boolean
}