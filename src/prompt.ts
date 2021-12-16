import {
  CancellationToken,
  CompletionContext,
  CompletionItem,
  CompletionItemKind,
  Position,
  Range,
  TextDocument,
} from 'vscode';
import { getPropertiesByStyleName } from './helpers';

import { STYLE_NAMES } from './static/css/style-names';

export function provideCompletionItems(
  document: TextDocument,
  position: Position,
  token: CancellationToken,
  context: CompletionContext
) {
  const start = new Position(position.line, 0);
  const range = new Range(start, position);
  const text = document.getText(range);
  const resultItems = getPropertiesByStyleName(text);
  if (resultItems) {
    return resultItems.map(
      (item) => new CompletionItem(`${item};`, CompletionItemKind.Property)
    );
  }
  return STYLE_NAMES.map((item) => {
    return new CompletionItem(`${item}: `, CompletionItemKind.Property);
  });
}

export function resolveCompletionItem(
  item: CompletionItem,
  token: CancellationToken
) {
  return item;
}
