export interface IMenuItem {
  label: string;
  icon?: React.ReactNode;
  link?: string; // optional if has children
  children?: IMenuItem[];
  key: string;
  accessKey?: string; 
}