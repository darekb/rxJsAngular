import { RxJsAngularPage } from './app.po';

describe('rx-js-angular App', () => {
  let page: RxJsAngularPage;

  beforeEach(() => {
    page = new RxJsAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
