export interface MainButton {
  isActive: boolean;
  isVisible: boolean;
  isProgressVisible: boolean;
  show: VoidFunction;
  hide: VoidFunction;
  enable: VoidFunction;
  disable: VoidFunction;
  hideProgress: VoidFunction;
  showProgress: (leaveActive?: boolean) => void;
  onClick: (callback: VoidFunction) => void;
  offClick: (callback: VoidFunction) => void;
  setText: (text: string) => void;
  setParams: (params: {
    color?: string;
    text?: string;
    text_color?: string;
    is_active?: boolean;
    is_visible?: boolean;
  }) => void;
}

export interface ThemeParams {
  bg_color: string;
  text_color: string;
  hint_color: string;
  link_color: string;
  button_color: string;
  button_text_color: string;
  secondary_bg_color: string;
}

export interface WebApp {
  themeParams: ThemeParams;
  MainButton: MainButton;
}

export interface Telegram {
  WebApp: WebApp;
}
