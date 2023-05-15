# Text Carousel React 
![Example Image](https://i.ibb.co/997kWBf/Screen-Shot-2023-05-15-at-12-38-45-AM.png)

[![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/github/codesandbox/codesandbox-template-vite-react/main)

[Configuration](https://codesandbox.io/docs/projects/learn/setting-up/tasks) has been added to optimize it for [CodeSandbox](https://codesandbox.io/dashboard).

## Usage
The Text Carousel component can be used by passing the necessary props. Here's an example of how to use it:

```javascript
import TextCarousel from 'text-carousel-component';

// ...

const App = () => {
  const display = [
    ['Text 1', 'Text 2', 'Text 3'],
    ['Text 4', 'Text 5', 'Text 6'],
    ['Text 7', 'Text 8', 'Text 9'],
    ['Text 10', 'Text 11', 'Text 12'],
  ];

  return (
    <div>
      <h1>My Text Carousel</h1>
      <TextCarousel display={display} duration={2000} />
    </div>
  );
};

export default App;
```
In the example above, the display prop contains an array of arrays, where each inner array represents a row of text. The duration prop specifies the duration of the animation for each row. You can customize the values based on your requirements.

## Props

The Text Carousel component accepts the following props:

- `duration` (optional): The duration of the animation for each row, in milliseconds. If not provided, a default value of `1000` will be used.

- `durations` (optional): An array of four durations, representing the animation duration for each row respectively. The durations should be specified in milliseconds. If `durations` prop is provided, individual durations for each row will be used instead of the `duration` prop.

- `display` (required): An array of arrays representing the text to be displayed in each row. Each inner array contains the text values for a single row.

## Styling

The Text Carousel component uses CSS modules for styling. You can import the CSS module and apply your own styles. Here's an example:

```javascript
import styles from './TextCarousel.module.css';
```
In the example above, the className prop is used to apply a custom CSS class to the component.


## Resources

- [CodeSandbox — Docs](https://codesandbox.io/docs/projects)
- [CodeSandbox — Discord](https://discord.gg/Ggarp3pX5H)
- [Vite — GitHub](https://github.com/vitejs/vite)
- [Vite — Docs](https://vitejs.dev/guide/)
