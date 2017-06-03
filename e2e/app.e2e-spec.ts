import { SetlistGeneratorPage } from './app.po';

describe('angular-setlist-generator App', () => {
  let page: SetlistGeneratorPage;

  beforeEach(() => {
    page = new SetlistGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
