export interface TabProps {
  className?: string;
  textClassName?: string;
  items: Array<{
    label: string;
    onClick?: (label: string) => void;
  }>;
  onClick?: (label: string) => void;
  currentTab?: string;
}
