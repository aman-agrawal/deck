export const copyTextToClipboard = (text: string) => {
  const input = document.createElement('textarea');
  input.style.opacity = '0';
  input.value = text;
  document.body.appendChild(input);
  input.select();
  const result = document.execCommand('copy');
  document.body.removeChild(input);
  return result;
};
