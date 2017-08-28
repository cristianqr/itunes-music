import { ItunesMusicPage } from './app.po';

describe('itunes-music App', () => {
  let page: ItunesMusicPage;

  beforeEach(() => {
    page = new ItunesMusicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
