import { Selector } from 'testcafe';

export default class Page {
  constructor() {
    this.nameInput       = Selector('#developer-name');
    this.submitButton    = Selector('#submit-button');
    this.articleHeader   = Selector('#article-header');
  }
}
