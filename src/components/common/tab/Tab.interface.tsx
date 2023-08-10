export interface TabProps {
  className?: string;
  textClassName?: string;
  items: Array<{
    label: string;
    path: string;
  }>;
}
