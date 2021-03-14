import { useEffect, useState } from 'react';

const fulltext = 'Em breve... :)';

export default function CommingSoon() {
  const [text, setText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setText((state) =>
        setText(
          fulltext.length === state.length
            ? ''
            : state.concat(fulltext[state.length]),
        ),
      );
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <h1 style={{ textAlign: 'center', margin: '100px 50px', height: 300 }}>
      {text}
    </h1>
  );
}
