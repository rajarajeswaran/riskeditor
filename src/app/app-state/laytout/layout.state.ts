export interface LayoutState
{
  windowId : string;
  description: string;
  isActive: boolean;
  children : Array<LayoutState>;
}
