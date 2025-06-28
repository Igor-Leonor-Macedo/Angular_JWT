export interface CustomSnackBarData {
  message: string;
  type: 'success' | 'error' | 'warn' | 'info';
  action?: string;
  iconPath?: string;
}
