import { DawnPage } from './app.po';

describe('dawn App', () => {
  let page: DawnPage;

  beforeEach(() => {
    page = new DawnPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
