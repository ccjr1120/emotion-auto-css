import {
  CancellationToken,
  CompletionContext,
  CompletionItem,
  CompletionItemKind,
  Position,
  Range,
  TextDocument,
} from 'vscode';

import { CSS_STYLE_NAMES } from './static/css/style-names';

export function provideCompletionItems(
  document: TextDocument,
  position: Position,
  token: CancellationToken,
  context: CompletionContext
) {
  return CSS_STYLE_NAMES.map((item) => {
    return new CompletionItem(`${item}: `, CompletionItemKind.Property);
  });
}

export function resolveCompletionItem(
  item: CompletionItem,
  token: CancellationToken
) {
  return item;
}
