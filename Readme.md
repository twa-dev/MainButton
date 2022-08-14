## MainButton
React component for [Telegram Web Apps (TWA)](https://core.telegram.org/bots/webapps).

### Motivation
TWA SDK contains interface to control [MainButton](https://core.telegram.org/bots/webapps#mainbutton). It's written in imperative way:

```js
const MainButton = window.Telegram.WebApp.MainButton;

MainButton.setText('Submit');
MainButton.show();
MainButton.onClick(() => alert('submitted'));
```

It's not the best way to write code, especially if you use libraries like React. 

This package exports React component that wraps TWA MainButton SDK:

```js
import MainButton from 'twa.mainbutton';

<MainButton text="Submit" onClick={() => alert('submitted')} />
```

### Demo
[@MainButtonDemoBot](https://t.me/MainButtonDemoBot)

### Props
Naming is pretty straight forward and corresponds SDK props and methods:
- `text`
- `color`
- `textColor`
- `disabled`
- `progress`
- `onClick`