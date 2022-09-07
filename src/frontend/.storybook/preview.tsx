import { useState } from "react";
import { useAsyncEffect } from "../js/utils/useAsyncEffect";

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}


const IconsWrapper = props => {
  const [symbols, setSymbols] = useState('');

  useAsyncEffect(async () => {
    const response = await fetch('/icons.html');
    const body = await response.text();
    setSymbols(body);
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{__html: symbols}}/>
      {props.children}
    </div>
  );
};

export const decorators = [
  (Story) => (
    <IconsWrapper>
      <Story/>
    </IconsWrapper>
  ),
];