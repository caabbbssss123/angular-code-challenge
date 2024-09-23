import { Pipe, PipeTransform } from '@angular/core';
import { renderMarkdown } from 'src/utils/string';

@Pipe({
  name: 'renderMarkdown'
})
export class RenderMarkdownPipe implements PipeTransform {
  transform(value: string): string {
    return renderMarkdown(value);
  }
}