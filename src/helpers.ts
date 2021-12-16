import { STYLE_PROPERTIES } from './static/css/style-properties';
/**
 * example: font-size => fontSize
 */
function toHumpName(name: string) {
  const t = name.split('-');
  return t.reduce(
    (pre, cur, i) =>
      i === 0 ? cur : pre + cur.slice(0, 1).toUpperCase() + cur.slice(1),
    ''
  );
}
export function getPropertiesByStyleName(text: string) {
  const styles = text.split(';');
  if (styles.length > 0) {
    const styleName = styles[styles.length - 1];
    if (styleName.includes(':')) {
      const name: string = toHumpName(
        styleName.split(':')[0].replace(/\s*/g, '')
      );
      return STYLE_PROPERTIES.properties[name].values;
    }
  }
  return null;
}
