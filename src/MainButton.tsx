import { FC, useEffect } from "react";
import { TelegramWindow } from "./types";

export interface MainButtonProps {
  disabled?: boolean;
  progress?: boolean;
  color?: string;
  textColor?: string;
  onClick: VoidFunction;
  text: string;
}

const telegramWindow = window as unknown as TelegramWindow;

const mainButton = telegramWindow.Telegram.WebApp.MainButton;
const { button_color, button_text_color } =
  telegramWindow.Telegram.WebApp.themeParams;

export const MainButton: FC<MainButtonProps> = ({
  disabled,
  color,
  textColor,
  text,
  onClick,
  progress,
}) => {
  useEffect(() => {
    return () => {
      mainButton.hide();
      mainButton.enable();
      mainButton.hideProgress();
      mainButton.setParams({
        color: button_color,
        text_color: button_text_color,
      });
    };
  }, []);

  useEffect(() => {
    if (typeof progress === "boolean") {
      if (progress) {
        mainButton.showProgress();
        mainButton.disable();
      } else {
        mainButton.hideProgress();
      }
    }
    if (typeof disabled === "boolean") {
      disabled || progress ? mainButton.disable() : mainButton.enable();
    }
  }, [disabled, progress]);

  useEffect(() => {
    if (color || textColor) {
      mainButton.setParams({ color, text_color: textColor });
    }
  }, [color, textColor]);

  useEffect(() => {
    if (text) {
      mainButton.setText(text);
      !mainButton.isVisible && mainButton.show();
    }
  }, [text]);

  useEffect(() => {
    if (onClick) {
      telegramWindow.Telegram.WebApp.MainButton.onClick(onClick);
      return () => {
        telegramWindow.Telegram.WebApp.MainButton.offClick(onClick);
      };
    }
  }, [onClick]);

  return null;
};
